import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import interior1 from "@/assets/interior-1.jpeg";
import interior2 from "@/assets/interior-2.jpeg";
import interior3 from "@/assets/interior-3.jpeg";
import interior4 from "@/assets/interior-4.jpeg";
import interior5 from "@/assets/interior-5.jpeg";
import interior6 from "@/assets/interior-6.jpeg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const categories = ["All", "Residential", "Commercial", "Government", "Architectural"] as const;
type Category = typeof categories[number];

const galleryProjects = [
  { image: interior1, title: "Modern Living Room", category: "Residential" as Category },
  { image: interior2, title: "Executive Office Suite", category: "Commercial" as Category },
  { image: interior3, title: "Modular Kitchen Design", category: "Residential" as Category },
  { image: portfolio1, title: "Government Office Block", category: "Government" as Category },
  { image: interior4, title: "Boutique Hotel Lobby", category: "Commercial" as Category },
  { image: portfolio2, title: "Institutional Campus", category: "Government" as Category },
  { image: interior5, title: "Penthouse Interior", category: "Residential" as Category },
  { image: portfolio3, title: "Public Library Design", category: "Government" as Category },
  { image: interior6, title: "Luxury Bathroom", category: "Residential" as Category },
  { image: portfolio4, title: "Structural Elevation", category: "Architectural" as Category },
  { image: portfolio2, title: "Community Center", category: "Government" as Category },
  { image: portfolio3, title: "Villa Architecture", category: "Architectural" as Category },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryProjects
    : galleryProjects.filter(p => p.category === activeCategory);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => setLightboxIndex(prev => prev !== null ? (prev + 1) % filtered.length : null), [filtered.length]);
  const goPrev = useCallback(() => setLightboxIndex(prev => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null), [filtered.length]);

  return (
    <>
      <section id="gallery" ref={ref} className="section-padding relative overflow-hidden bg-secondary/40">
        <div className="absolute inset-0 arch-grid-overlay pointer-events-none opacity-40" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-4 sm:mb-5">Portfolio</p>
            <h2 className="text-display text-3xl sm:text-5xl md:text-6xl">
              Our <span className="text-accent italic font-bold">Gallery</span>
            </h2>
            <div className="gold-line mx-auto mt-5 sm:mt-7 mb-8 sm:mb-12" />

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
                  className={`px-5 sm:px-7 py-2.5 sm:py-3 text-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-transparent text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  className="group relative cursor-pointer overflow-hidden aspect-square"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[4px] border border-primary-foreground/0 group-hover:border-primary-foreground/20 transition-all duration-500 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-mono text-[9px] tracking-[0.2em] uppercase text-accent mb-1">{project.category}</p>
                    <h3 className="text-display text-base sm:text-lg text-primary-foreground font-bold">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 z-10 p-2 text-primary-foreground/80 hover:text-primary-foreground" aria-label="Close">
              <X className="w-7 h-7" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-2 sm:left-6 z-10 p-2 text-primary-foreground/60 hover:text-primary-foreground" aria-label="Previous">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <motion.img
              key={lightboxIndex}
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].title}
              className="max-h-[85vh] max-w-[92vw] sm:max-w-[85vw] object-contain"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-2 sm:right-6 z-10 p-2 text-primary-foreground/60 hover:text-primary-foreground" aria-label="Next">
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
              <p className="text-mono text-[10px] tracking-[0.25em] uppercase text-accent mb-1">{filtered[lightboxIndex].category}</p>
              <p className="text-display text-lg text-primary-foreground font-bold">{filtered[lightboxIndex].title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
