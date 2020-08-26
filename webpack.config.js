const entry = require("webpack-glob-entry");
const path = require("path");

console.log(entry("src/modules/**/*.public-api.ts"));

module.exports = {
  entry: entry("./src/modules/**/*.public-api.ts"),
  output: {
    path: path.join(__dirname, "dist/bundles"),
    publicPath: "bundles",
    filename: "[name].umd.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
