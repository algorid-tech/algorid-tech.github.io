import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  Shield, 
  Clock, 
  Headphones,
  TrendingUp,
  Settings,
  Check
} from "lucide-react";

const features = [
  { icon: Zap, title: "Fast Delivery", description: "Rapid development cycles with agile methodology" },
  { icon: Shield, title: "Secure Solutions", description: "Enterprise-grade security in every project" },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical assistance" },
  { icon: Headphones, title: "Dedicated Team", description: "Expert developers assigned to your project" },
  { icon: TrendingUp, title: "Scalable Architecture", description: "Solutions that grow with your business" },
  { icon: Settings, title: "Custom Integration", description: "Seamless third-party integrations" },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Features List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Built for{" "}
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We combine technical expertise with industry best practices to deliver 
              solutions that exceed expectations.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlighted Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20" />
            <div className="relative glass-card rounded-3xl p-8 lg:p-10">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <Cog className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-4">
                Odoo Excellence
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                As certified Odoo experts, we deliver end-to-end ERP solutions 
                that transform your business operations. From implementation to 
                custom development, we've got you covered.
              </p>

              <div className="space-y-4">
                {[
                  "Full Odoo Implementation",
                  "Custom Module Development",
                  "Third-party Integrations",
                  "Data Migration Services",
                  "Training & Support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Import Cog for the card
import { Cog } from "lucide-react";

export default Features;