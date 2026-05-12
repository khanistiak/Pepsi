import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

const retailers = [
  { name: "Walmart", logo: "WALMART", color: "text-[#0071CE]" },
  { name: "Amazon", logo: "AMAZON", color: "text-[#FF9900]" },
  { name: "Target", logo: "TARGET", color: "text-[#CC0000]" },
  { name: "Kroger", logo: "KROGER", color: "text-[#002F6C]" },
  { name: "Instacart", logo: "INSTACART", color: "text-[#00A63E]" },
  { name: "DoorDash", logo: "DOORDASH", color: "text-[#FF3008]" }
];

export default function RetailPartners() {
  return (
    <div className="bg-white py-24 overflow-hidden">
      <div className="section-container">
         <div className="text-center mb-16">
            <h2 className="text-pepsi-navy text-4xl md:text-6xl font-black uppercase italic mb-4">Grab Yours <span className="text-pepsi-blue">Online</span></h2>
            <p className="text-pepsi-navy/40 uppercase font-bold tracking-widest text-xs">Direct to your doorstep via our retail partners</p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {retailers.map((brand, i) => (
               <motion.a
                 key={brand.name}
                 href="#"
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1 }}
                 className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
               >
                  <div className={`text-2xl font-black italic ${brand.color} group-hover:scale-110 transition-transform`}>{brand.logo}</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-pepsi-navy/20">Buy Now</div>
               </motion.a>
            ))}
         </div>
      </div>
    </div>
  );
}
