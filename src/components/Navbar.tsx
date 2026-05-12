import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Globe, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Flavors', href: '#comparison' },
    { name: 'Campaigns', href: '#campaigns' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Store Locator', href: '#store-locator' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
        isScrolled 
          ? 'bg-pepsi-navy/80 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5 group-hover:rotate-12 transition-transform duration-500">
             <div className="w-full h-full rounded-full bg-gradient-to-br from-pepsi-blue via-white to-pepsi-red" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter uppercase italic">Pepsi</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pepsi-red transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-white/70 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="text-white/70 hover:text-white transition-colors">
            <Globe size={20} />
          </button>
          <button className="btn-primary py-2.5 px-6 text-xs">
            <ShoppingCart size={16} />
            Buy Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-pepsi-navy border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-display font-medium uppercase tracking-wider border-b border-white/5 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary w-full">Buy Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
