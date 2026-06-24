import { Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <>
      <footer className="bg-cream py-16 px-6 border-t border-teal-faint/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl italic text-teal-deep">Impilo</h3>
            <p className="text-teal-mid/80 max-w-xs">
              Health, in your language, on your phone. South Africa's AI mental wellness companion.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-teal-deep font-bold">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-teal-mid hover:text-coral transition-colors">Home</a>
              <a href="/about" className="text-teal-mid hover:text-coral transition-colors">About</a>
              <a href="/how-it-works" className="text-teal-mid hover:text-coral transition-colors">How It Works</a>
              <a href="/try-it" className="text-teal-mid hover:text-coral transition-colors">Try It</a>
              <a href="/contact" className="text-teal-mid hover:text-coral transition-colors">Contact</a>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-teal-deep font-bold">Connect</h4>
            <div className="flex flex-col space-y-2">
              <a href="mailto:ganeshshiva772@gmail.com" className="text-teal-mid hover:text-coral transition-colors">ganeshshiva772@gmail.com</a>
              <span className="text-teal-mid/60 text-sm">Naspers Labs AI for Good 2026 Submission</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-teal-faint/10 flex flex-col md:flex-row justify-between items-center text-sm text-teal-mid/50">
          <p>Built with care in South Africa.</p>
        </div>
      </footer>

      {/* Persistent Crisis Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-coral text-white py-3 px-4 z-50 flex justify-center items-center gap-4 text-center">
        <Phone size={16} className="animate-pulse" />
        <span className="font-sans font-medium tracking-wide text-sm md:text-base">
          IN CRISIS? CONTACT SADAG: <a href="tel:0800567567" className="underline font-bold hover:text-coral-pale transition-colors">0800 567 567</a> (24/7)
        </span>
      </div>
      {/* Spacer for the fixed footer */}
      <div className="h-12"></div>
    </>
  );
};
