import { motion } from 'motion/react';
import { Play, Maximize2 } from 'lucide-react';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-pepsi-navy py-24">
      <div className="section-container">
         <div className="relative group cursor-pointer overflow-hidden rounded-[40px] aspect-video shadow-2xl">
            {/* Thumbnail */}
            <img 
               src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1920&auto=format&fit=crop" 
               alt="Pepsi Campaign"
               className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
               referrerPolicy="no-referrer"
            />
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-pepsi-blue/20 flex flex-col items-center justify-center transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
               <motion.button 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 onClick={() => setIsPlaying(true)}
                 className="w-24 h-24 rounded-full bg-white text-pepsi-blue flex items-center justify-center shadow-2xl relative z-20 group-hover:bg-pepsi-red transition-colors"
               >
                  <Play fill="currentColor" size={32} />
               </motion.button>
               
               <div className="mt-8 text-center space-y-2 z-20">
                  <h3 className="text-3xl font-display font-black uppercase italic tracking-wider">The New Identity</h3>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">Watch Official Reveal</p>
               </div>
               
               {/* Pulse Effect */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/20 blur-xl rounded-full animate-pulse" />
            </div>

            {/* Video Placeholder */}
            {isPlaying && (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                 <div className="text-white/20 flex flex-col items-center gap-4">
                    <Maximize2 size={64} className="animate-bounce" />
                    <p className="font-display font-bold uppercase tracking-widest">Video Stream Ready</p>
                    <button onClick={() => setIsPlaying(false)} className="text-[10px] uppercase font-bold text-pepsi-light">Close Player</button>
                 </div>
              </div>
            )}
         </div>
      </div>
    </div>
  );
}
