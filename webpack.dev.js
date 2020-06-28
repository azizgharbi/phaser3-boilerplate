const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  entry: {
    app: "./src/app.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    watchContentBase: true,
    hot: true,
    port: 5000,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "src"),
  },
});
