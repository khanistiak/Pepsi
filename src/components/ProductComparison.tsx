import { motion } from 'motion/react';
import { Check, X, Info, Zap, Droplets, Coffee } from 'lucide-react';

const comparisonData = [
  {
    feature: "Calories (12oz)",
    pepsi: "150 kcal",
    zero: "0 kcal",
    diet: "0 kcal",
    cherry: "160 kcal",
    icon: <Zap size={18} />
  },
  {
    feature: "Sugar",
    pepsi: "41g",
    zero: "0g",
    diet: "0g",
    cherry: "42g",
    icon: <Droplets size={18} />
  },
  {
    feature: "Caffeine",
    pepsi: "38mg",
    zero: "69mg",
    diet: "35mg",
    cherry: "38mg",
    icon: <Coffee size={18} />
  },
  {
    feature: "Flavor Impact",
    pepsi: "Classic Cola",
    zero: "Bold Citrus",
    diet: "Crisp Original",
    cherry: "Wild Fruit",
    icon: <Zap size={18} />
  }
];

export default function ProductComparison() {
  return (
    <div className="bg-pepsi-navy py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pepsi-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container">
        <div className="text-center mb-16 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase italic mb-6"
          >
            The Perfect <span className="text-pepsi-blue">Mix</span>
          </motion.h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Choose the flavor that fits your lifestyle. Whether you want the original bold taste or maximum flavor with zero sugar, we've got you covered.
          </p>
        </div>

        <div className="glass-card p-0 overflow-hidden border-white/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-8 font-display uppercase tracking-widest text-xs text-white/40">Attributes</th>
                  <th className="p-8 text-pepsi-blue">
                    <div className="flex flex-col items-center gap-2">
                       <span className="font-display font-black text-xl italic uppercase">Pepsi</span>
                       <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Classic</span>
                    </div>
                  </th>
                  <th className="p-8 text-pepsi-light">
                    <div className="flex flex-col items-center gap-2">
                       <span className="font-display font-black text-xl italic uppercase">Zero</span>
                       <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Maximum</span>
                    </div>
                  </th>
                  <th className="p-8 text-white/80">
                    <div className="flex flex-col items-center gap-2">
                       <span className="font-display font-black text-xl italic uppercase">Diet</span>
                       <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Light</span>
                    </div>
                  </th>
                  <th className="p-8 text-pepsi-red">
                   <div className="flex flex-col items-center gap-2">
                       <span className="font-display font-black text-xl italic uppercase">Wild Cherry</span>
                       <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Fruity</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr 
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                  >
                    <td className="p-8 bg-white/2">
                      <div className="flex items-center gap-4">
                         <div className="text-white/20 group-hover:text-pepsi-light transition-colors">{row.icon}</div>
                         <span className="text-sm font-medium">{row.feature}</span>
                      </div>
                    </td>
                    <td className="p-8 text-center text-sm font-mono text-pepsi-blue/80 font-bold">{row.pepsi}</td>
                    <td className="p-8 text-center text-sm font-mono text-pepsi-light/80 font-bold">{row.zero}</td>
                    <td className="p-8 text-center text-sm font-mono text-white/50 font-bold">{row.diet}</td>
                    <td className="p-8 text-center text-sm font-mono text-pepsi-red/80 font-bold">{row.cherry}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
