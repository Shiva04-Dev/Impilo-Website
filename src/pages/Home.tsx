import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn: any = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-mid/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-coral/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center z-10 pt-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif italic text-6xl md:text-8xl text-white mb-6"
          >
            Impilo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xl md:text-2xl text-teal-faint/90 font-light mb-12 tracking-wide"
          >
            Health, in your language, on your phone.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/try-it" 
              className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-xl shadow-coral/20"
            >
              Start a Conversation <MessageCircle size={20} />
            </Link>
            <Link 
              to="/about" 
              className="text-white/80 hover:text-white px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 transition-all underline decoration-teal-faint/30 underline-offset-8"
            >
              Learn our story <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-warm-paper">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <motion.div variants={fadeIn} className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-teal-deep to-teal-mid font-bold">
                1 in 3
              </motion.div>
              <motion.div variants={fadeIn} className="text-teal-deep font-medium text-lg">
                SA mental health conditions
              </motion.div>
              <motion.div variants={fadeIn} className="text-teal-mid/50 text-xs italic">
                Source: South African Depression and Anxiety Group (sadag.org)
              </motion.div>
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <motion.div variants={fadeIn} className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-teal-deep to-coral font-bold">
                75%
              </motion.div>
              <motion.div variants={fadeIn} className="text-teal-deep font-medium text-lg">
                Receive no treatment at all
              </motion.div>
              <motion.div variants={fadeIn} className="text-teal-mid/50 text-xs italic">
                Source: WHO Mental Health Gap Action Programme (who.int)
              </motion.div>
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <motion.div variants={fadeIn} className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-teal-deep to-teal-mid font-bold">
                R1,500
              </motion.div>
              <motion.div variants={fadeIn} className="text-teal-deep font-medium text-lg">
                Average cost per session
              </motion.div>
              <motion.div variants={fadeIn} className="text-teal-mid/50 text-xs italic">
                Source: SACDHE private practice surveys
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 max-w-2xl mx-auto text-center"
          >
            <p className="text-2xl text-teal-deep font-light leading-relaxed">
              Impilo bridges the gap with a multi-agent AI system delivering free, culturally grounded support in English, isiZulu, and Afrikaans.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
