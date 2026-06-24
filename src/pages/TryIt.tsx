import { MessageSquareText, ShieldCheck } from 'lucide-react';

export default function TryIt() {
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
          href="https://wa.me/15556594022"
          className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity w-full max-w-xs"
        >
          Chat on WhatsApp <MessageSquareText size={20} />
        </a>
      </div>
    </div>
  );
}