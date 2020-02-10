<h1 align="center">
  <img width="200" src="./public/logo.png"/>
  <p>rwu823/ts-jest-puppeteer</p>
  <a href="https://circleci.com/gh/USER/rwu823/ts-jest-puppeteer" alt="Build Status">
    <img src="https://img.shields.io/circleci/build/github/USER/rwu823/ts-jest-puppeteer/master?style=for-the-badge&logo=circleci" />
  </a>
</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/rwu823/ts-jest-puppeteer">
    <img src="https://img.shields.io/npm/v/rwu823/ts-jest-puppeteer?style=for-the-badge&logo=npm"/>
  </a>
</p>

## Installation

~~~sh
yarn add -D ts-jest-puppeteer
~~~


## Usage

~~~js
// jest.config.js

module.exports = {
  preset: 'ts-jest-puppeteer'
}
~~~


## Launch Options
You can custom your puppeteer [launch option](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteerlaunchoptions) thro `PUPPETEER_LAUNCH_CONFIG` env.


~~~js
// puppeteer-launch.js
module.export = {
  // launch options
}
~~~

~~~sh
$ PUPPETEER_LAUNCH_CONFIG=puppeteer-launch.js jest
~~~