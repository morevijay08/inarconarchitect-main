import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Compass, Ruler, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const architectureProjects = [
  { image: portfolio4, title: "Structural Elevation", category: "Architectural" },
  { image: portfolio1, title: "Government Office Block", category: "Institutional" },
  { image: portfolio3, title: "Villa Architecture", category: "Residential" },
  { image: portfolio2, title: "Institutional Campus", category: "Public" },
];

const services = [
  { icon: Compass, title: "Architectural Planning", desc: "Comprehensive planning from concept to construction-ready drawings, with full regulatory compliance." },
  { icon: Ruler, title: "Structural Design", desc: "Engineered elegance that balances form, function, and longevity for every build." },
  { icon: Building, title: "Government Projects", desc: "Specialized consulting for institutional and government projects with public infrastructure standards." },
];

const ArchitectureWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => setLightboxIndex(prev => prev !== null ? (prev + 1) % architectureProjects.length : null), []);
  const goPrev = useCallback(() => setLightboxIndex(prev => prev !== null ? (prev - 1 + architectureProjects.length) % architectureProjects.length : null), []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-10 sm:pt-32 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 arch-blueprint-overlay pointer-events-none opacity-50" />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <motion.p className="section-label mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              Architecture
            </motion.p>
            <motion.h1
              className="text-display text-4xl sm:text-6xl md:text-7xl mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Architectural <span className="italic font-bold bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent bg-clip-text text-transparent">Vision</span>
            </motion.h1>
            <div className="gold-line mx-auto mb-6" />
            <motion.p
              className="text-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Where structural integrity meets architectural poetry — every blueprint a foundation
              for spaces that endure and inspire.
            </motion.p>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-secondary/40" ref={ref}>
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
              <p className="section-label mb-4">What We Plan</p>
              <h2 className="text-display text-3xl sm:text-5xl">Architectural Services</h2>
              <div className="gold-line mx-auto mt-6" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="group p-10 bg-background border border-border hover:border-accent/40 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <s.icon size={32} className="text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="text-display text-xl sm:text-2xl mb-3 font-bold">{s.title}</h3>
                  <p className="text-body text-sm sm:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="section-label mb-4">Portfolio</p>
              <h2 className="text-display text-3xl sm:text-5xl">Selected Works</h2>
              <div className="gold-line mx-auto mt-6" />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {architectureProjects.map((p, i) => (
                <motion.div
                  key={i}
                  className="group relative cursor-pointer overflow-hidden aspect-[4/3]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  onClick={() => setLightboxIndex(i)}
                >
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-mono text-[9px] tracking-[0.2em] uppercase text-accent mb-1">{p.category}</p>
                    <h3 className="text-display text-lg text-primary-foreground font-bold">{p.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeLightbox}>
            <button onClick={closeLightbox} className="absolute top-4 right-4 p-2 text-primary-foreground" aria-label="Close"><X className="w-7 h-7" /></button>
            <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-4 p-2 text-primary-foreground/70 hover:text-primary-foreground" aria-label="Previous"><ChevronLeft className="w-8 h-8" /></button>
            <motion.img key={lightboxIndex} src={architectureProjects[lightboxIndex].image} alt={architectureProjects[lightboxIndex].title} className="max-h-[85vh] max-w-[90vw] object-contain" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} onClick={(e) => e.stopPropagation()} />
            <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-4 p-2 text-primary-foreground/70 hover:text-primary-foreground" aria-label="Next"><ChevronRight className="w-8 h-8" /></button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ArchitectureWorks;
