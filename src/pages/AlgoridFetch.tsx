import { useEffect } from "react";
import { ArrowLeft, Check, Copy, Download, Puzzle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import fetchIcon from "@/assets/algorid-fetch-icon.png";
import screenshot from "@/assets/algorid-fetch-screenshot.png";

const FILES = "/algorid-fetch";
const DEB = "algorid-fetch_1.0.0_all.deb";
const EXE = "AlgoridFetch-Setup-1.0.0.exe";
const SOURCE = "algorid-fetch-1.0.0-source.tar.gz";
const APT_CMD = `sudo apt install ~/Downloads/${DEB}`;

// Paste the store links here once published; an empty link shows "Coming soon".
const CHROME_URL = "";
const FIREFOX_URL = "";

const features = [
  "Splits each file across up to 32 connections and keeps all of them busy until the end",
  "Resumes after a pause, a crash or a reboot",
  "Catches browser downloads, including ones that need you to be logged in",
  "Saves videos from sites that allow it, with a quality picker (1080p, 720p, audio only and more)",
  "Queue, speed limit, folders by file type and clipboard watch",
  "Works from the terminal too: algorid-fetch get URL",
];

const H2 = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <h2 className="flex items-center gap-3 font-display text-xl sm:text-2xl font-bold text-foreground mt-14 mb-5">
    <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-primary-foreground text-base flex items-center justify-center">
      {n}
    </span>
    {children}
  </h2>
);

const Card = ({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) => (
  <div className="glass-card rounded-2xl p-6 flex flex-col min-w-0">
    <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground mb-5">{sub}</p>
    {children}
  </div>
);

const Btn = ({ href, children, download }: { href: string; children: React.ReactNode; download?: boolean }) =>
  href ? (
    <a
      href={href}
      download={download || undefined}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-primary text-primary-foreground font-semibold hover-lift"
    >
      {children}
    </a>
  ) : (
    <span className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-dashed border-border text-muted-foreground font-semibold">
      Coming soon
    </span>
  );

const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">{children}</code>
);

const AlgoridFetch = () => {
  useEffect(() => {
    document.title = "Algorid Fetch | Fast, resumable downloads for Windows and Linux";
    const canonical = document.querySelector('link[rel="canonical"]');
    const prev = canonical?.getAttribute("href");
    canonical?.setAttribute("href", "https://algorid.com/algorid-fetch");
    return () => {
      if (prev) canonical?.setAttribute("href", prev);
    };
  }, []);

  const copyCmd = () =>
    navigator.clipboard
      .writeText(APT_CMD)
      .then(() => toast({ title: "Command copied" }))
      .catch(() => toast({ title: "Could not copy, select the command instead", variant: "destructive" }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 lg:pt-36 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Algorid
          </a>

          <header className="flex items-center gap-4 mb-6">
            <img src={fetchIcon} alt="Algorid Fetch icon" className="h-14 w-14 rounded-2xl" />
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Free · Windows and Linux</p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Algorid Fetch</h1>
            </div>
          </header>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            A fast, resumable download manager. It downloads each file over many connections at once, picks up
            where it left off after a pause or a reboot, and works with your browser through a small extension.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Btn href={`${FILES}/${EXE}`} download>
              <Download className="h-4 w-4" /> Download for Windows
            </Btn>
          </div>

          <img
            src={screenshot}
            alt="Algorid Fetch main window with three files downloading over 8 connections each"
            width={1180}
            height={640}
            className="w-full h-auto rounded-2xl border border-border shadow-lg"
          />

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-10">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </span>
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <section>
            <H2 n={1}>Install the desktop app</H2>
            <div className="grid md:grid-cols-2 gap-5">
              <Card title="Windows" sub="Windows 10 and 11, 64-bit · 25 MB">
                <Btn href={`${FILES}/${EXE}`} download>
                  <Download className="h-4 w-4" /> Download .exe
                </Btn>
                <p className="text-sm text-muted-foreground mt-4">
                  Run the setup. It takes about half a minute and needs no administrator rights. If Windows shows
                  "Windows protected your PC", click <strong className="text-foreground">More info</strong>, then{" "}
                  <strong className="text-foreground">Run anyway</strong>.
                </p>
              </Card>

              <Card title="Ubuntu and Debian" sub="Ubuntu 20.04+, Debian 11+, Linux Mint, Pop!_OS · 75 KB">
                <Btn href={`${FILES}/${DEB}`} download>
                  <Download className="h-4 w-4" /> Download .deb
                </Btn>
                <p className="text-sm text-muted-foreground mt-4 mb-2">
                  Then open a terminal (<strong className="text-foreground">Ctrl+Alt+T</strong>) and run:
                </p>
                <div className="flex gap-2">
                  <code className="flex-1 min-w-0 overflow-x-auto whitespace-nowrap rounded-lg bg-muted px-3 py-2 font-mono text-sm text-foreground">
                    {APT_CMD}
                  </code>
                  <button
                    type="button"
                    onClick={copyCmd}
                    aria-label="Copy install command"
                    className="flex-shrink-0 rounded-lg border border-border px-3 hover:border-primary/50"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Use <Code>apt</Code>, not <Code>dpkg -i</Code>, so everything the app needs is installed with it.
                </p>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Open source under the MIT license.{" "}
              <a href={`${FILES}/${SOURCE}`} download className="text-primary underline underline-offset-4">
                Download the source code
              </a>
              .
            </p>
          </section>

          <section>
            <H2 n={2}>Add the browser extension</H2>
            <div className="grid md:grid-cols-2 gap-5">
              <Card title="Chrome" sub="Also works in Brave, Edge, Vivaldi and Opera">
                <Btn href={CHROME_URL}>
                  <Puzzle className="h-4 w-4" /> Add to Chrome
                </Btn>
              </Card>
              <Card title="Firefox" sub="Including Ubuntu's default Firefox">
                <Btn href={FIREFOX_URL}>
                  <Puzzle className="h-4 w-4" /> Add to Firefox
                </Btn>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No pairing needed: the extension finds the app by itself. Installed the extension first? It opens a
              setup page and connects as soon as the app is installed.
            </p>
          </section>

          <section className="text-foreground/85 leading-relaxed">
            <H2 n={3}>Start downloading</H2>
            <ul className="list-disc pl-6 space-y-3 marker:text-primary">
              <li>
                <strong className="text-foreground">Download anything as usual.</strong> The extension hands the
                download to Algorid Fetch, with your login, and starts the app if it is closed.
              </li>
              <li>
                <strong className="text-foreground">Save a video:</strong> hover over or play it, click{" "}
                <strong className="text-foreground">Fetch video</strong> and pick a quality. The first time, the app
                offers to download the free video components it needs.
              </li>
              <li>
                <strong className="text-foreground">Right-click</strong> a link for{" "}
                <em>Fetch link with Algorid Fetch</em>, or a selection for <em>Fetch all links in selection</em>.
              </li>
              <li>
                <strong className="text-foreground">Copy a link</strong> to a file and the New download window
                opens.
              </li>
              <li>
                <strong className="text-foreground">From the terminal:</strong>{" "}
                <Code>algorid-fetch get URL -c 16 -o ~/Downloads</Code>. Press Ctrl+C to pause and run it again to
                resume.
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Using the Snap version of Chromium? Open the app first, then click{" "}
              <strong className="text-foreground">Allow</strong> once when the extension asks.
            </p>
          </section>

          <section className="text-foreground/85 leading-relaxed">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-14 mb-4">
              Privacy and responsible use
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Everything runs on your computer. The app only accepts requests from your own browser, never from websites.</li>
              <li>The extension gets access only after you click Allow in the app.</li>
              <li>Only download content you have the right to download. Algorid Fetch does not bypass DRM or copy protection.</li>
            </ul>
            <p className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground">
              Questions or problems:{" "}
              <a href="mailto:contact@algorid.com" className="text-primary underline underline-offset-4">
                contact@algorid.com
              </a>
              . Chrome is a trademark of Google LLC and Firefox is a trademark of the Mozilla Foundation. Algorid
              Fetch is not affiliated with either.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AlgoridFetch;
