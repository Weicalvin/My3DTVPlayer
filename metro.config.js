const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.resolver.extraNodeModules = {
  stream: require.resolve('stream-browserify'),
  net: require.resolve('net-browserify'),
  crypto: require.resolve('expo-crypto'),
};
module.exports = config;

