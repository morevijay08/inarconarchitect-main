import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default AboutPage;
