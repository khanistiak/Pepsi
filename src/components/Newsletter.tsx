import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-pepsi-blue py-24 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pepsi-red/20 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto glass-card bg-white/10 border-white/20 p-12 md:p-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none">
              Stay <span className="text-pepsi-navy">Refresh-ed</span>
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Get exclusive access to sweepstakes, new flavor drops, and the latest culture beats directly in your inbox.
            </p>

            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto pt-8">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white/10 border-2 border-white/20 rounded-full py-5 px-8 pr-32 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all text-lg"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-8 bg-white text-pepsi-blue rounded-full font-bold uppercase tracking-wider text-xs hover:bg-pepsi-navy hover:text-white transition-all flex items-center gap-2"
              >
                Join <Send size={14} />
              </button>
            </form>

            <div className="flex items-center justify-center gap-6 pt-4 opacity-50 text-[10px] font-bold uppercase tracking-widest">
               <span>No Spam</span>
               <div className="w-1 h-1 bg-white rounded-full" />
               <span>Exclusive Drops</span>
               <div className="w-1 h-1 bg-white rounded-full" />
               <span>Fast Unsubscribe</span>
            </div>
          </motion.div>

          {/* Success State */}
          {isSubmitted && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="absolute inset-0 bg-pepsi-blue flex flex-col items-center justify-center p-12 rounded-[inherit] z-20"
             >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-pepsi-blue mb-6">
                   <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-display font-black uppercase italic">You're In!</h3>
                <p className="text-white/70 mt-2">Welcome to the squad. Check your inbox for some magic.</p>
             </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
