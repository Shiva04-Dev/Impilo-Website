import { motion } from 'framer-motion';
import { Database, ShieldAlert, Heart, Languages, BrainCircuit } from 'lucide-react';

// [EDITABLE] Add or remove agents here
const agents = [
  {
    name: "Triage Agent",
    role: "Initial Assessment",
    icon: BrainCircuit,
    desc: "Analyzes intent and severity of the user's first message."
  },
  {
    name: "Cultural Context",
    role: "Linguistic Nuance",
    icon: Languages,
    desc: "Ensures responses respect South African cultural idioms and slang."
  },
  {
    name: "Safety Agent",
    role: "Crisis Protection",
    icon: ShieldAlert,
    desc: "Monitors for self-harm and triggers immediate crisis escalation."
  },
  {
    name: "Support Agent",
    role: "Emotional Care",
    icon: Heart,
    desc: "Delivers evidence-based therapeutic techniques like CBT."
  },
  {
    name: "Memory Agent",
    role: "Continuity of Care",
    icon: Database,
    isSpecial: true,
    desc: "Safely stores emotional journey context for long-term support."
  }
];

// [EDITABLE] Define the steps of the user journey
const steps = [
  { n: "01", t: "Arrival", d: "A user sends a first message in English, isiZulu, or Afrikaans via WhatsApp." },
  { n: "02", t: "Contextualization", d: "Impilo recognizes cultural nuances and current emotional state instantly." },
  { n: "03", t: "Stabilization", d: "Evidence-based techniques are used to ground the user in the moment." },
  { n: "04", t: "Pathways", d: "If needed, the user is seamlessly connected to human services like SADAG." }
];

export default function HowItWorks() {
  return (
    <div className="pt-24 min-h-screen bg-warm-paper">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-teal-mid mb-4 font-bold">The Architecture</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-teal-deep italic">Five Intelligence Layers. One Conversation.</h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* SVG Connector Lines (Hidden on mobile) */}
            <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-teal-faint/40 hidden md:block -z-10" />
            
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl border ${
                  agent.isSpecial 
                    ? "bg-coral-pale border-coral" 
                    : "bg-teal-deep border-teal-mid text-white"
                } relative group`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  agent.isSpecial ? "bg-coral text-white" : "bg-teal-mid text-white"
                }`}>
                  <agent.icon size={24} />
                </div>
                <h4 className="font-serif text-xl italic mb-1">{agent.name}</h4>
                <p className={`text-xs uppercase tracking-widest font-bold mb-4 ${
                  agent.isSpecial ? "text-coral" : "text-teal-faint"
                }`}>
                  {agent.role}
                </p>
                <p className={`text-sm leading-relaxed ${
                  agent.isSpecial ? "text-teal-deep/80" : "text-teal-faint/60"
                }`}>
                  {agent.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-warm-paper to-cream overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="font-serif text-4xl text-teal-deep italic mb-8">The User Journey</h3>
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-6 relative">
                  <span className="text-6xl font-serif italic text-teal-faint opacity-40 absolute -left-4 -top-6 -z-10">{step.n}</span>
                  <div className="pt-2">
                    <h5 className="font-bold text-teal-deep mb-2">{step.t}</h5>
                    <p className="text-teal-mid/70">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-coral/5 blur-3xl rounded-full" />
            <div className="relative bg-teal-deep rounded-[3rem] p-4 border-8 border-teal-mid shadow-2xl w-full max-w-[320px] mx-auto overflow-hidden">
              <div className="bg-teal-mid/50 py-4 px-6 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-coral" />
                <span className="text-white font-medium">Impilo</span>
              </div>
              <div className="space-y-4 px-2 pb-8">
                <div className="bg-white/10 rounded-2xl p-3 text-white/90 text-sm max-w-[80%]">
                  Sawubona! How are you feeling today?
                </div>
                <div className="bg-coral rounded-2xl p-3 text-white text-sm ml-auto max-w-[80%]">
                  Ngyesaba, I'm feeling very overwhelmed.
                </div>
                <div className="bg-white/10 rounded-2xl p-3 text-white/90 text-sm max-w-[80%]">
                  I hear you. It sounds like a lot is weighing on you right now. Let's take a moment to just breathe together...
                </div>
              </div>
              <div className="bg-teal-mid/30 py-4 px-4 mt-4 border-t border-white/10">
                <div className="bg-white/20 h-8 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
