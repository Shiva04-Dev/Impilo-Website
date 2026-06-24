import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Try It', path: '/try-it' },
    { name: 'Contact', path: '/contact' },
  ];

  const isDark = location.pathname === '/' || location.pathname === '/try-it';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center",
      isDark ? "text-white" : "text-teal-deep"
    )}>
      <Link to="/" className="font-serif text-2xl italic tracking-tight flex items-center gap-2">
        <span className={cn("w-2 h-2 rounded-full bg-coral", !isDark && "shadow-sm")}></span>
        Impilo
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "text-sm font-medium tracking-wide transition-all hover:opacity-100",
              location.pathname === link.path ? "opacity-100" : "opacity-60"
            )}
          >
            {link.name}
            {location.pathname === link.path && (
              <motion.div
                layoutId="nav-underline"
                className={cn("h-px mt-1", isDark ? "bg-white" : "bg-teal-deep")}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
              />
            )}
          </Link>
        ))}
        <Link
          to="/try-it"
          className={cn(
            "px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:-translate-y-1 active:scale-95",
            isDark 
              ? "bg-white text-teal-deep hover:bg-coral hover:text-white" 
              : "bg-teal-deep text-white hover:bg-coral"
          )}
        >
          Try Impilo
        </Link>
      </div>
      
      {/* Mobile Menu could be added here, but staying simple for now */}
    </nav>
  );
};
