import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2, Terminal, Database, GitBranch, Check } from "lucide-react";

const projects = [
  {
    name: "ylearner",
    tagline: "Learn to code, the practical way",
    description:
      "A free, open learning platform offering hands-on lessons in Python, JavaScript, SQL, Git, Odoo, and more — built to make high-quality programming education accessible to everyone worldwide.",
    url: "https://ylearner.org/",
    tech: ["Python", "JavaScript", "SQL", "Git", "Odoo", "OWL.js"],
    highlights: [
      "Structured, beginner-to-advanced curriculum",
      "Interactive examples and exercises",
      "Free and openly accessible",
    ],
  },
];

// Decorative icons floating in the project mockup
const mockupTopics = [
  { icon: Code2, label: "Python" },
  { icon: Terminal, label: "JavaScript" },
  { icon: Database, label: "SQL" },
  { icon: GitBranch, label: "Git" },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Products We've{" "}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just build for clients — we build our own products too.
            Here's what we've shipped.
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Browser Mockup */}
            <div className="order-2 lg:order-1">
              <div className="glass-card rounded-2xl p-3 hover-lift">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 rounded-md bg-muted/60 px-3 py-1 text-xs text-muted-foreground truncate">
                    ylearner.org
                  </div>
                </div>

                {/* Mockup body */}
                <div className="relative rounded-xl overflow-hidden bg-white aspect-[16/10] p-8 flex flex-col items-center justify-center">
                  <img
                    src="/yearner-logo.png"
                    alt="ylearner logo"
                    className="h-12 sm:h-14 w-auto mb-3"
                  />
                  <span className="text-sm text-gray-500 mb-6">
                    {project.tagline}
                  </span>

                  <div className="grid grid-cols-4 gap-3">
                    {mockupTopics.map((topic) => (
                      <div
                        key={topic.label}
                        className="flex flex-col items-center gap-1.5"
                      >
                        <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                          <topic.icon className="h-5 w-5 text-emerald-600" />
                        </div>
                        <span className="text-[10px] text-gray-500">{topic.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">
                  Featured Project
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-6">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-primary-foreground font-semibold hover-lift"
              >
                Visit ylearner
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
