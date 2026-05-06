import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cog, 
  Brain, 
  Code2, 
  Smartphone, 
  Database, 
  Cloud,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Odoo ERP Development",
    description: "Custom Odoo module development, implementation, and migration services to streamline your business operations.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by ML models, LLMs, and AI agents that automate and optimize your workflows.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Code2,
    title: "Django Development",
    description: "Robust and scalable web applications built with Python Django framework and best practices.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Smartphone,
    title: "React Development",
    description: "Modern, responsive, and performant frontend applications using React and its ecosystem.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Expert database design, optimization, and management for PostgreSQL, MySQL, and more.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud architecture, deployment, and DevOps solutions for AWS, GCP, and Azure platforms.",
    color: "from-pink-500 to-pink-600",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Solutions That{" "}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From ERP implementation to AI-powered automation, we offer comprehensive 
            software solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-8 hover-lift cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <a href="#contact" className="inline-flex items-center text-primary font-medium group/link">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;