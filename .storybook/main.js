const path = require("path");

module.exports = {
  stories: [
    "../views/**/*.stories.@(js|jsx|ts|tsx)",
    "../layouts/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-next",
      options: {
        nextConfigPath: path.resolve(__dirname, "../next.config.js"),
      },
    },
  ],
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: ["../public"],
};
