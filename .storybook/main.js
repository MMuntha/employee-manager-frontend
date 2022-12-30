module.exports = {
  stories: [
    // "../src/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
    "addon-redux",
  ],

  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};

// "stories": [
//   "../src/**/*.stories.mdx",
//   "../src/**/*.stories.@(js|jsx|ts|tsx)"
// ],
