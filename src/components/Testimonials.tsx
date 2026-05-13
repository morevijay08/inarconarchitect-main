import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Excellent materials and a well-executed design structure. Everything was handled perfectly.", name: "Satish Pawar", role: "Client" },
  { quote: "Outstanding experience. The team is professional, creative, and delivered exactly what I envisioned. High-quality work with strong attention to detail.", name: "Pooja Kokate", role: "Client" },
  { quote: "A smooth and reliable experience. The team was responsive and addressed all concerns quickly.", name: "Nilam Harugade", role: "Client" },
  { quote: "Good service with a strong focus on aesthetics and quality.", name: "Sandhya Nair", role: "Client" },
  { quote: "Turn your dream into reality with INARCON.", name: "Pranali Pawar", role: "Client" },
  { quote: "Transformation begins here.", name: "Sushma Mohite", role: "Client" },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-primary" ref={ref}>
      <div className="absolute inset-0 arch-concrete-bg pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-4 sm:mb-5 text-accent">Client Stories</p>
          <h2 className="text-display text-3xl sm:text-5xl md:text-6xl text-primary-foreground">Voices of Trust</h2>
          <div className="gold-line mx-auto mt-5 sm:mt-7" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-6 sm:p-10 border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm hover-lift relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent/40 transition-all duration-500 group-hover:w-10 group-hover:h-10 group-hover:border-accent/70" />
              <Quote size={28} className="text-accent mb-7" strokeWidth={1.2} />
              <p className="text-body text-sm sm:text-base text-primary-foreground/70 leading-relaxed mb-7 sm:mb-9 italic font-medium">"{t.quote}"</p>
              <div>
                <p className="text-display text-lg sm:text-xl font-bold text-primary-foreground">{t.name}</p>
                <p className="text-mono text-[9px] sm:text-[11px] tracking-[0.15em] uppercase text-primary-foreground/40 mt-1 font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
