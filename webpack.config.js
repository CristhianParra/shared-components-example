const entry = require("webpack-glob-entry");
const path = require("path");

console.log(entry("src/modules/**/*.public-api.js"));

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
          },
        },
      },
    ],
  },
  entry: entry("./src/modules/**/*.public-api.js"),
  output: {
    path: path.join(__dirname, "dist/bundles"),
    publicPath: "bundles",
    filename: "[name].umd.js",
    libraryTarget: "umd",
  },
};


[name].js
function(...params) {

}


[name].d.ts
8 overloadsa