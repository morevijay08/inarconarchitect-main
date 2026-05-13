import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingAnimation from "@/components/LandingAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import LeadershipSection from "@/components/LeadershipSection";
import GallerySection from "@/components/GallerySection";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const handleComplete = useCallback(() => setAnimationDone(true), []);

  return (
    <>
      {/* Main content always mounted — sits underneath the intro overlay so
          when it fades out the hero is already painted (no white flash). */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={animationDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Navbar />
        <main>
          <div id="home">
            <Hero />
          </div>
          <LeadershipSection />
          <GallerySection />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </motion.div>

      <AnimatePresence>
        {!animationDone && <LandingAnimation onComplete={handleComplete} />}
      </AnimatePresence>
    </>
  );
};

export default Index;
