import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919767538453?text=Hello%20INARCON%2C%20I%27d%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-primary-foreground" fill="currentColor" />
    </motion.a>
  );
};

export default WhatsAppButton;
