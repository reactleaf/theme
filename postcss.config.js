const postcssOklabFunction = require("@csstools/postcss-oklab-function")

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [postcssOklabFunction],
}

module.exports = config
