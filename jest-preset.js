module.exports = {
  preset: 'ts-jest',
  globalSetup: './src/setup.js',
  globalTeardown: './src/teardown.js',
  testEnvironment: './src/env.js',
  setupFilesAfterEnv: ['expect-puppeteer'],
}
