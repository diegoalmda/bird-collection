const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  "@components": path.resolve(__dirname, "src/components"),
  "@hooks": path.resolve(__dirname, "src/hooks"),
  "@styles": path.resolve(__dirname, "src/styles"),
};

config.watchFolders = [
  ...config.watchFolders,
  path.resolve(__dirname, "src/components"),
  path.resolve(__dirname, "src/hooks"),
  path.resolve(__dirname, "src/styles"),
];

module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
