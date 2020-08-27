const path = require("path");
const publicApi = require("./public-api.json");

module.exports = {
  entry: publicApi,
  output: {
    path: path.join(__dirname, "ui/bundles"),
    filename: "[name].umd.js",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
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
};
