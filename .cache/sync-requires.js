const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-wkocjan-gatsby-theme-intro-src-pages-404-js": hot(preferDefault(require("D:\\gatsby-project\\akhilh2o\\node_modules\\@wkocjan\\gatsby-theme-intro\\src\\pages\\404.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\gatsby-project\\akhilh2o\\src\\pages\\404.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("D:\\gatsby-project\\akhilh2o\\src\\templates\\index.js")))
}

