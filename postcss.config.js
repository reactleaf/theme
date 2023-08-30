const postcssLabFunction = require("postcss-lab-function")

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [postcssLabFunction],
}

module.exports = config
