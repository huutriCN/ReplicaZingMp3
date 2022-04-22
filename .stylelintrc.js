module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  rules: {
    "unit-allowed-list": ["em", "rem", "px", "%"],
    "no-empty-source": null,
  },
};
