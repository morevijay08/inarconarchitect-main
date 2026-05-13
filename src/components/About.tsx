import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 arch-blueprint-overlay pointer-events-none opacity-50" />

      <motion.div
        className="absolute top-12 right-12 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1.5 }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <rect x="20" y="20" width="160" height="160" stroke="hsl(var(--accent))" strokeWidth="0.8" />
          <rect x="40" y="40" width="120" height="120" stroke="hsl(var(--accent))" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="hsl(var(--accent))" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="hsl(var(--accent))" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="2 3" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="section-label mb-4 sm:mb-5">Who We Are</p>
          <h2 className="text-display text-3xl sm:text-5xl md:text-6xl leading-tight mb-5 sm:mb-7">
            Designing What <br />Matters Most
          </h2>
          <div className="gold-line mb-7 sm:mb-9" />
          <p className="text-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-7 font-medium">
            INARCON Interior is a premium design studio where architecture meets emotion.
            We believe every space — whether a home, an office, or a boutique — carries the
            energy of the people who inhabit it.
          </p>
          <p className="text-body text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
            Our approach blends international aesthetics with deeply personal narratives.
            We don't just design rooms; we compose environments that elevate how you live,
            work, and feel.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-4"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {[
            { number: "150+", label: "Projects Completed" },
            { number: "12", label: "Years of Expertise" },
            { number: "35+", label: "Design Awards" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="p-6 sm:p-10 bg-card border border-border hover-lift cursor-default relative group">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent/50 transition-all duration-500 group-hover:w-8 group-hover:h-8" />
              <p className="text-display text-3xl sm:text-4xl md:text-5xl text-accent mb-2 sm:mb-3">{stat.number}</p>
              <p className="text-mono text-[9px] sm:text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-bold">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
