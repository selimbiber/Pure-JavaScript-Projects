const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "./dist/main.js",
    path: path.resolve(__dirname, "dist"),
  },
};  