import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InteriorWorks from "./pages/InteriorWorks";
import ArchitectureWorks from "./pages/ArchitectureWorks";
import ConstructionWorks from "./pages/ConstructionWorks";
import ContactPage from "./pages/ContactPage";
import EnquiryPopup from "./components/EnquiryPopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <EnquiryPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/interior" element={<InteriorWorks />} />
          <Route path="/architecture" element={<ArchitectureWorks />} />
          <Route path="/construction" element={<ConstructionWorks />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
