// Post-build prerender: snapshots the built SPA into static HTML so crawlers
// (and social/link previews) get real content without executing JS.
// Runs automatically after `npm run build` via the "postbuild" script.
import { preview } from "vite";
import puppeteer from "puppeteer";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const PORT = 4173;
const ROUTES = ["/"]; // add more routes here as the site grows

const server = await preview({ preview: { port: PORT } });
const base = `http://localhost:${PORT}`;

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const route of ROUTES) {
  const page = await browser.newPage();
  await page.goto(base + route, { waitUntil: "networkidle0" });
  await page.waitForSelector("#root > *", { timeout: 15000 });
  const html = await page.content();
  const file = route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`;
  writeFileSync(resolve("dist", file), html);
  console.log("prerendered", route, "->", file);
  await page.close();
}

await browser.close();
await new Promise((res) => server.httpServer.close(res));
process.exit(0);
