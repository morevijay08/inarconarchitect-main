import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="arch-blueprint-overlay absolute inset-0 opacity-50" />
        <motion.div
          className="absolute top-8 left-8 right-8 bottom-8 border-2 border-accent/[0.08] hidden lg:block"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute top-16 left-16 right-16 bottom-16 border border-accent/[0.05] hidden lg:block"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-4 sm:mb-5">Get In Touch</p>
          <h2 className="text-display text-3xl sm:text-5xl md:text-6xl leading-tight mb-5 sm:mb-7">
            Let's Create <br />Something Beautiful
          </h2>
          <div className="gold-line mb-7 sm:mb-9" />
          <p className="text-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-9 sm:mb-12 font-medium">
            Ready to transform your space? Share your vision with us and let's begin the journey
            from imagination to reality.
          </p>

          <div className="space-y-7">
            {[
              { icon: Mail, text: "inarcondesigns@gmail.com", href: "mailto:inarcondesigns@gmail.com" },
              { icon: Phone, text: "+91 9767538453", href: "tel:+919767538453" },
              { icon: MapPin, text: "115A, Sawant Vihar, Near More Bag, Katraj Dairy, Katraj, Pune - 411 046, Maharashtra, INDIA" },
              { icon: Instagram, text: "@inarcon_interior", href: "https://www.instagram.com/inarcon_interior?igsh=MWUzZnJyYW1peXVvdA==" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-accent" strokeWidth={1.5} />
                </div>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-body text-sm sm:text-base text-muted-foreground font-medium hover:text-accent transition-colors pt-2">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-body text-sm sm:text-base text-muted-foreground font-medium pt-2 leading-relaxed">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-7"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { key: "name", label: "Your Name", type: "text" },
            { key: "email", label: "Email Address", type: "email" },
          ].map((field) => (
            <div key={field.key}>
              <label className="text-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3 block font-bold">
                {field.label}
              </label>
              <input
                type={field.type}
                required
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full px-5 py-4 bg-card border-2 border-border text-body text-sm focus:outline-none focus:border-accent transition-colors duration-300"
              />
            </div>
          ))}
          <div>
            <label className="text-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3 block font-bold">
              Your Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 bg-card border-2 border-border text-body text-sm focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-10 py-4 sm:py-5 bg-accent text-accent-foreground text-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase hover:bg-accent/90 transition-all duration-300 min-h-[52px] shadow-lg hover:shadow-xl font-bold"
          >
            Send Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
