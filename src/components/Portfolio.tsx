import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  { image: portfolio1, title: "Serene Residence", category: "Residential", size: "large", code: "PR-001" },
  { image: portfolio2, title: "Executive Suite", category: "Commercial", size: "small", code: "PR-002" },
  { image: portfolio3, title: "Artisan Kitchen", category: "Residential", size: "small", code: "PR-003" },
  { image: portfolio4, title: "Grand Atrium", category: "Hospitality", size: "large", code: "PR-004" },
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Subtle architectural grid */}
      <div className="absolute inset-0 arch-grid-overlay pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-3 sm:mb-4">Our Work</p>
          <h2 className="text-display text-3xl sm:text-4xl md:text-5xl">Selected Projects</h2>
          <div className="gold-line mx-auto mt-4 sm:mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`img-reveal group relative cursor-pointer ${
                project.size === "large" ? "aspect-[4/5] sm:md:row-span-2 sm:aspect-[3/4]" : "aspect-[4/3] sm:aspect-square"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.category} interior design project`}
                className="w-full h-full object-cover"
              />

              {/* Project board overlay frame */}
              <div className="absolute inset-3 border border-primary-foreground/0 group-hover:border-primary-foreground/20 transition-all duration-700 pointer-events-none" />

              {/* Project code tag */}
              <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-mono text-[9px] tracking-[0.3em] text-primary-foreground/60 bg-foreground/30 backdrop-blur-sm px-3 py-1">
                  {project.code}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-gold-light mb-1 sm:mb-2">{project.category}</p>
                <h3 className="text-display text-lg sm:text-2xl text-primary-foreground">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
