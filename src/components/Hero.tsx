import { motion } from "framer-motion";
import heroImage from "@/assets/hero-interior.jpg";
import logo from "@/assets/logo.png";
import { Building2 } from "lucide-react";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 60;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with stronger overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Luxury modern interior design living room with warm tones and natural light"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.76, 0, 0.24, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 via-transparent to-foreground/30" />
      </div>

      {/* Architectural line accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-8 md:left-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-px h-32 bg-accent/50" />
          <div className="w-20 h-px bg-accent/50 -mt-32" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-8 md:right-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="w-px h-32 bg-accent/50 ml-20" />
          <div className="w-20 h-px bg-accent/50" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
        <motion.img
          src={logo}
          alt="INARCON"
          className="h-14 sm:h-18 md:h-24 w-auto mx-auto mb-5 sm:mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        >
          <h1 className="text-display text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] mb-5 sm:mb-7 text-primary-foreground drop-shadow-md">
            <span className="bg-gradient-to-br from-[hsl(38_70%_62%)] via-[hsl(42_85%_55%)] to-[hsl(34_60%_38%)] bg-clip-text text-transparent" style={{ filter: "drop-shadow(0 0 18px hsl(38 70% 50% / 0.35)) drop-shadow(0 2px 4px hsl(220 15% 5% / 0.6))" }}>
              Interior Architect
            </span> <br />
            <span className="italic font-bold bg-gradient-to-br from-[hsl(42_80%_60%)] via-[hsl(38_75%_48%)] to-[hsl(32_55%_32%)] bg-clip-text text-transparent" style={{ filter: "drop-shadow(0 0 22px hsl(38 70% 50% / 0.4)) drop-shadow(0 2px 4px hsl(220 15% 5% / 0.6))" }}>
              Consultants
            </span>
          </h1>
        </motion.div>

        {/* Government credibility badge */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center gap-2.5 px-5 py-2.5 border border-accent/40 bg-accent/10 backdrop-blur-sm">
            <Building2 size={16} className="text-accent" strokeWidth={1.5} />
            <span className="text-mono text-xs sm:text-sm tracking-[0.15em] uppercase text-primary-foreground/90 font-bold">
              50+ Dreams Completed
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <button
            onClick={() => scrollTo("gallery")}
            className="px-10 sm:px-12 py-4 sm:py-5 bg-accent text-accent-foreground text-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase hover:bg-accent/90 transition-all duration-300 min-h-[52px] flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            View Our Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-10 sm:px-12 py-4 sm:py-5 border-2 border-primary-foreground/40 text-primary-foreground text-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase hover:bg-primary-foreground/10 hover:border-primary-foreground/60 transition-all duration-300 min-h-[52px] flex items-center justify-center"
          >
            Book Consultation
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-[2px] h-14 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
