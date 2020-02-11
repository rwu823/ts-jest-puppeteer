const path = require('path')
const puppeteer = require('./puppeteer')
const { PUPPETEER_LAUNCH_CONFIG = 'puppeteer-launch.js' } = process.env

let launchOption = {}
try {
  launchOption = require(path.join(process.cwd(), PUPPETEER_LAUNCH_CONFIG))
} finally {
  //
}

module.exports = async () => {
  global.BROWSER_INSTANCE = await puppeteer.launch(launchOption)
}
