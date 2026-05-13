import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart, Brain, Sun, Eye, Shield, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Emotional Architecture",
    desc: "Every room carries a heartbeat. We design spaces that resonate with the emotions you want to feel — calm in the bedroom, energy in the studio, warmth in the living room.",
    num: "01",
  },
  {
    icon: Brain,
    title: "Psychology of Space",
    desc: "Colors, proportions, and light patterns directly shape mood and cognition. We use spatial psychology to create environments that boost focus, creativity, and wellbeing.",
    num: "02",
  },
  {
    icon: Sun,
    title: "Light as Language",
    desc: "Natural and ambient light are not afterthoughts — they are the primary material. We sculpt light to transform how a space breathes throughout the day.",
    num: "03",
  },
  {
    icon: Eye,
    title: "Sensory Design",
    desc: "Beyond visuals — texture underfoot, acoustics in hallways, the scent of materials. Multi-sensory design creates spaces you don't just see, but truly inhabit.",
    num: "04",
  },
  {
    icon: Shield,
    title: "Identity & Belonging",
    desc: "Your space should reflect who you are. We translate personal stories, cultural roots, and aspirations into physical environments that feel unmistakably yours.",
    num: "05",
  },
  {
    icon: Sparkles,
    title: "Healing Environments",
    desc: "Spaces have the power to restore. Through biophilic design and mindful layouts, we create sanctuaries that reduce stress and promote inner peace.",
    num: "06",
  },
];

const Philosophy = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const pillarsRef = useRef(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-80px" });
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          ref={heroRef}
          className="min-h-[70vh] flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 arch-blueprint-overlay pointer-events-none opacity-60" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 0.08 } : {}}
            transition={{ duration: 2 }}
          >
            <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
              <circle cx="400" cy="300" r="200" stroke="hsl(204 100% 40%)" strokeWidth="0.5" strokeDasharray="6 8" />
              <circle cx="400" cy="300" r="280" stroke="hsl(var(--accent))" strokeWidth="0.3" strokeDasharray="3 6" />
              <line x1="200" y1="300" x2="600" y2="300" stroke="hsl(var(--accent))" strokeWidth="0.3" />
              <line x1="400" y1="100" x2="400" y2="500" stroke="hsl(var(--accent))" strokeWidth="0.3" />
            </svg>
          </motion.div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Philosophy
            </motion.p>
            <motion.h1
              className="text-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Spaces Shape <br />
              <span className="text-brand italic font-medium">How You Feel</span>
            </motion.h1>
            <motion.div
              className="gold-line mx-auto mb-6"
              initial={{ width: 0 }}
              animate={heroInView ? { width: 64 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            <motion.p
              className="text-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We believe design is not decoration — it is the invisible force that shapes your mood,
              your productivity, your identity, and your comfort. Every choice we make is rooted in
              how humans experience the built environment.
            </motion.p>
          </div>
        </section>

        {/* Pillars */}
        <section ref={pillarsRef} className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 arch-concrete-bg pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label mb-4">Design Pillars</p>
              <h2 className="text-display text-3xl sm:text-4xl md:text-5xl">
                Human-Centered Principles
              </h2>
              <div className="gold-line mx-auto mt-6" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  className="group p-6 sm:p-8 md:p-10 bg-background hover:bg-secondary/30 transition-all duration-500 relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <span className="text-mono text-[10px] text-muted-foreground/40 absolute top-4 right-4 tracking-widest">
                    {pillar.num}
                  </span>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand/20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-brand/40" />
                  <pillar.icon
                    size={28}
                    className="text-brand mb-6 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.2}
                  />
                  <h3 className="text-display text-xl mb-3 font-semibold">{pillar.title}</h3>
                  <p className="text-body text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Storytelling section */}
        <section ref={storyRef} className="section-padding bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 arch-grid-overlay pointer-events-none opacity-50" />
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label mb-4">The INARCON Approach</p>
              <h2 className="text-display text-3xl sm:text-4xl md:text-5xl mb-8">
                Beyond Aesthetics
              </h2>
              <div className="gold-line mx-auto mb-10" />
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  title: "We Listen First",
                  text: "Before a single line is drawn, we immerse ourselves in your story. Your rhythms, your rituals, your aspirations. The brief isn't a checklist — it's a conversation about life.",
                },
                {
                  title: "We Design with Intention",
                  text: "Every material, every angle, every light source is chosen for its psychological impact. A room isn't just beautiful — it actively supports the way you want to live and work.",
                },
                {
                  title: "We Build with Care",
                  text: "From raw concrete to the final fabric swatch, every stage is handled with precision and respect for craft. The process is as intentional as the result.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 md:gap-8 items-start"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={storyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 border border-brand/30 flex items-center justify-center">
                    <span className="text-mono text-xs text-brand font-bold">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-display text-xl sm:text-2xl mb-3">{item.title}</h3>
                    <p className="text-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Flat illustrated worker accent section */}
        <section className="py-12 sm:py-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {/* Designer character */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
                {/* Hard hat */}
                <ellipse cx="60" cy="30" rx="22" ry="8" fill="hsl(204 100% 40% / 0.15)" stroke="hsl(204 100% 40%)" strokeWidth="1.5" />
                <path d="M38 30 Q38 18 60 14 Q82 18 82 30" fill="hsl(204 100% 40% / 0.2)" stroke="hsl(204 100% 40%)" strokeWidth="1.5" />
                {/* Head */}
                <circle cx="60" cy="45" r="14" fill="hsl(35 40% 85%)" stroke="hsl(220 12% 30%)" strokeWidth="1" />
                {/* Eyes */}
                <circle cx="55" cy="43" r="1.5" fill="hsl(220 12% 20%)" />
                <circle cx="65" cy="43" r="1.5" fill="hsl(220 12% 20%)" />
                {/* Smile */}
                <path d="M55 49 Q60 53 65 49" stroke="hsl(220 12% 30%)" strokeWidth="1" fill="none" />
                {/* Body */}
                <rect x="45" y="60" width="30" height="40" rx="4" fill="hsl(204 100% 40% / 0.2)" stroke="hsl(204 100% 40%)" strokeWidth="1" />
                {/* Ruler in hand */}
                <rect x="78" y="55" width="4" height="50" rx="1" fill="hsl(var(--accent))" stroke="hsl(var(--accent))" strokeWidth="0.5" />
                {/* Ruler marks */}
                <line x1="78" y1="65" x2="80" y2="65" stroke="hsl(220 12% 30%)" strokeWidth="0.5" />
                <line x1="78" y1="75" x2="80" y2="75" stroke="hsl(220 12% 30%)" strokeWidth="0.5" />
                <line x1="78" y1="85" x2="80" y2="85" stroke="hsl(220 12% 30%)" strokeWidth="0.5" />
                {/* Legs */}
                <rect x="48" y="100" width="10" height="35" rx="3" fill="hsl(220 12% 25% / 0.3)" stroke="hsl(220 12% 30%)" strokeWidth="1" />
                <rect x="62" y="100" width="10" height="35" rx="3" fill="hsl(220 12% 25% / 0.3)" stroke="hsl(220 12% 30%)" strokeWidth="1" />
                {/* Boots */}
                <rect x="46" y="132" width="14" height="8" rx="3" fill="hsl(220 12% 25% / 0.4)" stroke="hsl(220 12% 30%)" strokeWidth="1" />
                <rect x="60" y="132" width="14" height="8" rx="3" fill="hsl(220 12% 25% / 0.4)" stroke="hsl(220 12% 30%)" strokeWidth="1" />
              </svg>
            </motion.div>

            <motion.div
              className="text-center sm:text-left max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-display text-2xl sm:text-3xl mb-3">Designed by People,<br />For People</h3>
              <p className="text-body text-sm text-muted-foreground leading-relaxed">
                Our team combines architectural precision with genuine human empathy. 
                Every space we create starts with understanding the people who will live in it.
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

export default Philosophy;
