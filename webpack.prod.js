const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  entry: {
    main: path.join(__dirname, "src/app.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  optimization: {
    minimize: true,
  },
  cache: true,
});
