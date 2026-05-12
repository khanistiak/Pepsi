import { motion } from 'motion/react';
import { ExternalLink, Calendar, Ticket } from 'lucide-react';

const campaigns = [
  {
    title: "The Super Bowl Mixup",
    subtitle: "Win a Trip to Super Bowl LVIII",
    tag: "Sweepstakes",
    color: "bg-pepsi-blue",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Summer Music Fest",
    subtitle: "Get Exclusive Access to VIP Lounges",
    tag: "Music",
    color: "bg-pepsi-red",
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Pepsi Rewards",
    subtitle: "Turn Every Can into Instant Rewards",
    tag: "Loyalty",
    color: "bg-pepsi-navy",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Campaigns() {
  return (
    <div className="bg-[#001433] py-24 relative overflow-hidden">
      <div className="section-container">
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
               <motion.span 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-pepsi-light font-display font-medium uppercase tracking-[0.3em] text-sm"
               >
                 Current Beats
               </motion.span>
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="text-5xl md:text-7xl font-black uppercase italic leading-none"
               >
                 Win Big With <br />
                 <span className="text-white/20">Pepsi</span> Rewards
               </motion.h2>
            </div>
            <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-white/40 max-w-sm mb-2"
            >
               Join our latest campaigns and experience more than just a drink. From music to sports, we bring you closer to the action.
            </motion.p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((campaign, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -16 }}
                className="group relative h-[600px] rounded-[32px] overflow-hidden shadow-2xl"
              >
                <img 
                  src={campaign.image} 
                  alt={campaign.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-50"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-8 left-8">
                   <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${campaign.color}`}>
                     {campaign.tag}
                   </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 space-y-4">
                   <div className="space-y-2">
                      <h3 className="text-3xl font-display font-black uppercase italic">{campaign.title}</h3>
                      <p className="text-white/70">{campaign.subtitle}</p>
                   </div>
                   
                   <div className="pt-4 flex items-center justify-between border-t border-white/10">
                      <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
                         <Calendar size={14} className="text-pepsi-light" />
                         Ends in 14 Days
                      </div>
                      <button className="w-12 h-12 rounded-full bg-white text-pepsi-navy flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
                         <ExternalLink size={20} />
                      </button>
                   </div>
                </div>
              </motion.div>
            ))}
         </div>

         <div className="mt-16 text-center">
            <button className="btn-secondary">View All Campaigns</button>
         </div>
      </div>
    </div>
  );
}
