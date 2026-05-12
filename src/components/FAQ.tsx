import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { q: "What are the key ingredients in Pepsi?", a: "Pepsi consists of carbonated water, high fructose corn syrup, caramel color, sugar, phosphoric acid, caffeine, citric acid, and natural flavors." },
  { q: "Does Pepsi Zero Sugar contain caffeine?", a: "Yes, Pepsi Zero Sugar contains approximately 69mg of caffeine per 12oz serving, which gives it that extra kick compared to the original flavor." },
  { q: "How can I join the Pepsi Rewards program?", a: "You can sign up via our mobile app or website. Look out for QR codes on our cans and bottles to scan and earn instant reward points." },
  { q: "What is Pepsi's commitment to sustainability?", a: "We are working toward a goal to use 100% recycled plastic (rPET) in all our brand bottles across various markets by 2030." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-pepsi-navy py-24">
      <div className="section-container">
         <div className="grid lg:grid-cols-2 gap-20">
            <div>
               <motion.span 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-pepsi-light font-display font-medium uppercase tracking-[0.3em] text-sm"
               >
                 Know More
               </motion.span>
               <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] mt-6">
                 Got <span className="text-white/20">Questions?</span>
               </h2>
               <p className="text-white/40 mt-8 text-lg max-w-md">
                 Everything you need to know about your favorite refreshment. From nutrition to partnerships.
               </p>
               
               <div className="mt-12 bg-white/5 rounded-3xl p-8 border border-white/10 inline-block">
                  <div className="text-pepsi-red font-display font-black text-4xl italic mb-2">24/7</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-white/40">Support Hotline</div>
               </div>
            </div>

            <div className="space-y-4">
               {faqs.map((faq, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className={`glass-card p-0 overflow-hidden cursor-pointer transition-all duration-300 ${openIndex === i ? 'border-pepsi-blue bg-white/10' : 'hover:border-white/20'}`}
                   onClick={() => setOpenIndex(openIndex === i ? null : i)}
                 >
                    <div className="p-8 flex items-center justify-between gap-4">
                       <h3 className="text-xl font-bold font-display uppercase italic tracking-tight">{faq.q}</h3>
                       <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-pepsi-blue border-transparent' : ''}`}>
                          {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                       </div>
                    </div>
                    {openIndex === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="px-8 pb-8 text-white/50 leading-relaxed text-sm"
                      >
                         {faq.a}
                      </motion.div>
                    )}
                 </motion.div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
