import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Interior", to: "/interior", code: "IN" },
  { label: "Architecture", to: "/architecture", code: "AR" },
  { label: "Construction", to: "/construction", code: "CON" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const handleNav = (to: string) => {
    if (to === "/contact" && location.pathname === "/") {
      // scroll to contact on home page
      const el = document.getElementById("contact");
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top: y, behavior: "smooth" });
        setMobileOpen(false);
        return;
      }
    }
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  const isActive = (to: string) => location.pathname === to;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-primary/40 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-3.5">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img src={logo} alt="INARCON" className="h-9 sm:h-11 w-auto" />
          <span className="text-display text-lg sm:text-xl tracking-[0.12em] font-extrabold text-primary-foreground">INARCON</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={() => handleNav(item.to)}
              className={`text-mono text-sm tracking-[0.2em] uppercase transition-colors duration-300 font-bold flex items-center gap-1.5 ${
                isActive(item.to) ? "text-accent" : "text-primary-foreground/70 hover:text-accent"
              }`}
            >
              {item.code && (
                <span className="text-accent/70 text-xs tracking-[0.15em]">{item.code}</span>
              )}
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary-foreground" aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10"
        >
          <div className="flex flex-col items-center gap-7 py-10">
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => handleNav(item.to)}
                className={`text-mono text-base tracking-[0.2em] uppercase transition-colors font-bold flex items-center gap-2 ${
                  isActive(item.to) ? "text-accent" : "text-primary-foreground/70 hover:text-accent"
                }`}
              >
                {item.code && <span className="text-accent/70 text-sm">{item.code}</span>}
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
