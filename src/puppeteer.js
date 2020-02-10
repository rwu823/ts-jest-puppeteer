try {
  module.exports = require('puppeteer')
} catch(er) {
  module.exports = require('puppeteer-core')
}
