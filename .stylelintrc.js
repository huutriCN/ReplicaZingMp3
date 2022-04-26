module.exports = {
  extends: [
    "stylelint-scss",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
  ],
  rules: {
    "unit-allowed-list": ["em", "rem", "px", "%", "fr"],
    "no-empty-source": null,
    "block-no-empty": null,
    "custom-property-no-missing-var-function": true,
    "max-line-length": 120,
    "color-hex-case": "lower",
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": "[a-z][a-zA-Z]+",
    "scss/selector-no-redundant-nesting-selector": true,
    "selector-class-pattern": [
      // Naming conventions-
      "^[a-z][a-zA-Z0-9]+$",
    ],
  },
};
