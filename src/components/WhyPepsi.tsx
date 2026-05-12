import { motion } from 'motion/react';
import { Award, ShieldCheck, Globe2, Zap, Utensils, Music } from 'lucide-react';

const benefits = [
  {
    icon: <Zap size={32} />,
    title: "Bold Taste",
    description: "Our signature blend of carbonation and citrus notes creates an unforgettable refreshment."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Zero Sugar Options",
    description: "Maximum flavor experience without the sugar. Perfectly balanced for your lifestyle."
  },
  {
    icon: <Globe2 size={32} />,
    title: "Global Icon",
    description: "A legacy of refreshment spanning over a century across 200 countries."
  },
  {
    icon: <Music size={32} />,
    title: "Cultural Connection",
    description: "From super bowl shows to local music festivals, Pepsi fuels human passion."
  },
  {
    icon: <Utensils size={32} />,
    title: "Perfect Pairing",
    description: "The ideal companion for your favorite meals, from pizza nights to summer BBQs."
  },
  {
    icon: <Award size={32} />,
    title: "Commitment to Better",
    description: "Constantly innovating our formulas and packaging for a better tomorrow."
  }
];

export default function WhyPepsi() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-pepsi-navy to-[#001433]">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="text-pepsi-red font-display font-medium uppercase tracking-[0.3em] text-sm"
            >
              Why Choose Us
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9]"
            >
              More Than <br />
              <span className="text-white/20">Just A</span> Drink
            </motion.h2>
            <p className="text-white/50 max-w-lg text-lg">
              Since 1893, Pepsi has been challenging the status quo. We believe in bold flavors, bold moves, and refreshing every moment of your life.
            </p>
            
            <div className="pt-8">
               <button className="btn-primary">Learn Our Story</button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card hover:bg-white/10 transition-colors flex flex-col justify-between group"
              >
                <div className="text-pepsi-light group-hover:text-pepsi-red transition-colors mb-4">{benefit.icon}</div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl uppercase italic">{benefit.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
