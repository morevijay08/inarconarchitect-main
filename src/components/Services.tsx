import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ruler, Home, Hammer } from "lucide-react";

const services = [
  { icon: Home, title: "Interior Design", desc: "Bespoke spaces tailored to your lifestyle and aspirations.", num: "01" },
  { icon: Ruler, title: "Architecture Planning", desc: "Structural elegance from concept to blueprint.", num: "02" },
  { icon: Hammer, title: "Renovation", desc: "Transforming existing spaces into modern masterpieces.", num: "03" },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-secondary/40" ref={ref}>
      <div className="absolute inset-0 arch-grid-overlay pointer-events-none opacity-60" />
      <div className="absolute inset-0 arch-concrete-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="section-label mb-4 sm:mb-5">What We Do</p>
          <h2 className="text-display text-3xl sm:text-5xl md:text-6xl">Crafted Services</h2>
          <div className="gold-line mx-auto mt-5 sm:mt-7" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group p-8 sm:p-10 md:p-14 bg-background border border-border hover:border-accent/40 hover:bg-card cursor-default transition-all duration-500 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="text-mono text-[10px] text-muted-foreground/50 absolute top-5 right-5 tracking-widest">
                {service.num}
              </span>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-accent/25 transition-all duration-500 group-hover:w-14 group-hover:h-14 group-hover:border-accent/50" />
              <service.icon
                size={32}
                className="text-accent mb-7 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <h3 className="text-display text-xl sm:text-2xl mb-4 font-bold">{service.title}</h3>
              <p className="text-body text-sm sm:text-base text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
