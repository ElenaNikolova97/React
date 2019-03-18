const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.js",

  output: {
    filename: "output.js",
    path: path.join(__dirname, "dist")
  },

  resolve: {
    extensions: [".js", ".ts", ".jsx"]
  },

  plugins: [new HtmlWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  watch: false
};
