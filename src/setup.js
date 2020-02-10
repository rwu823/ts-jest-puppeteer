const path = require('path')
const puppeteer = require('./puppeteer')
const { PUPPETEER_LAUNCH_CONFIG } = process.env

const launchOption = PUPPETEER_LAUNCH_CONFIG
  ? require(path.join(process.cwd(), PUPPETEER_LAUNCH_CONFIG))
  : {}

module.exports = async () => {
  global.BROWSER_INSTANCE = await puppeteer.launch(launchOption)
}
