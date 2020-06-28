const path = require("path");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [
            path.join(__dirname, "node_modules"),
            path.join(__dirname, "assets"),
          ], // exclude more files

          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        templateParameters: (compilation, assets, assetTags, options) => {
          console.log({ compilation, assets, assetTags, options });
          return {
            compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              tags: assetTags,
              files: assets,
              options,
            },
            title: "GAME_NAME",
            assets_path: path.resolve("/src"),
          };
        },
        template: "index.ejs",
      }),
    ],
    resolve: {
      alias: {
        phaser: path.resolve(__dirname, "assets/libs/phaser/phaser.min.js"),
        app: path.resolve(__dirname, "src/app.js"),
      },
      extensions: ["*", ".js"],
    },
  };
};
