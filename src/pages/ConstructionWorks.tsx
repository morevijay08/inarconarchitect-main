import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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

const ConstructionWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero - industrial tone */}
        <section className="pt-24 pb-10 sm:pt-32 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 arch-grid-overlay pointer-events-none opacity-60" />
          {/* Industrial texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 20px,
                hsl(var(--foreground)) 20px,
                hsl(var(--foreground)) 21px
              )`,
            }}
          />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Construction Works
            </motion.p>
            <motion.h1
              className="text-display text-3xl sm:text-5xl md:text-6xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Building <span className="text-brand italic font-medium">Foundations</span>
            </motion.h1>
            <motion.div
              className="gold-line mx-auto mt-4 mb-6"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p
              className="text-body text-sm sm:text-base text-muted-foreground max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From raw structure to refined finish — the construction journey that brings architecture to life.
              Upload your site photos to showcase your build process.
            </motion.p>
          </div>
        </section>

        {/* Gallery Grid - industrial feel */}
        <section ref={ref} className="px-1 sm:px-2 pb-10 sm:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2">
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
                  {/* Industrial overlay tint */}
                  <div className="absolute inset-0 bg-foreground/5 mix-blend-multiply pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="text-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-gold-light mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-display text-base sm:text-xl text-primary-foreground">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upload prompt */}
            <motion.div
              className="mt-8 sm:mt-12 text-center p-8 sm:p-12 border-2 border-dashed border-border/60"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-muted-foreground/50 mb-3">
                <svg className="w-12 h-12 mx-auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="6" y="6" width="36" height="36" rx="4" />
                  <path d="M14 34 L24 14 L34 34" />
                  <line x1="18" y1="26" x2="30" y2="26" />
                </svg>
              </div>
              <p className="text-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
                Upload your construction site photos to showcase here
              </p>
            </motion.div>
          </div>
        </section>

        {/* Construction worker illustration accent */}
        <section className="py-10 sm:py-14 relative overflow-hidden">
          <div className="absolute inset-0 arch-concrete-bg pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <svg width="100" height="140" viewBox="0 0 100 140" fill="none">
                {/* Hard hat */}
                <ellipse cx="50" cy="22" rx="20" ry="7" fill="hsl(38 55% 55% / 0.3)" stroke="hsl(38 55% 55%)" strokeWidth="1.5" />
                <path d="M30 22 Q30 12 50 8 Q70 12 70 22" fill="hsl(38 55% 55% / 0.2)" stroke="hsl(38 55% 55%)" strokeWidth="1.5" />
                {/* Head */}
                <circle cx="50" cy="36" r="12" fill="hsl(35 40% 85%)" stroke="hsl(220 12% 30%)" strokeWidth="1" />
                {/* Eyes */}
                <circle cx="46" cy="34" r="1.2" fill="hsl(220 12% 20%)" />
                <circle cx="54" cy="34" r="1.2" fill="hsl(220 12% 20%)" />
                {/* Body - work vest */}
                <rect x="38" y="50" width="24" height="35" rx="3" fill="hsl(38 55% 55% / 0.15)" stroke="hsl(38 55% 55%)" strokeWidth="1" />
                {/* Vest stripes */}
                <line x1="38" y1="60" x2="62" y2="60" stroke="hsl(38 55% 55% / 0.4)" strokeWidth="2" />
                <line x1="38" y1="70" x2="62" y2="70" stroke="hsl(38 55% 55% / 0.4)" strokeWidth="2" />
                {/* Hammer */}
                <rect x="66" y="48" width="3" height="35" rx="1" fill="hsl(25 30% 40%)" />
                <rect x="62" y="44" width="11" height="8" rx="1" fill="hsl(220 12% 40%)" stroke="hsl(220 12% 30%)" strokeWidth="0.5" />
                {/* Legs */}
                <rect x="40" y="85" width="9" height="30" rx="3" fill="hsl(220 12% 30% / 0.3)" stroke="hsl(220 12% 30%)" strokeWidth="1" />
                <rect x="52" y="85" width="9" height="30" rx="3" fill="hsl(220 12% 30% / 0.3)" stroke="hsl(220 12% 30%)" strokeWidth="1" />
                {/* Boots */}
                <rect x="38" y="112" width="13" height="7" rx="3" fill="hsl(25 30% 30%)" />
                <rect x="50" y="112" width="13" height="7" rx="3" fill="hsl(25 30% 30%)" />
              </svg>
            </motion.div>
            <motion.div
              className="text-center sm:text-left max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-display text-2xl sm:text-3xl mb-3">Built with Precision</h3>
              <p className="text-body text-sm text-muted-foreground leading-relaxed">
                Every structure begins with skilled hands and careful planning.
                Our construction process ensures quality from foundation to finish.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ConstructionWorks;
