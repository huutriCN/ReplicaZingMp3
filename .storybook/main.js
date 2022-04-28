const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../components/**/*.stories.js", "../views/**/*.stories.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
