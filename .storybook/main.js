const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    // "../views/**/*.stories.@(js|jsx|ts|tsx)",
    // "../layouts/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // {
    //   name: "storybook-addon-next",
    //   options: {
    //     nextConfigPath: path.resolve(__dirname, "../next.config.js"),
    //   },
    // },
  ],
  // webpackFinal: async (config) => {
  //   return {
  //     ...config,
  //     module: { ...config.module, rules: custom.module.rules },
  //   };
  // },
};
