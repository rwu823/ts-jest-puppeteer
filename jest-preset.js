const pkg = require('./package.json')

module.exports = {
  preset: `ts-jest`,
  globalSetup: `${pkg.name}/src/setup.js`,
  globalTeardown: `${pkg.name}/src/teardown.js`,
  testEnvironment: `${pkg.name}/src/env.js`,
  setupFilesAfterEnv: [`expect-puppeteer`],
}
