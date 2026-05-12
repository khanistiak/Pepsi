import { motion } from 'motion/react';
import { Leaf, Recycle, Droplets, Package } from 'lucide-react';

const targets = [
  { icon: <Recycle size={32} />, title: "100% Recycled", desc: "Our goal is for all Pepsi bottles to be made from 100% recycled plastic (rPET) by 2030." },
  { icon: <Droplets size={32} />, title: "Water Positive", desc: "Returning more water to the local watersheds than we use in high-water risk areas." },
  { icon: <Package size={32} />, title: "Circular Economy", desc: "Eliminating 100% of virgin plastic in our supply chain through innovative packaging." },
  { icon: <Leaf size={32} />, title: "Net Zero", desc: "Working across our value chain to achieve Net Zero emissions by 2040." }
];

export default function Sustainability() {
  return (
    <div className="bg-[#001433] py-24 relative overflow-hidden">
      <div className="section-container">
         <div className="flex flex-col items-center text-center mb-20 space-y-6">
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/10"
            >
               <Leaf size={32} />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none max-w-4xl">
              PepsiCo <span className="text-green-500">Positive</span> (pep+)
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              Driving positive change for the planet and people through every bottle we produce. Our transformation starts here.
            </p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targets.map((target, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card hover:border-green-500/30 transition-all group"
              >
                 <div className="text-green-500 mb-6 group-hover:scale-110 transition-transform">{target.icon}</div>
                 <h3 className="text-2xl font-display font-black uppercase italic mb-4">{target.title}</h3>
                 <p className="text-white/40 text-sm leading-relaxed">{target.desc}</p>
              </motion.div>
            ))}
         </div>

         <div className="mt-16 text-center">
            <button className="btn-secondary border-green-500/30 text-green-400 hover:border-green-400">Read Sustainability Report</button>
         </div>
      </div>
    </div>
  );
}
