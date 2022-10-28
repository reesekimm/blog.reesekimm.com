// Ref: https://github.com/alessbell/gatsby-remark-twitter-cards/blob/main/src/index.js
const fs = require('fs')
const path = require('path')
const Jimp = require('jimp')
const twitterCard = require('wasm-twitter-card')

const WIDTH = 1200
const HEIGHT = 630

async function writeTextToCard(buffer) {
  return new Jimp({ data: buffer, width: WIDTH, height: HEIGHT })
}

async function generateBackground(background) {
  if (background.match(/[0-9A-Fa-f]{6}/g)) {
    return new Jimp(WIDTH, HEIGHT, background)
  }
  return Jimp.read(background)
}

function validateFontSize(fontSize, fieldName) {
  if (
    isNaN(fontSize) ||
    parseInt(Number(fontSize)) != fontSize ||
    isNaN(parseInt(fontSize, 10))
  ) {
    throw new Error(`Please pass an integer as ${fieldName}`)
  }
}

function hexToRgb(hex) {
  const hexCode = hex.replace(/^#/, '')
  const bigint = parseInt(hexCode, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return [r, g, b]
}

module.exports = module.onPostBuild = async (
  { graphql },
  {
    blogTitle = 'Reese.dev',
    author = '@reesekimm',
    background = require.resolve('../static/og-bg.png'),
    fontColor = '#ffffff',
    titleFontSize = 125,
    subtitleFontSize = 60,
    fontStyle = 'sans-serif',
    separator = '|',
    fontFile = require.resolve('../static/IBMPlexSansKR-Bold.ttf'),
  }
) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMdx.edges

  const ogImagePromises = posts.map(
    async ({
      node: {
        id,
        frontmatter: { title, slug },
      },
    }) => {
      const output = path.join('./public', slug, `og-image.png`)

      let formattedDetails = ''
      if (blogTitle || author) {
        formattedDetails =
          blogTitle && author
            ? `${blogTitle} ${separator} ${author}`
            : blogTitle || author
      }

      if (fontFile) {
        fontStyle = 'custom'
      }

      const fontToUint8Array = fontFile
        ? fs.readFileSync(require.resolve(fontFile), null)
        : new Uint8Array()

      const buffer = twitterCard.generate_text(
        title,
        formattedDetails,
        titleFontSize,
        subtitleFontSize,
        hexToRgb(fontColor),
        fontStyle,
        fontToUint8Array
      )

      try {
        const [base, text] = await Promise.all([
          generateBackground(background),
          writeTextToCard(buffer),
        ])

        const image = base.composite(text, 0, 0)

        try {
          await image.writeAsync(output)
          return console.log('Generated opengraph image at ', output)
        } catch (err) {
          return err
        }
      } catch (error) {
        return console.error(error)
      }
    }
  )

  await Promise.all(ogImagePromises)
}
