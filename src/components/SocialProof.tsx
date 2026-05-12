import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, UserCheck, Star } from 'lucide-react';

const socialContent = [
  {
     user: "@alex_jordan",
     content: "Nothing beats a cold Pepsi on a hot afternoon! ☀️🥤 #RefreshYourWorld",
     image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1000&auto=format&fit=crop",
     platform: <Instagram size={16} />
  },
  {
     user: "@music_lover22",
     content: "The Wild Cherry flavor is actually elite. New favorite! 🍒⚡️",
     image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop",
     platform: <Twitter size={16} />
  },
  {
     user: "@sarah_fit",
     content: "Zero sugar, maximum vibes. Perfect for post-workout refreshment. 💪",
     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
     platform: <Instagram size={16} />
  },
  {
     user: "@pete_eats",
     content: "Best pizza companion since 1893. 🍕🥤",
     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
     platform: <Youtube size={16} />
  }
];

export default function SocialProof() {
  return (
    <div className="bg-pepsi-navy py-24">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="flex items-center justify-center gap-2 text-pepsi-red font-display font-medium uppercase tracking-[0.3em] text-sm"
           >
             <Star size={14} fill="currentColor" />
             <Star size={14} fill="currentColor" />
             <Star size={14} fill="currentColor" />
             <Star size={14} fill="currentColor" />
             <Star size={14} fill="currentColor" />
             <span className="ml-2">5M+ Fans</span>
           </motion.div>
           <h2 className="text-4xl md:text-6xl font-black uppercase italic">
             Join The <span className="text-pepsi-blue">Squad</span>
           </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
           {socialContent.map((post, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="group relative aspect-square rounded-[32px] overflow-hidden glass-card p-0"
             >
                <img 
                  src={post.image} 
                  alt={post.user} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-pepsi-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 rounded-full bg-white text-pepsi-blue">
                         {post.platform}
                      </div>
                      <span className="font-bold text-xs">{post.user}</span>
                   </div>
                   <p className="text-xs leading-relaxed line-clamp-2 italic">"{post.content}"</p>
                </div>
                
                {/* Badge (always visible) */}
                <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                   <UserCheck size={14} className="text-pepsi-light" />
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-30">
           {/* Placeholder Brand Logos for social proof */}
           <div className="flex flex-col items-center gap-2">
             <div className="text-2xl font-black italic">NFL</div>
             <div className="text-[10px] uppercase tracking-widest font-bold">Partner</div>
           </div>
           <div className="flex flex-col items-center gap-2">
             <div className="text-2xl font-black italic">CHAMPIONS</div>
             <div className="text-[10px] uppercase tracking-widest font-bold">League</div>
           </div>
           <div className="flex flex-col items-center gap-2">
             <div className="text-2xl font-black italic">GRAMMYS</div>
             <div className="text-[10px] uppercase tracking-widest font-bold">Official</div>
           </div>
           <div className="flex flex-col items-center gap-2">
             <div className="text-2xl font-black italic">COACHELLA</div>
             <div className="text-[10px] uppercase tracking-widest font-bold">Refreshment</div>
           </div>
        </div>
      </div>
    </div>
  );
}
