const fs = require('fs/promises')
const path = require('path')
const http = require('http')
const express = require('express')
const puppeteer = require('puppeteer')

const rootDir = `${path.resolve('./')}/public/og-image`

const size = {
  width: 1200,
  height: 630,
}

const getServingUrl = async () => {
  const app = express()

  app.get('/public/og-image/:id', async (req, res) => {
    const file = path.join(rootDir, `${req.params.id}`, 'index.html')
    res.sendFile(file)
  })

  const server = http.createServer(app)
  await server.listen(0)

  return `http://0.0.0.0:${server.address().port}`
}

const getComponentUrls = async () => {
  return await fs.readdir(rootDir)
}

exports.generateOgImages = async () => {
  const servingUrl = await getServingUrl()
  const componentPaths = await getComponentUrls()
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  for (const path of componentPaths) {
    await page.setViewport(size)
    await page.goto(`${servingUrl}/public/og-image/${path}`, {
      waitUntil: 'networkidle2',
    })
    await page.screenshot({
      path: `public/og-image/${path}/image.jpeg`,
      clip: { x: 0, y: 0, ...size },
      quality: 100,
    })
  }

  await browser.close()
}
