module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "next",
    "plugin:react/recommended",
    "airbnb",
    "plugin:storybook/recommended",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      module: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["react", "jest", "prettier"],
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "linebreak-style": 0,
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": "error",
    "@next/next/no-img-element": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.stories.*",
          "**/.storybook/**/*.*",
          "**/webpack.*.js",
        ],
        peerDependencies: true,
      },
    ],
  },
};
