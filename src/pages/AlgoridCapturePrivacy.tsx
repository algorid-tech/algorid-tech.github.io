import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import captureIcon from "@/assets/algorid-capture-icon.png";

const EFFECTIVE_DATE = "17 September 2026";

const dataRows = [
  ["Content of the page you capture", "Creating the screenshot (the page is scrolled and captured, then restored)", "Your browser's local storage (IndexedDB). Only the latest screenshot is kept."],
  ["Your annotations", "Screenshot editor", "Only inside the edited image on your device."],
  ["Screen, window or tab video and audio", "Screen recording", "Your browser's local storage (IndexedDB). Only the latest recording is kept."],
  ["Microphone audio (optional)", "Voice in recordings", "Only inside the recording on your device."],
  ["Camera image (optional)", "Camera bubble in recordings", "Only inside the recording on your device."],
  ["Click positions in the recorded tab", "Drawing click highlight rings", "Used in the moment to draw a ring. Not stored."],
  ["Settings (recording options, last tab, recording status)", "Remembering your preferences", "Chrome extension storage on your device."],
];

const permissionRows = [
  ["activeTab", "Access the current tab only after you click the extension or use its keyboard shortcut"],
  ["scripting", "Scroll the page for full page screenshots and draw click highlights during a recording"],
  ["storage", "Save your settings and recording status on your device"],
  ["tabCapture", "Record the current tab when you start a tab recording"],
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-12 mb-4">{children}</h2>
);

const List = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc pl-6 space-y-2 marker:text-primary">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const Table = ({ head, rows, codeFirst }: { head: string[]; rows: string[][]; codeFirst?: boolean }) => (
  <div className="overflow-x-auto rounded-xl border border-border">
    <table className="w-full text-left text-[15px]">
      <thead className="bg-secondary">
        <tr>
          {head.map((h) => (
            <th key={h} className="px-4 py-3 font-semibold text-foreground">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]} className="border-t border-border align-top">
            {row.map((cell, i) => (
              <td key={i} className="px-4 py-3">
                {codeFirst && i === 0 ? (
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">{cell}</code>
                ) : (
                  cell
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">{children}</code>
);

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-primary font-medium underline underline-offset-4 hover:text-primary/80">
    {children}
  </a>
);

const AlgoridCapturePrivacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Algorid Capture";
    const canonical = document.querySelector('link[rel="canonical"]');
    const prev = canonical?.getAttribute("href");
    canonical?.setAttribute("href", "https://algorid.com/algorid-capture/privacy-policy");
    return () => {
      if (prev) canonical?.setAttribute("href", prev);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 lg:pt-36 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Algorid
          </a>

          <header className="flex items-center gap-4 mb-10">
            <img src={captureIcon} alt="Algorid Capture icon" className="h-14 w-14 rounded-2xl" />
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Algorid Capture</p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Effective date: {EFFECTIVE_DATE} · Publisher: Algorid
              </p>
            </div>
          </header>

          <div className="text-foreground/85 text-base sm:text-lg leading-relaxed">
            <div className="rounded-xl border-l-4 border-primary bg-primary/5 px-5 py-4">
              <p className="font-semibold text-foreground mb-2">In short:</p>
              <List
                items={[
                  "Algorid Capture works entirely inside your browser.",
                  "It does not collect, sell or send your data to Algorid or to any third party.",
                  "It has no accounts, analytics, advertising or tracking.",
                  "Screenshots and recordings stay on your device until you download or delete them.",
                ]}
              />
            </div>

            <H2>1. Who we are</H2>
            <p className="mb-4">
              Algorid Capture ("the extension") is a Chrome extension published by{" "}
              <strong className="text-foreground">Algorid</strong>, a software company based in Dhaka, Bangladesh.
            </p>
            <List
              items={[
                <>Website: <A href="https://algorid.com/">algorid.com</A></>,
                <>Email: <A href="mailto:contact@algorid.com">contact@algorid.com</A></>,
              ]}
            />

            <H2>2. What the extension does</H2>
            <List
              items={[
                "Takes full page or visible area screenshots, with an editor to crop and annotate them.",
                "Records a browser tab, a window or the entire screen, optionally with audio, microphone, a camera bubble and click highlights.",
              ]}
            />

            <H2>3. Data the extension handles</H2>
            <p className="mb-4">All processing happens locally in your browser.</p>
            <Table head={["Data", "Why", "Where it is kept"]} rows={dataRows} />

            <H2>4. What the extension never does</H2>
            <List
              items={[
                "It does not send any data to Algorid or to any server.",
                "It does not sell, rent or share data with third parties.",
                "It does not use data for advertising, profiling or creditworthiness purposes.",
                "It does not read passwords, cookies or login tokens.",
                "It does not load or run remote code.",
              ]}
            />

            <H2>5. Camera, microphone and screen sharing</H2>
            <List
              items={[
                <>Recording starts only after you click <strong className="text-foreground">Start recording</strong>.</>,
                "Window and screen sharing always goes through Chrome's own picker; tab recording shows Chrome's capture indicator.",
                "The microphone and camera are used only during a recording, only when you turned them on, and only after you allow them in Chrome.",
                "Recordings leave your device only if you download and share them yourself.",
              ]}
            />

            <H2>6. Permissions</H2>
            <Table head={["Permission", "Used for"]} rows={permissionRows} codeFirst />

            <H2>7. Data retention and deletion</H2>
            <List
              items={[
                "Only the latest screenshot and the latest recording are stored. Each new one replaces the previous one.",
                <>You can delete all extension data at any time by removing the extension from Chrome (<Code>chrome://extensions</Code>).</>,
              ]}
            />

            <H2>8. Children</H2>
            <p>The extension is a productivity tool and is not directed at children under 13.</p>

            <H2>9. Changes to this policy</H2>
            <p>If this policy changes, the updated version will be published on this page with a new effective date.</p>

            <H2>10. Contact</H2>
            <p>
              Questions about this policy: <A href="mailto:contact@algorid.com">contact@algorid.com</A>, or visit{" "}
              <A href="https://algorid.com/">algorid.com</A>.
            </p>

            <p className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground">
              Chrome is a trademark of Google LLC. Algorid Capture is not affiliated with Google.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AlgoridCapturePrivacy;
