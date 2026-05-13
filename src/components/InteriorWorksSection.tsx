import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import interior1 from "@/assets/interior-1.jpeg";
import interior2 from "@/assets/interior-2.jpeg";
import interior3 from "@/assets/interior-3.jpeg";
import interior4 from "@/assets/interior-4.jpeg";
import interior5 from "@/assets/interior-5.jpeg";
import interior6 from "@/assets/interior-6.jpeg";

const interiorProjects = [
  { image: interior1, title: "TV Unit Design", category: "Living Room", span: "col-span-1 row-span-2" },
  { image: interior2, title: "Living Hall", category: "Residential", span: "col-span-1 row-span-1" },
  { image: interior3, title: "Modular Kitchen", category: "Kitchen Design", span: "col-span-1 row-span-1" },
  { image: interior4, title: "Cozy Living", category: "Living Room", span: "col-span-1 row-span-1" },
  { image: interior5, title: "Open Kitchen", category: "Kitchen Design", span: "col-span-1 row-span-1" },
  { image: interior6, title: "Vanity & Wash", category: "Bathroom", span: "col-span-1 row-span-2" },
];

const InteriorWorksSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => setLightboxIndex(prev => prev !== null ? (prev + 1) % interiorProjects.length : null), []);
  const goPrev = useCallback(() => setLightboxIndex(prev => prev !== null ? (prev - 1 + interiorProjects.length) % interiorProjects.length : null), []);

  return (
    <>
      <section id="interior-works">
        {/* Header */}
        <div ref={headerRef} className="section-padding pb-10 sm:pb-14 relative overflow-hidden bg-secondary/40">
          <div className="absolute inset-0 arch-blueprint-overlay pointer-events-none opacity-50" />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Interior Works
            </motion.p>
            <motion.h2
              className="text-display text-4xl sm:text-5xl md:text-7xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Crafted <span className="text-brand italic font-bold">Interiors</span>
            </motion.h2>
            <motion.div
              className="gold-line mx-auto mt-4 mb-6"
              initial={{ width: 0 }}
              animate={headerInView ? { width: 80 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p
              className="text-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-medium"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A curated portfolio of residential interiors — where every detail is designed with intention.
            </motion.p>
          </div>
        </div>

        {/* Masonry Gallery - edge to edge */}
        <div ref={ref} className="pb-0">
          <div className="w-full">
            {/* Desktop */}
            <div className="hidden md:grid grid-cols-3 auto-rows-[260px] gap-[2px]">
              {interiorProjects.map((project, i) => (
                <motion.div
                  key={i}
                  className={`group relative cursor-pointer overflow-hidden ${project.span}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[6px] border border-primary-foreground/0 group-hover:border-primary-foreground/25 transition-all duration-600 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-mono text-[10px] tracking-[0.25em] uppercase text-accent mb-1">{project.category}</p>
                    <h3 className="text-display text-xl text-primary-foreground font-bold">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile */}
            <div className="grid md:hidden grid-cols-2 gap-[2px]">
              {interiorProjects.map((project, i) => (
                <motion.div
                  key={i}
                  className={`group relative cursor-pointer overflow-hidden ${i === 0 || i === 5 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-mono text-[8px] tracking-[0.2em] uppercase text-accent">{project.category}</p>
                    <h3 className="text-display text-sm text-primary-foreground font-bold">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 z-10 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Close lightbox">
              <X className="w-7 h-7" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-2 sm:left-6 z-10 p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Previous image">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <motion.img
              key={lightboxIndex}
              src={interiorProjects[lightboxIndex].image}
              alt={interiorProjects[lightboxIndex].title}
              className="max-h-[85vh] max-w-[92vw] sm:max-w-[85vw] object-contain"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-2 sm:right-6 z-10 p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Next image">
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
              <p className="text-mono text-[10px] tracking-[0.25em] uppercase text-accent mb-1">
                {interiorProjects[lightboxIndex].category}
              </p>
              <p className="text-display text-lg text-primary-foreground font-bold">
                {interiorProjects[lightboxIndex].title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteriorWorksSection;
