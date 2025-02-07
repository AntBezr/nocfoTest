module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@components": "./app/components",
          "@assets": "./app/assets",
          "@screens": "./app/screens",
          "@constants": "./app/constants",
          "@store": "./app/store",
        },
      },
    ],
  ],
};
