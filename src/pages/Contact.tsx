import { motion } from 'framer-motion';
import { Mail, Globe, MessageCircle } from 'lucide-react';

// [EDITABLE] Replace with your actual team member names and roles
const team = [
  { 
    name: "Shiva Ganesh", 
    role: "Lead Strategist and Engineer", 
    email: "ganeshshiva772@gmail.com" 
  },
  { 
    name: "Cael Joel", 
    role: "Pitch and Commercial Lead", 
    email: "caeljoel13@gmail.com" 
  },
  { 
    name: "Kai Ismail", 
    role: "Agent and Bot Architect", 
    email: "kaiismail@gmail.com" 
  },
  { 
    name: "Hagan Le Ray", 
    role: "Content Safety and Script Architect", 
    email: "pilotmarble@gmail.com" 
  },
  { 
    name: "Kallan Le Ray", 
    role: "UI/UX Designer and Builder", 
    email: "kallanleray@gmail.com" 
  }
];

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-teal-mid to-warm-paper">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8"
          >
            Naspers Labs AI for Good 2026
          </motion.div>
          
          <h2 className="font-serif text-5xl md:text-7xl text-white italic mb-12">Reach out to us.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl shadow-teal-deep/5 text-left"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-teal-faint/30 flex items-center justify-center text-teal-deep">
                    <Mail size={20} />
                  </div>
                </div>
                <h4 className="font-serif text-xl italic text-teal-deep mb-1">{member.name}</h4>
                <p className="text-xs uppercase tracking-widest text-coral font-bold mb-4">{member.role}</p>
                <a href={`mailto:${member.email}`} className="text-sm text-teal-mid hover:text-coral transition-colors underline underline-offset-4">
                  {member.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h3 className="font-serif text-4xl md:text-6xl text-teal-deep italic">Built here. For here. By us.</h3>
            <p className="text-teal-mid/70 text-lg max-w-xl mx-auto">
              Impilo is a continuous commitment to the mental well-being of the next generation of South Africans.
            </p>
          </div>

          <div className="flex justify-center gap-8 text-teal-mid">
            {/* [EDITABLE] Replace '#' with your actual social/web links */}
            <a href="#" title="Website" className="hover:text-coral transition-all transform hover:scale-110"><Globe size={32} /></a>
            <a href="#" title="LinkedIn/GitHub" className="hover:text-coral transition-all transform hover:scale-110"><MessageCircle size={32} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
