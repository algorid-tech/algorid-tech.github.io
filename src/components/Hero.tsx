import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left lg:col-span-5"
          >

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              We Build{" "}
              <span className="gradient-text">Modern Solutions</span>
              {" "}for Growing Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Expert Odoo ERP development, AI/ML solutions, and custom software development. 
              Transform your business with cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a href="#contact">
                <Button className="gradient-primary text-primary-foreground font-semibold px-8 h-12">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://apps.odoo.com/apps/modules/browse?author=Algorid%20Limited" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="font-semibold px-8 h-12 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Published Odoo Apps
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative lg:col-span-7"
          >
            <img
              src={heroIllustration}
              alt="Software Development Illustration"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;