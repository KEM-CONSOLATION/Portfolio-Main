import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, "../public/Assets");

/** @type {{ file: string; url: string; skip?: boolean; extraSettleMs?: number; waitForSelector?: string; readyHook?: string; skipScroll?: boolean; disableAnimations?: boolean }[]} */
const allProjects = [
  {
    file: "smhos-homecell.png",
    url: "https://www.crshomecell.online",
    skip: true,
  },
  {
    file: "chaad-energy.png",
    url: "https://www.chaadenergy.com",
    extraSettleMs: 2000,
  },
  {
    file: "chaad-engineering.png",
    url: "https://www.chaadengineering.com",
    extraSettleMs: 3000,
    readyHook: "chaad-engineering",
    skipScroll: true,
    disableAnimations: false,
  },
  { file: "borofuel.png", url: "https://borofuel.org" },
  {
    file: "asapdba.png",
    url: "https://asapdbaservices.com",
    extraSettleMs: 2000,
  },
  { file: "blunttribe.png", url: "https://blunttribe.com" },
  { file: "nexkro.png", url: "https://nexkro.com" },
  { file: "aerysyn.png", url: "https://aerysyn.com/" },
  {
    file: "playmagic.png",
    url: "https://playmagic.ng/enter-phone",
    extraSettleMs: 2000,
    readyHook: "playmagic",
    waitForSelector: "input, form, h1, [class*='phone']",
  },
  {
    file: "premium-classy-events.png",
    url: "https://premiumandclassy.netlify.app",
    extraSettleMs: 2000,
  },
  { file: "workandshop.png", url: "https://workandshopapp.com", skip: true },
  {
    file: "umpirewave.png",
    url: "https://umpirewave.com",
    extraSettleMs: 2000,
  },
  { file: "troohq.png", url: "https://troohq.com" },
  {
    file: "growth-groups.png",
    url: "https://dc-calabar.netlify.app",
    extraSettleMs: 2000,
  },
  {
    file: "ecomarinegroup.png",
    url: "https://site.ecomarinegroup.com",
    extraSettleMs: 3000,
  },
  {
    file: "kurenode.png",
    url: "https://qproxim.netlify.app",
    extraSettleMs: 5000,
    waitForSelector: "h1, [class*='hero'], main",
  },
];

const onlyArg = process.argv.find((a) => a.startsWith("--only="));
const projects = onlyArg
  ? allProjects.filter((p) =>
      onlyArg
        .slice("--only=".length)
        .split(",")
        .includes(p.file.replace(".png", ""))
    )
  : allProjects;

const viewport = { width: 1400, height: 900 };
const BASE_SETTLE_MS = 4000;

async function dismissCommonOverlays(page) {
  const selectors = [
    'button:has-text("Accept All")',
    'button:has-text("Accept")',
    'button:has-text("Reject All")',
    'button:has-text("I Agree")',
    'button:has-text("Got it")',
    '[aria-label="Close"]',
    '[aria-label="close"]',
  ];
  for (const selector of selectors) {
    try {
      const btn = page.locator(selector).first();
      if (await btn.isVisible({ timeout: 800 })) {
        await btn.click({ timeout: 2000 });
        await page.waitForTimeout(600);
      }
    } catch {
      /* ignore */
    }
  }
}

const readyHooks = {
  async "chaad-engineering"(page) {
    await page.waitForFunction(
      () => {
        const heroImg = document.querySelector(
          'img[src*="cloudinary"], img[src*="res.cloudinary"], section img.object-cover, main img'
        );
        return (
          heroImg instanceof HTMLImageElement &&
          heroImg.complete &&
          heroImg.naturalWidth > 200
        );
      },
      { timeout: 60000 }
    );

    await page.waitForFunction(
      () =>
        /Engineering the Future|Precision Built|Industry/i.test(
          document.body.innerText
        ),
      { timeout: 30000 }
    );

    await page.waitForFunction(
      () => {
        const text = document.body.innerText;
        return /7\+/.test(text) && (/150\+/.test(text) || /12/.test(text));
      },
      { timeout: 25000 }
    );

    await page.waitForTimeout(2500);
  },

  async playmagic(page) {
    await page.waitForFunction(
      () => !/loading magic games/i.test(document.body.innerText),
      { timeout: 60000 }
    );
    await page.waitForFunction(
      () => {
        const hasForm =
          document.querySelector("input") ||
          document.querySelector("form") ||
          document.querySelector("button");
        const hasLogo = document.querySelector("img");
        return Boolean(hasForm && hasLogo);
      },
      { timeout: 30000 }
    );
    await page.waitForTimeout(2000);
  },
};

/** Wait until fonts, images, and lazy content have had time to render. */
async function waitForPageSettled(page, extraSettleMs = 0, skipScroll = false) {
  await page.waitForLoadState("domcontentloaded", { timeout: 60000 });

  try {
    await page.waitForLoadState("networkidle", { timeout: 25000 });
  } catch {
    // Long-polling / analytics — continue after load
  }

  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    const images = Array.from(document.images);
    await Promise.all(
      images.map((img) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
          setTimeout(resolve, 8000);
        });
      })
    );
  });

  if (!skipScroll) {
    await page.evaluate(async () => {
      const step = Math.max(window.innerHeight * 0.8, 400);
      const max = Math.min(document.body.scrollHeight, step * 3);
      for (let y = 0; y < max; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 350));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
  }

  // Second network idle pass after lazy load
  try {
    await page.waitForLoadState("networkidle", { timeout: 15000 });
  } catch {
    /* ignore */
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(BASE_SETTLE_MS + extraSettleMs);
}

async function capture() {
  await mkdir(assetsDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 2,
    locale: "en-US",
  });
  const page = await context.newPage();

  const results = [];

  for (const project of projects) {
    if (project.skip) {
      results.push({
        file: project.file,
        status: "skipped",
        reason: "auth-only or unreachable domain",
      });
      continue;
    }

    const outPath = path.join(assetsDir, project.file);
    try {
      console.log(`\nCapturing ${project.file}`);
      console.log(`  → ${project.url}`);

      await page.goto(project.url, {
        waitUntil: "commit",
        timeout: 90000,
      });

      if (project.waitForSelector) {
        await page.waitForSelector(project.waitForSelector, {
          timeout: 30000,
          state: "visible",
        });
      }

      await waitForPageSettled(
        page,
        project.extraSettleMs ?? 0,
        project.skipScroll ?? false
      );

      if (project.readyHook && readyHooks[project.readyHook]) {
        await readyHooks[project.readyHook](page);
      }

      await dismissCommonOverlays(page);
      await page.waitForTimeout(1000);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);

      await page.screenshot({
        path: outPath,
        fullPage: false,
        animations: project.disableAnimations === false ? "allow" : "disabled",
      });

      results.push({ file: project.file, status: "ok" });
      console.log(`  ✓ saved`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      results.push({ file: project.file, status: "failed", error: message });
      console.error(`  ✗ ${message}`);
    }
  }

  await browser.close();

  console.log("\n--- Summary ---");
  for (const r of results) {
    console.log(
      `${r.status.padEnd(8)} ${r.file}${r.error ? ` — ${r.error}` : r.reason ? ` — ${r.reason}` : ""}`
    );
  }
}

capture();
