import fs from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

async function capture() {
  const outDir = path.resolve('screenshots')
  await ensureDir(outDir)

  const browser = await puppeteer.launch({ headless: 'new' })

  const url = process.env.APP_URL || 'http://localhost:5173/'

  // Desktop viewport
  {
    const page = await browser.newPage()
    await page.setViewport({ width: 1440, height: 900 })
    await page.goto(url, { waitUntil: 'networkidle0' })
    const hero = await page.$('#hero')
    if (hero) await hero.screenshot({ path: path.join(outDir, 'hero.png') })
    const sections = ['about', 'capabilities', 'metrics', 'contact']
    for (const id of sections) {
      const el = await page.$(`#${id}`)
      if (el) await el.screenshot({ path: path.join(outDir, `${id}.png`) })
    }
    await page.close()
  }

  // Mobile viewport (iPhone-ish)
  {
    const page = await browser.newPage()
    await page.setViewport({ width: 375, height: 812, isMobile: true, deviceScaleFactor: 2 })
    await page.goto(url, { waitUntil: 'networkidle0' })
    const hero = await page.$('#hero')
    if (hero) await hero.screenshot({ path: path.join(outDir, 'mobile-hero.png') })
    await page.close()
  }

  // Full page capture
  {
    const page = await browser.newPage()
    await page.setViewport({ width: 1440, height: 900 })
    await page.goto(url, { waitUntil: 'networkidle0' })
    await page.screenshot({ path: path.join(outDir, 'fullpage.png'), fullPage: true })
    await page.close()
  }

  await browser.close()
  console.log('Screenshots saved to', outDir)
}

capture().catch((err) => {
  console.error(err)
  process.exit(1)
})