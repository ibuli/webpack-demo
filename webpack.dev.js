const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  // devtool: "none", // optional to see what's going on inside the bundled file
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
});
