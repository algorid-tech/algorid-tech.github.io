import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_ypxaq0r";
const EMAILJS_TEMPLATE_ID = "template_agqlnin";
const EMAILJS_PUBLIC_KEY = "gqqD-_IVbtyTGQPx1";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@algorid.com",
    href: "mailto:contact@algorid.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+8801779977767",
    href: "tel:+8801779977767",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build{" "}
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your business? Contact us today to discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4 p-6 glass-card rounded-xl hover-lift group"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{info.title}</h4>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8"
              aria-label="Contact form"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="from_name"
                    name="from_name"
                    placeholder="John Doe"
                    required
                    autoComplete="name"
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="from_email"
                    name="from_email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    autoComplete="email"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-primary text-primary-foreground font-semibold h-12"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;