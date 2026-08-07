const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Build mode
  mode: "development",

  // Entry file
  entry: "../WebPack/index.jsx",

  // Output file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },

  // Loaders
  module: {
    rules: [
      {
        // JSX & JS Loader
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        // CSS Loader
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Images Loader (Webpack 5)
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.jsx",
      title: "React Webpack Demo",
    }),
  ],

  // File Extensions
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // Development Server
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    hot: true,
  },
};