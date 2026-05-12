import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-pepsi-blue/20 via-transparent to-transparent opacity-50" />
        {/* Particle Bubbles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: '110%', 
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10
            }}
            animate={{ 
              y: '-20%',
              x: (Math.random() - 0.5) * 20 + '%'
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <div className="space-y-6">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-[0.2em] text-pepsi-light"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pepsi-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pepsi-red"></span>
              </span>
              Now Trending: Wild Cherry Mix
            </motion.div>
            
            <h1 className="text-7xl md:text-9xl font-display font-black leading-[0.85] uppercase italic">
              Refresh <br />
              <span className="text-white">Your</span> <br />
              <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>World</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-lg font-light leading-relaxed">
              Experience the bold taste and iconic refreshment that has been fueling generations of greatness. Zero sugar, maximum flavor.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-primary group">
                Buy Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                Explore Flavors
                <Play fill="currentColor" className="ml-2 group-hover:scale-110 transition-transform" size={16} />
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 opacity-40">
               <div>
                 <div className="text-2xl font-display font-bold">120+</div>
                 <div className="text-[10px] uppercase tracking-widest">Countries</div>
               </div>
               <div className="w-[1px] h-8 bg-white/20" />
               <div>
                 <div className="text-2xl font-display font-bold">500M+</div>
                 <div className="text-[10px] uppercase tracking-widest">Fans Daily</div>
               </div>
            </div>
          </div>
        </motion.div>

        <div className="relative flex justify-center">
          {/* Floating Pepsi Can (Placeholder with styled div) */}
          <motion.div
            style={{ y: y1, rotate }}
            className="relative z-20 w-64 md:w-80 aspect-[1/2] rounded-[40px] shadow-2xl overflow-hidden group"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            
            {/* Can Body */}
            <div className="absolute inset-0 bg-pepsi-blue flex flex-col items-center justify-center p-8">
               <div className="w-full h-full border-x-4 border-white/5 flex flex-col items-center justify-between py-12">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-2">
                     <div className="w-full h-full rounded-full bg-gradient-to-br from-pepsi-blue via-white to-pepsi-red" />
                  </div>
                  <div className="font-display font-black text-6xl uppercase italic tracking-tighter text-white/90">PEPSI</div>
               </div>
            </div>
            
            {/* Water Drops (CSS-only) */}
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1 h-2 bg-white/20 rounded-full"
                style={{ 
                  top: Math.random() * 100 + '%', 
                  left: Math.random() * 100 + '%',
                  opacity: Math.random() * 0.5
                }}
              />
            ))}
          </motion.div>

          {/* Decorative Ring */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none"
          />
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-pepsi-blue/20 blur-[100px] rounded-full pointer-events-none"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
      </motion.div>
    </div>
  );
}
