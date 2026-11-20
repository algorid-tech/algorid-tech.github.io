import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Code2,
  Terminal,
  Database,
  GitBranch,
  Check,
  ShieldCheck,
  Camera,
  Crop,
  Video,
  MousePointerClick,
  Download,
  Zap,
  RotateCcw,
  Puzzle,
} from "lucide-react";
import captureIcon from "@/assets/algorid-capture-icon.png";
import fetchIcon from "@/assets/algorid-fetch-icon.png";

type Project = {
  name: string;
  label: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  links: { label: string; href: string; external?: boolean; primary?: boolean }[];
  mockup: "ylearner" | "capture" | "fetch";
};

const projects: Project[] = [
  {
    name: "ylearner",
    label: "Featured Project",
    tagline: "Learn to code, the practical way",
    description:
      "A free, open learning platform offering hands-on lessons in Python, JavaScript, SQL, Git, Odoo, and more — built to make high-quality programming education accessible to everyone worldwide.",
    tech: ["Python", "JavaScript", "SQL", "Git", "Odoo", "OWL.js"],
    highlights: [
      "Structured, beginner-to-advanced curriculum",
      "Interactive examples and exercises",
      "Free and openly accessible",
    ],
    links: [{ label: "Visit ylearner", href: "https://ylearner.org/", external: true, primary: true }],
    mockup: "ylearner",
  },
  {
    name: "Algorid Capture",
    label: "Chrome Extension",
    tagline: "Screenshots and screen recording for Chrome",
    description:
      "Capture full page or visible area screenshots, then crop and annotate them. Record a tab, a window or the entire screen with audio, microphone, a camera bubble and click highlights — all processed locally in your browser.",
    tech: ["Chrome Extension", "Manifest V3", "JavaScript", "MediaRecorder", "IndexedDB"],
    highlights: [
      "Full page screenshots with crop, arrows, text and hide-data tools",
      "Tab, window and screen recording with camera bubble and click highlights",
      "Export to PNG, JPEG, PDF, MP4 or WebM",
      "No accounts, tracking or data sent to any server",
    ],
    links: [
      { label: "Privacy Policy", href: "/algorid-capture/privacy-policy" },
    ],
    mockup: "capture",
  },
  {
    name: "Algorid Fetch",
    label: "Windows & Linux App",
    tagline: "Fast, resumable downloads",
    description:
      "A free download manager that splits each file across many connections, resumes after a pause, a crash or a reboot, and works with Chrome and Firefox through a small extension.",
    tech: ["Python", "Qt", "Chrome Extension", "Firefox Add-on", "yt-dlp"],
    highlights: [
      "Up to 32 connections per file, all kept busy until the end",
      "Resumes after a pause, a crash or a reboot",
      "Catches browser downloads and saves videos with a quality picker",
      "Queue, speed limit and a terminal command for servers",
    ],
    links: [{ label: "Download Algorid Fetch", href: "/algorid-fetch", primary: true }],
    mockup: "fetch",
  },
];

const ylearnerTopics = [
  { icon: Code2, label: "Python" },
  { icon: Terminal, label: "JavaScript" },
  { icon: Database, label: "SQL" },
  { icon: GitBranch, label: "Git" },
];

const captureTools = [
  { icon: Camera, label: "Screenshot" },
  { icon: Crop, label: "Annotate" },
  { icon: Video, label: "Record" },
  { icon: MousePointerClick, label: "Clicks" },
];

const fetchTools = [
  { icon: Zap, label: "Fast" },
  { icon: RotateCcw, label: "Resume" },
  { icon: Video, label: "Videos" },
  { icon: Puzzle, label: "Browser" },
];

const apps = {
  capture: { icon: captureIcon, bar: "Chrome extension", topics: captureTools },
  fetch: { icon: fetchIcon, bar: "Windows and Linux app", topics: fetchTools },
};

const Mockup = ({ project }: { project: Project }) => {
  const app = project.mockup === "ylearner" ? null : apps[project.mockup];
  const topics = app ? app.topics : ylearnerTopics;

  return (
    <div className="glass-card rounded-2xl p-3 hover-lift">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <div className="ml-3 flex-1 rounded-md bg-muted/60 px-3 py-1 text-xs text-muted-foreground truncate">
          {app ? app.bar : "ylearner.org"}
        </div>
        {app && (
          <img src={app.icon} alt="" className="h-5 w-5 rounded" aria-hidden="true" />
        )}
      </div>

      {/* Mockup body */}
      <div className="relative rounded-xl overflow-hidden bg-white aspect-[16/10] p-8 flex flex-col items-center justify-center">
        {app ? (
          <div className="flex items-center gap-3 mb-3">
            <img src={app.icon} alt={`${project.name} icon`} className="h-12 sm:h-14 w-auto rounded-2xl" />
            <span className="font-display text-xl sm:text-2xl font-bold text-gray-900">{project.name}</span>
          </div>
        ) : (
          <img src="/yearner-logo.png" alt="ylearner logo" className="h-12 sm:h-14 w-auto mb-3" />
        )}
        <span className="text-sm text-gray-500 mb-6 text-center">{project.tagline}</span>

        <div className="grid grid-cols-4 gap-3">
          {topics.map((topic) => (
            <div key={topic.label} className="flex flex-col items-center gap-1.5">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  app ? "bg-blue-50" : "bg-emerald-50"
                }`}
              >
                <topic.icon className={`h-5 w-5 ${app ? "text-blue-600" : "text-emerald-600"}`} />
              </div>
              <span className="text-[10px] text-gray-500">{topic.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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

        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => {
            const flipped = index % 2 === 1;
            return (
              <motion.div
                key={project.name}
                id={project.mockup === "ylearner" ? undefined : `algorid-${project.mockup}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-24"
              >
                <div className={flipped ? "order-2" : "order-2 lg:order-1"}>
                  <Mockup project={project} />
                </div>

                {/* Details */}
                <div className={flipped ? "order-1" : "order-1 lg:order-2"}>
                  <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                    {project.label}
                  </span>
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

                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) =>
                      link.primary ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-primary-foreground font-semibold hover-lift"
                        >
                          {link.label}
                          {link.external ? <ExternalLink className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                        </a>
                      ) : (
                        <a
                          key={link.href}
                          href={link.href}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-background text-foreground font-semibold hover-lift hover:border-primary/50"
                        >
                          <ShieldCheck className="h-4 w-4 text-primary" />
                          {link.label}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
