import { motion } from 'motion/react';
import { History, Sparkles, Music, Trophy } from 'lucide-react';

const milestones = [
  { year: "1893", title: "The Beginning", desc: "Caleb Bradham creates 'Brad's Drink' in New Bern, NC.", icon: <History size={24} /> },
  { year: "1940", title: "The Pepsi Jingle", desc: "First nationwide radio hit that defined brand marketing.", icon: <Music size={24} /> },
  { year: "1975", title: "The Pepsi Challenge", desc: "A revolutionary blind taste test that changed the industry.", icon: <Trophy size={24} /> },
  { year: "2023", title: "New Bold Identity", desc: "Unveiling the next generation of Pepsi's iconic look.", icon: <Sparkles size={24} /> }
];

export default function BrandStory() {
  return (
    <div className="bg-[#001433] py-24 relative">
       <div className="section-container">
          <div className="mb-20 text-center lg:text-left">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-pepsi-red font-display font-medium uppercase tracking-[0.3em] text-sm"
             >
               Legacy of Bold
             </motion.span>
             <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.8] mt-6">
               Our <br />
               <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Story</span>
             </h2>
          </div>

          <div className="relative">
             {/* Timeline Line */}
             <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
             
             <div className="space-y-12">
                {milestones.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className={`relative flex items-center gap-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                     {/* Year Marker */}
                     <div className="absolute left-8 lg:left-1/2 w-12 h-12 bg-pepsi-blue rounded-full border-4 border-pepsi-navy -translate-x-1/2 z-10 flex items-center justify-center text-white shadow-xl">
                        {item.icon}
                     </div>

                     <div className="flex-1 ml-16 lg:ml-0 lg:w-1/2">
                        <div className={`glass-card p-10 hover:border-pepsi-blue/50 transition-all duration-500 group ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                            <div className="text-4xl font-display font-black text-pepsi-light mb-2">{item.year}</div>
                            <h3 className="text-2xl font-bold uppercase italic mb-4">{item.title}</h3>
                            <p className="text-white/40 leading-relaxed text-sm max-w-sm ml-auto mr-auto lg:mr-0">{item.desc}</p>
                        </div>
                     </div>
                     <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
}
