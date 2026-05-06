import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import icon from "@/assets/icon.png";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Odoo Development", href: "#services" },
    { name: "AI & ML Solutions", href: "#services" },
    { name: "Django Development", href: "#services" },
    { name: "React Development", href: "#services" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/algorid-tech", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/algorid-tech/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@algorid.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-12 md:col-span-6">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img src={icon} alt="Algorid logo" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-xl">Algorid</span>
            </a>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Expert software solutions for businesses. Specializing in Odoo ERP, AI/ML, and custom development.
            </p>
            <nav aria-label="Social links" className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex items-center justify-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Algorid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;