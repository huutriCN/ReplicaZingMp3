module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
    [
      "next/babel",
      {
        "preset-env": {
          loose: false,
          modules: false,
        },
      },
    ],
  ],
};
