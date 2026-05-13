import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const constructionProjects = [
  { image: portfolio2, title: "Foundation Phase", category: "Structural", size: "small" },
  { image: portfolio4, title: "Steel Framework", category: "Build Process", size: "large" },
  { image: portfolio1, title: "Concrete Forming", category: "On-Site", size: "small" },
  { image: portfolio3, title: "MEP Installation", category: "Systems", size: "small" },
  { image: portfolio4, title: "Exterior Cladding", category: "Finishing", size: "small" },
  { image: portfolio2, title: "Site Elevation", category: "Structural", size: "large" },
];

const ConstructionSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="construction">
      {/* Header with dark bg */}
      <div ref={headerRef} className="section-padding pb-10 sm:pb-14 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 arch-grid-overlay pointer-events-none opacity-40" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, hsl(var(--primary-foreground)) 20px, hsl(var(--primary-foreground)) 21px)`,
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.p
            className="section-label mb-5 text-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Construction Works
          </motion.p>
          <motion.h2
            className="text-display text-4xl sm:text-5xl md:text-7xl mb-5 text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Building <span className="text-accent italic font-bold">Foundations</span>
          </motion.h2>
          <motion.div
            className="gold-line mx-auto mt-5 mb-7"
            initial={{ width: 0 }}
            animate={headerInView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p
            className="text-body text-sm sm:text-base md:text-lg text-primary-foreground/60 max-w-xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From raw structure to refined finish — the construction journey that brings architecture to life.
          </motion.p>
        </div>
      </div>

      {/* Gallery - edge to edge */}
      <div ref={ref} className="pb-0">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[2px]">
            {constructionProjects.map((project, i) => (
              <motion.div
                key={i}
                className={`img-reveal group relative cursor-pointer overflow-hidden ${
                  project.size === "large" ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-accent mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-display text-lg sm:text-xl text-primary-foreground font-bold">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;
