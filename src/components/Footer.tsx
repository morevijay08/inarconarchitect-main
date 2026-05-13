import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-14 bg-charcoal arch-material-divider">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8">
        <div className="flex items-center gap-4">
          <img src={logo} alt="INARCON" className="h-10 w-auto" />
          <div>
            <p className="text-display text-xl tracking-[0.12em] text-primary-foreground font-extrabold">INARCON</p>
            <p className="text-mono text-[9px] sm:text-[10px] text-primary-foreground/40 tracking-[0.3em] uppercase mt-0.5 font-bold">Interior Architecture & Design</p>
          </div>
        </div>
        <p className="text-mono text-[10px] sm:text-[11px] text-primary-foreground/30 tracking-wide font-bold">
          © {new Date().getFullYear()} INARCON Interior. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
