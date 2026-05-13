import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, PenTool, LayoutGrid, Hammer, Building, Palette } from "lucide-react";

const consultancyServices = [
  { icon: Compass, title: "Architectural Planning", desc: "Comprehensive architectural planning from concept to construction-ready drawings, with full regulatory compliance.", num: "01" },
  { icon: PenTool, title: "Interior Design Consultancy", desc: "Expert guidance on spatial aesthetics, material selection, and design concepts tailored to your lifestyle and brand.", num: "02" },
  { icon: LayoutGrid, title: "Space Planning", desc: "Strategic spatial layouts that maximize functionality, flow, and comfort for residential and commercial environments.", num: "03" },
  { icon: Hammer, title: "Renovation & Remodeling", desc: "Transform existing spaces with modern design solutions — from structural changes to complete interior overhauls.", num: "04" },
  { icon: Building, title: "Government Project Consulting", desc: "Specialized consulting for institutional and government projects, ensuring compliance with public infrastructure standards.", num: "05" },
  { icon: Palette, title: "Material & Design Advisory", desc: "Curated material palettes, finish specifications, and design advisory services for discerning clients and developers.", num: "06" },
];

const ConsultancySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="consultancy" className="section-padding relative overflow-hidden bg-primary" ref={ref}>
      <div className="absolute inset-0 arch-grid-overlay pointer-events-none opacity-30" />
      <div className="absolute inset-0 arch-concrete-bg pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-4 sm:mb-5 text-accent">Consultancy</p>
          <h2 className="text-display text-3xl sm:text-5xl md:text-6xl text-primary-foreground">
            Expert <span className="text-accent italic font-bold">Advisory</span>
          </h2>
          <div className="gold-line mx-auto mt-5 sm:mt-7" />
          <motion.p
            className="text-body text-sm sm:text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto mt-6 font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional consultancy services to guide your project from initial concept through to flawless execution.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-primary-foreground/5">
          {consultancyServices.map((service, i) => (
            <motion.div
              key={i}
              className="group p-7 sm:p-9 md:p-12 bg-primary hover:bg-primary-foreground/5 cursor-default transition-all duration-500 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="text-mono text-[10px] text-primary-foreground/30 absolute top-5 right-5 tracking-widest">
                {service.num}
              </span>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-accent/25 transition-all duration-500 group-hover:w-14 group-hover:h-14 group-hover:border-accent/50" />
              <service.icon
                size={32}
                className="text-accent mb-7 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <h3 className="text-display text-xl sm:text-2xl mb-4 font-bold text-primary-foreground">{service.title}</h3>
              <p className="text-body text-sm sm:text-base text-primary-foreground/50 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancySection;
