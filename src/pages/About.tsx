import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 px-6 bg-gradient-to-b from-teal-mid to-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] text-white/60 mb-8 font-bold"
          >
            The Experience of a Common Student
          </motion.h2>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-3xl md:text-5xl text-white leading-tight"
          >
            "He has data, a phone, and nowhere to put what he's carrying."
          </motion.blockquote>
        </div>
      </section>

      <section className="py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-teal-deep italic">The Depth of the Problem</h3>
            <p className="text-teal-mid/80 leading-relaxed text-lg">
              In South Africa, mental healthcare is often a luxury. Language barriers, cultural stigma, and the sheer cost of private therapy (averaging R1,200 per hour) create a canyon between those who need help and those who get it.
            </p>
            <p className="text-teal-mid/80 leading-relaxed text-lg">
              We built Impilo because emotional support shouldn't depend on your bank balance or your proximity to a city center.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-teal-deep italic">Our Vision</h3>
            <p className="text-teal-mid/80 leading-relaxed text-lg">
              Mental health access is among the most acute equity failures in South Africa today.Impilo directly targets the intersection of healthcare inequality,youth marginalisation & digital inclusion. Delivering a social good that the formal healthcare system cannot currently provide at scale.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-32 p-12 bg-white rounded-3xl shadow-sm border border-teal-faint/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full bg-teal-faint/30 flex-shrink-0 flex items-center justify-center">
              <span className="text-4xl font-serif italic text-teal-deep">"</span>
            </div>
            <div>
              <p className="text-xl text-teal-deep italic font-serif mb-4">
                "Societal pressure has forced us men to hide our feelings and deal with our problems in slience."
              </p>
              <p className="text-sm uppercase tracking-widest text-teal-mid/60 font-bold">
                — Anathi Juta, 23, Unemployed
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-32 p-12 bg-white rounded-3xl shadow-sm border border-teal-faint/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full bg-teal-faint/30 flex-shrink-0 flex items-center justify-center">
              <span className="text-4xl font-serif italic text-teal-deep">"</span>
            </div>
            <div>
              <p className="text-xl text-teal-deep italic font-serif mb-4">
                "I have used ChatGPT to help me process my feelings when I am overwhelmed but the responses feel too artifical."
              </p>
              <p className="text-sm uppercase tracking-widest text-teal-mid/60 font-bold">
                — Sazi Milazi, 21, 4th Year Student
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-32 p-12 bg-white rounded-3xl shadow-sm border border-teal-faint/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full bg-teal-faint/30 flex-shrink-0 flex items-center justify-center">
              <span className="text-4xl font-serif italic text-teal-deep">"</span>
            </div>
            <div>
              <p className="text-xl text-teal-deep italic font-serif mb-4">
                "I feel a lot of therapist offer unrealistic prices, which is one of the main reasons I can not afford a therapist, I have tried."
              </p>
              <p className="text-sm uppercase tracking-widest text-teal-mid/60 font-bold">
                — Kutlwano Thaga, 22, Intern at Syspro
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-32 p-12 bg-white rounded-3xl shadow-sm border border-teal-faint/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full bg-teal-faint/30 flex-shrink-0 flex items-center justify-center">
              <span className="text-4xl font-serif italic text-teal-deep">"</span>
            </div>
            <div>
               <p className="text-xl text-teal-deep italic font-serif mb-4">
                "I have read that a lot of AI companies use our information and sell them to 3rd parties, and so I am a bit heistant to trust a bot with sensitive information regarding my mental health."
              </p>
              <p className="text-sm uppercase tracking-widest text-teal-mid/60 font-bold">
                — Hussain Bhatt, 22, Sales Representative
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
