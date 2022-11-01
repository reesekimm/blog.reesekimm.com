const { generateOgImages } = require('./src/ogImageGenerator')

exports.onPostBuild = async () => {
  await generateOgImages()
}
