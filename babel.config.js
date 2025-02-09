module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@components": "./components",
          "@assets": "./assets",
          "@screens": "./app/screens",
          "@constants": "./constants",
          "@store": "./store",
          "@hooks": "./hooks",
        },
      },
    ],
  ],
};
