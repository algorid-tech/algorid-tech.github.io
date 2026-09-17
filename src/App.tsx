import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AlgoridCapturePrivacy from "./pages/AlgoridCapturePrivacy";

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/algorid-capture/privacy-policy" element={<AlgoridCapturePrivacy />} />
          <Route path="/algorid-capture/privacy-policy.html" element={<AlgoridCapturePrivacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
