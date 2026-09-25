import { useEffect, useRef, useState } from 'react';
import { MessageSquareText, ShieldCheck, Send, RotateCcw } from 'lucide-react';

type Msg = { id: number; from: 'user' | 'bot' | 'error'; text: string };

// Empty string = same origin (the Vite dev proxy forwards /demo to the backend)
const API_URL = import.meta.env.VITE_API_URL ?? '';

// Web chat is on in `npm run dev`, off in production builds unless explicitly enabled
const WEB_CHAT_ENABLED = import.meta.env.DEV || import.meta.env.VITE_ENABLE_WEB_CHAT === 'true';

const WHATSAPP_URL = 'https://wa.me/15556594022';

function getUserId(): string {
  const KEY = 'impilo-web-user';
  let id = localStorage.getItem(KEY);
  if (!id) {
    // "web-" prefix keeps test users separate from WhatsApp phone numbers in Cosmos DB
    id = `web-${crypto.randomUUID()}`;
    localStorage.setItem(KEY, id);
  }
  return id;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mimic WhatsApp pacing: longer messages take a little longer to "type"
const typingDelay = (text: string) => Math.min(600 + text.length * 15, 2500);

export default function TryIt() {
  if (!WEB_CHAT_ENABLED) return <WhatsAppOnly />;
  return <WebChat />;
}

function WebChat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [typing, setTyping] = useState(false);
  const nextId = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const userId = useRef(getUserId());

  // Scroll only the chat container; scrollIntoView would also scroll the whole page
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const add = (from: Msg['from'], text: string) =>
    setMessages((prev) => [...prev, { id: nextId.current++, from, text }]);

  async function send(text: string, { silent = false } = {}) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    if (!silent) add('user', trimmed);
    setInput('');
    setBusy(true);
    setTyping(true);

    try {
      const res = await fetch(`${API_URL}/demo/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId.current, message: trimmed }),
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);

      const data: { messages?: string[] } = await res.json();
      const replies = data.messages ?? [];

      for (const reply of replies) {
        setTyping(true);
        await sleep(typingDelay(reply));
        setTyping(false);
        add('bot', reply);
      }
      if (replies.length === 0) add('error', 'No reply came back. Check the backend console.');
    } catch (err) {
      console.error(err);
      add('error', "Couldn't reach Impilo. Is the backend running on port 3000?");
    } finally {
      setTyping(false);
      setBusy(false);
    }
  }

  async function newChat() {
    if (busy) return;
    setMessages([]);
    await send('start over', { silent: true }); // matches a RESET_TRIGGER in conversation.js
  }

  return (
    <div className="min-h-screen bg-teal-deep flex items-center justify-center pt-24 pb-10 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-mid/20 blur-[120px] rounded-full -mr-48 -mt-48" />

      <div className="relative z-10 w-full max-w-lg flex flex-col h-[75vh] min-h-[480px] rounded-2xl overflow-hidden shadow-2xl bg-warm-paper">
        <div className="flex items-center justify-between px-5 py-4 bg-teal-mid text-white">
          <div>
            <h2 className="font-serif italic text-2xl leading-none">Impilo</h2>
            <div className="flex items-center gap-1.5 text-xs text-teal-faint/80 mt-1">
              <ShieldCheck size={14} />
              <span>Private & Anonymous · Web test chat</span>
            </div>
          </div>
          <button
            onClick={newChat}
            disabled={busy}
            className="flex items-center gap-1.5 text-sm text-teal-faint hover:text-white disabled:opacity-40 transition-colors"
            title="Clear history and start again"
          >
            <RotateCcw size={16} /> New chat
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 space-y-3">
          {messages.length === 0 && !typing && (
            <p className="text-center text-sm text-warm-ink/50 mt-8">
              Say hi in English, Afrikaans or isiZulu to start.
            </p>
          )}

          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={
                  'max-w-[80%] px-4 py-2.5 rounded-2xl text-[15px] leading-relaxed whitespace-pre-wrap animate-fade-up ' +
                  (m.from === 'user'
                    ? 'bg-teal-mid text-white rounded-br-sm'
                    : m.from === 'bot'
                      ? 'bg-cream text-warm-ink rounded-bl-sm'
                      : 'bg-coral-pale text-coral text-sm rounded-bl-sm')
                }
              >
                {m.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-cream px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                <span className="w-2 h-2 rounded-full bg-teal-mid/60 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-teal-mid/60 animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 rounded-full bg-teal-mid/60 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}
        </div>

        <p className="px-4 py-1.5 text-center text-[11px] text-warm-ink/40 bg-warm-paper">
          This chat is only private on this device. Tap "New chat" before you leave a shared computer.
        </p>

        <div className="border-t border-cream bg-white px-3 py-3 flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            rows={1}
            placeholder={busy ? 'Impilo is replying…' : 'Type a message…'}
            disabled={busy}
            className="flex-1 resize-none rounded-xl bg-warm-paper px-4 py-2.5 text-[15px] outline-none focus:ring-2 focus:ring-teal-faint disabled:opacity-60 max-h-32"
          />
          <button
            onClick={() => send(input)}
            disabled={busy || !input.trim()}
            className="bg-teal-mid text-white p-3 rounded-xl hover:bg-teal-deep disabled:opacity-40 transition-colors"
            aria-label="Send"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function WhatsAppOnly() {
  return (
    <div className="min-h-screen bg-teal-deep flex items-center justify-center pt-20 md:pt-0 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-mid/20 blur-[120px] rounded-full -mr-48 -mt-48" />

      <div className="relative z-10 flex flex-col items-center text-center text-white space-y-8 px-6 max-w-lg">
        <div className="space-y-4">
          <h2 className="font-serif italic text-5xl">Impilo</h2>
          <p className="text-teal-faint/80 text-lg leading-relaxed">
            A safe, private space to express what you're carrying — in English, isiZulu, or Afrikaans.
          </p>
        </div>

        <div className="flex items-center gap-3 text-sm text-teal-faint/60">
          <ShieldCheck size={18} />
          <span>Private & Anonymous</span>
        </div>

        <a
          href={WHATSAPP_URL}
          className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity w-full max-w-xs"
        >
          Chat on WhatsApp <MessageSquareText size={20} />
        </a>
      </div>
    </div>
  );
}
