const path = require("path");

const SRC_PATH = path.join(__dirname, "../src");
const STORIES_PATH = path.join(__dirname, "../stories");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: { configFileName: "./tsconfig.json" }
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });
  config.resolve.alias = {
    src: path.resolve(__dirname, "../src")
  };
  config.resolve.extensions.push(
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".css",
    ".png",
    ".jpg",
    ".gif",
    ".jpeg"
  );
  return config;
};
