/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ProductComparison from './components/ProductComparison';
import WhyPepsi from './components/WhyPepsi';
import Campaigns from './components/Campaigns';
import StoreLocator from './components/StoreLocator';
import SocialProof from './components/SocialProof';
import BrandStory from './components/BrandStory';
import VideoSection from './components/VideoSection';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Sustainability from './components/Sustainability';
import RetailPartners from './components/RetailPartners';
import Footer from './components/Footer';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="products">
          <FeaturedProducts />
        </section>

        <section id="comparison">
          <ProductComparison />
        </section>

        <section id="why-pepsi">
          <WhyPepsi />
        </section>

        <section id="campaigns">
          <Campaigns />
        </section>

        <section id="video">
          <VideoSection />
        </section>

        <section id="store-locator">
          <StoreLocator />
        </section>

        <section id="social-proof">
          <SocialProof />
        </section>

        <section id="brand-story">
          <BrandStory />
        </section>

        <section id="sustainability">
          <Sustainability />
        </section>

        <section id="retailers">
          <RetailPartners />
        </section>

        <section id="newsletter">
          <Newsletter />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </main>

      <Footer />
      
      {/* Floating UI Elements */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-pepsi-red z-[100] origin-left"
      />
    </div>
  );
}
