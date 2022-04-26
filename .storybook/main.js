module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.js",
    "../sections/**/*.stories.@(js|jsx|ts|tsx)",
    "../views/**/*.stories.js",
  ],
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
};
