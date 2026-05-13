import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImage from "@/assets/founder-dhanashree.jpg";

const LeadershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leadership" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 arch-blueprint-overlay pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Founder Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="relative order-1"
          >
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-accent/60 z-10" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent/60 z-10" />
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src={founderImage}
                alt="Dhanashree Nalvade — Founder of INARCON, Civil Engineer & Principal Architect"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            className="order-2 max-w-xl"
          >
            <p className="section-label mb-4 sm:mb-5">About the Founder</p>
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl leading-tight mb-3 font-bold">
              Dhanashree
            </h2>
            <p className="text-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-accent mb-6 font-bold">
              Founder, INARCON
            </p>
            <div className="gold-line mb-7 sm:mb-9" />

            <div className="space-y-4 text-body text-sm sm:text-[15px] text-muted-foreground leading-[1.8] font-medium">
              <p>
                Hello,<br />
                I am <strong className="text-foreground font-bold">Dhanashree</strong>, Founder of <strong className="text-foreground font-bold">INARCON</strong>.
              </p>
              <p>
                I never imagined starting my own business—I was content with my job. However, during my student life in civil engineering, I always had the urge to do something different. Choosing engineering gave me a strong technical foundation, which continues to support my design career today.
              </p>
              <p>
                With hands-on experience in civil, industrial, residential, and commercial architectural work, I realized that we don't just build structures—we become a medium to fulfill people's dreams.
              </p>
              <p>
                <strong className="text-foreground font-bold">INARCON</strong> is a consulting and contracting firm based in Pune, working across Pune, Mumbai, Sangli, and Silvassa. We specialize in combining architecture and interior design to create unique and aesthetically refined solutions.
              </p>
              <p>
                We believe that great design is functional, efficient, and deeply aligned with the client's vision and requirements. Client satisfaction is our top priority, and we consistently strive to exceed expectations.
              </p>
              <p>
                INARCON is known for creating dynamic and interactive spaces that enhance both personal and professional lives.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
