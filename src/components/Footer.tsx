import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Youtube, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pepsi-navy border-t border-white/5 pt-24 pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20 text-center md:text-left">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-8">
             <a href="#" className="flex items-center gap-2 justify-center md:justify-start">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                 <div className="w-full h-full rounded-full bg-gradient-to-br from-pepsi-blue via-white to-pepsi-red" />
               </div>
               <span className="font-display font-black text-3xl tracking-tighter uppercase italic">Pepsi</span>
             </a>
             <p className="text-white/40 max-w-sm mx-auto md:mx-0 leading-relaxed">
               Refreshing the world, one bold sip at a time. Join the global movement and experience maximum flavor.
             </p>
             <div className="flex items-center gap-6 justify-center md:justify-start">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <motion.a 
                    key={i} 
                    href="#" 
                    whileHover={{ scale: 1.2, color: '#00A6E1' }}
                    className="text-white/30 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
             </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-pepsi-light">Products</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
               <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1 group justify-center md:justify-start">Original <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
               <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1 group justify-center md:justify-start">Zero Sugar <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
               <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1 group justify-center md:justify-start">Diet Pepsi <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
               <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1 group justify-center md:justify-start">Wild Cherry <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-pepsi-light">Company</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
               <li><a href="#" className="hover:text-white transition-colors justify-center md:justify-start">About PepsiCo</a></li>
               <li><a href="#" className="hover:text-white transition-colors justify-center md:justify-start">Sustainability</a></li>
               <li><a href="#" className="hover:text-white transition-colors justify-center md:justify-start">Careers</a></li>
               <li><a href="#" className="hover:text-white transition-colors justify-center md:justify-start">Newsroom</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-pepsi-light">Support</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
               <li><a href="#" className="hover:text-white transition-colors justify-center md:justify-start">FAQ</a></li>
               <li><a href="#" className="hover:text-white transition-colors justify-center md:justify-start">Contact Us</a></li>
               <li><a href="#" className="hover:text-white transition-colors justify-center md:justify-start">Store Locator</a></li>
               <li><a href="#" className="hover:text-white transition-colors justify-center md:justify-start">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
           <div className="flex flex-wrap justify-center gap-8">
              <span>&copy; {currentYear} PepsiCo, Inc.</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
           </div>
           
           <div className="flex items-center gap-2 text-white/40">
              <Globe size={14} />
              <span>United States / English</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
