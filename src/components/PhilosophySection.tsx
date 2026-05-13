import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Brain, Sun, Eye, Shield, Sparkles } from "lucide-react";

const pillars = [
  { icon: Heart, title: "Emotional Architecture", desc: "Every room carries a heartbeat. We design spaces that resonate with the emotions you want to feel — calm in the bedroom, energy in the studio, warmth in the living room.", num: "01" },
  { icon: Brain, title: "Psychology of Space", desc: "Colors, proportions, and light patterns directly shape mood and cognition. We use spatial psychology to create environments that boost focus, creativity, and wellbeing.", num: "02" },
  { icon: Sun, title: "Light as Language", desc: "Natural and ambient light are not afterthoughts — they are the primary material. We sculpt light to transform how a space breathes throughout the day.", num: "03" },
  { icon: Eye, title: "Sensory Design", desc: "Beyond visuals — texture underfoot, acoustics in hallways, the scent of materials. Multi-sensory design creates spaces you don't just see, but truly inhabit.", num: "04" },
  { icon: Shield, title: "Identity & Belonging", desc: "Your space should reflect who you are. We translate personal stories, cultural roots, and aspirations into physical environments that feel unmistakably yours.", num: "05" },
  { icon: Sparkles, title: "Healing Environments", desc: "Spaces have the power to restore. Through biophilic design and mindful layouts, we create sanctuaries that reduce stress and promote inner peace.", num: "06" },
];

const PhilosophySection = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const pillarsRef = useRef(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-80px" });
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });

  return (
    <section id="philosophy">
      {/* Hero */}
      <div
        ref={heroRef}
        className="section-padding flex items-center justify-center relative overflow-hidden bg-primary"
      >
        <div className="absolute inset-0 arch-blueprint-overlay pointer-events-none opacity-40" />
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 0.12 } : {}}
          transition={{ duration: 2 }}
        >
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
            <circle cx="400" cy="300" r="200" stroke="hsl(38 60% 50%)" strokeWidth="0.8" strokeDasharray="6 8" />
            <circle cx="400" cy="300" r="280" stroke="hsl(38 60% 50%)" strokeWidth="0.5" strokeDasharray="3 6" />
            <line x1="200" y1="300" x2="600" y2="300" stroke="hsl(38 60% 50%)" strokeWidth="0.5" />
            <line x1="400" y1="100" x2="400" y2="500" stroke="hsl(38 60% 50%)" strokeWidth="0.5" />
          </svg>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            className="section-label mb-5 text-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Philosophy
          </motion.p>
          <motion.h2
            className="text-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] mb-7 text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Spaces Shape <br />
            <span className="text-accent italic font-bold">How You Feel</span>
          </motion.h2>
          <motion.div
            className="gold-line mx-auto mb-7"
            initial={{ width: 0 }}
            animate={heroInView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <motion.p
            className="text-body text-sm sm:text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We believe design is not decoration — it is the invisible force that shapes your mood,
            your productivity, your identity, and your comfort.
          </motion.p>
        </div>
      </div>

      {/* Pillars */}
      <div ref={pillarsRef} className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 arch-concrete-bg pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-5">Design Pillars</p>
            <h3 className="text-display text-3xl sm:text-5xl md:text-6xl">
              Human-Centered Principles
            </h3>
            <div className="gold-line mx-auto mt-7" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border/60">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                className="group p-7 sm:p-9 md:p-12 bg-background hover:bg-secondary/50 transition-all duration-500 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="text-mono text-[10px] text-muted-foreground/50 absolute top-5 right-5 tracking-widest">
                  {pillar.num}
                </span>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-accent/25 transition-all duration-500 group-hover:w-14 group-hover:h-14 group-hover:border-accent/50" />
                <pillar.icon
                  size={32}
                  className="text-accent mb-7 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <h4 className="text-display text-xl sm:text-2xl mb-4 font-bold">{pillar.title}</h4>
                <p className="text-body text-sm sm:text-base text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Storytelling */}
      <div ref={storyRef} className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 arch-grid-overlay pointer-events-none opacity-30" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-5 text-accent">The INARCON Approach</p>
            <h3 className="text-display text-3xl sm:text-5xl md:text-6xl mb-9 text-primary-foreground">
              Beyond Aesthetics
            </h3>
            <div className="gold-line mx-auto mb-12" />
          </motion.div>

          <div className="space-y-14">
            {[
              { title: "We Listen First", text: "Before a single line is drawn, we immerse ourselves in your story. Your rhythms, your rituals, your aspirations." },
              { title: "We Design with Intention", text: "Every material, every angle, every light source is chosen for its psychological impact. A room isn't just beautiful — it actively supports the way you want to live." },
              { title: "We Build with Care", text: "From raw concrete to the final fabric swatch, every stage is handled with precision and respect for craft." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col md:flex-row gap-5 md:gap-10 items-start"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
              >
                <div className="flex-shrink-0 w-14 h-14 border-2 border-accent/40 flex items-center justify-center">
                  <span className="text-mono text-sm text-accent font-bold">0{i + 1}</span>
                </div>
                <div>
                  <h4 className="text-display text-2xl sm:text-3xl mb-4 text-primary-foreground">{item.title}</h4>
                  <p className="text-body text-sm sm:text-base text-primary-foreground/60 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
