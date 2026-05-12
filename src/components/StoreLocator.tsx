import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { motion } from 'motion/react';
import { Search, Navigation, MapPin } from 'lucide-react';
import { useState } from 'react';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const stores = [
  { id: 1, name: "Walmart Supercenter", lat: 34.0522, lng: -118.2437, address: "701 W Cesar E Chavez Ave, Los Angeles, CA" },
  { id: 2, name: "Target", lat: 34.0430, lng: -118.2673, address: "735 S Figueroa St, Los Angeles, CA" },
  { id: 3, name: "CVS Pharmacy", lat: 34.0407, lng: -118.2530, address: "210 W 7th St, Los Angeles, CA" },
  { id: 4, name: "Ralphs", lat: 34.0460, lng: -118.2580, address: "645 W 9th St, Los Angeles, CA" }
];

function StoreMarker({ store }: { store: any; key?: any }) {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={{ lat: store.lat, lng: store.lng }}
        onClick={() => setOpen(true)}
      >
        <div className="w-10 h-10 bg-pepsi-blue rounded-full border-2 border-white shadow-xl flex items-center justify-center text-white transform hover:scale-110 transition-transform">
          <MapPin size={20} />
        </div>
      </AdvancedMarker>
      {open && (
        <InfoWindow anchor={marker} onCloseClick={() => setOpen(false)}>
          <div className="p-2 text-pepsi-navy">
            <h4 className="font-bold text-sm">{store.name}</h4>
            <p className="text-[10px] text-gray-500 mt-1">{store.address}</p>
            <button className="mt-2 text-[10px] font-bold text-pepsi-blue uppercase tracking-widest flex items-center gap-1">
              <Navigation size={10} /> Get Directions
            </button>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

export default function StoreLocator() {
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  if (!hasValidKey) {
    return (
      <div className="bg-pepsi-navy py-24">
        <div className="section-container">
          <div className="glass-card p-12 text-center max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-display font-bold uppercase">Store Locator Coming Soon</h3>
            <p className="text-white/50">
              We're currently updating our real-time retailer availability. 
              Please check back soon to find a Pepsi near you!
            </p>
            <div className="pt-8 border-t border-white/5 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
              Admin: Set GOOGLE_MAPS_PLATFORM_KEY to enable live tracking
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-pepsi-navy py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          <div className="lg:col-span-1 space-y-8 flex flex-col justify-center">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-pepsi-light font-display font-medium uppercase tracking-[0.3em] text-sm"
              >
                Nearby
              </motion.span>
              <h2 className="text-5xl font-black uppercase italic leading-none mt-4">
                Locate <br />
                <span className="text-white/20">Your</span> Pepsi
              </h2>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
              <input 
                type="text" 
                placeholder="Enter ZIP or City"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-pepsi-blue transition-colors"
              />
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {stores.map((store) => (
                <button
                  key={store.id}
                  onClick={() => setSelectedStore(store)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    selectedStore.id === store.id 
                      ? 'bg-pepsi-blue/10 border-pepsi-blue translate-x-2' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`p-3 rounded-full ${selectedStore.id === store.id ? 'bg-pepsi-blue text-white' : 'bg-white/5 text-white/30'}`}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{store.name}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{store.address}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 h-[600px] rounded-3xl overflow-hidden border border-white/10 relative">
            <APIProvider apiKey={API_KEY}>
              <Map
                center={{ lat: selectedStore.lat, lng: selectedStore.lng }}
                zoom={14}
                mapId="PEPSI_LOCATOR_MAP"
                style={{ width: '100%', height: '100%' }}
                disableDefaultUI={true}
                gestureHandling={'greedy'}
                internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              >
                {stores.map((store) => (
                  <StoreMarker key={store.id} store={store} />
                ))}
              </Map>
            </APIProvider>
            
            <div className="absolute bottom-6 right-6 bg-pepsi-navy/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60">
              Live from Los Angeles, CA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
