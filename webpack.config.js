const path = require("path")

module.exports = {
  mode: "development",
  // devtool: "none", // optional to see what's going on inside the bundled file
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}