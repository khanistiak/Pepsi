import { motion } from 'motion/react';
import { ShoppingCart, Plus, Info } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Classic Pepsi",
    tagline: "Bold, refreshing, and iconic.",
    color: "from-[#004B93] to-[#001E4D]",
    image: "https://images.unsplash.com/photo-1629203851022-39c642378c42?q=80&w=1000&auto=format&fit=crop",
    flavor: "Original cola flavor",
    caffeine: "38mg",
    calories: "150 kcal"
  },
  {
    id: 2,
    name: "Pepsi Zero Sugar",
    tagline: "Maximum taste, zero sugar.",
    color: "from-[#111111] to-[#000000]",
    image: "https://images.unsplash.com/photo-1551613265-65d837101152?q=80&w=1000&auto=format&fit=crop",
    flavor: "Bold citrus snap",
    caffeine: "69mg",
    calories: "0 kcal"
  },
  {
    id: 3,
    name: "Diet Pepsi",
    tagline: "Crisp, cold, and calorie-free.",
    color: "from-[#C0C0C0] to-[#808080]",
    image: "https://images.unsplash.com/photo-1622543953495-473ee46a1557?q=80&w=1000&auto=format&fit=crop",
    flavor: "Light refreshing taste",
    caffeine: "35mg",
    calories: "0 kcal"
  },
  {
    id: 4,
    name: "Wild Cherry Pepsi",
    tagline: "A burst of wild cherry flavor.",
    color: "from-[#E32934] to-[#700D13]",
    image: "https://images.unsplash.com/photo-1594971775674-6a97f8fe8c2b?q=80&w=1000&auto=format&fit=crop",
    flavor: "Fruity cherry note",
    caffeine: "38mg",
    calories: "160 kcal"
  }
];

export default function FeaturedProducts() {
  return (
    <div className="bg-pepsi-navy relative py-24 overflow-hidden">
      <div className="section-container">
        <div className="mb-20">
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-pepsi-light font-display font-medium uppercase tracking-[0.3em] text-sm mb-4"
          >
            Our lineup
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9]"
          >
            Find Your <br />
            <span className="text-white/20">Favorite</span> Flavor
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden glass-card p-0 flex flex-col justify-end"
            >
              {/* Product Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
              
              {/* Product Image Placeholder */}
              <div className="absolute inset-x-0 top-12 bottom-32 flex items-center justify-center p-8 z-10">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-full h-full relative"
                >
                  {/* Styled Can Representation */}
                  <div className="absolute inset-0 rounded-[20px] shadow-2xl flex flex-col items-center justify-center border-x-4 border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-1 mb-4">
                       <div className="w-full h-full rounded-full bg-gradient-to-br from-pepsi-blue via-white to-pepsi-red" />
                    </div>
                    <div className="font-display font-black text-2xl uppercase italic tracking-tighter text-white/50">{product.name.split(' ')[0]}</div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative z-20 p-8 pt-0 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold font-display">{product.name}</h3>
                  <p className="text-white/50 text-sm">{product.tagline}</p>
                </div>

                <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-white/40">
                  <div className="flex flex-col">
                    <span>Flavor</span>
                    <span className="text-white/80">{product.flavor}</span>
                  </div>
                  <div className="w-px h-6 bg-white/10" />
                  <div className="flex flex-col">
                    <span>Calories</span>
                    <span className="text-white/80">{product.calories}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 btn-primary py-3 px-4 text-xs">
                    <ShoppingCart size={14} /> Buy Now
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
