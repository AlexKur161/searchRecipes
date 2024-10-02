module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  // https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint
    // Needed to make the parser take into account 'vue' files
    extraFileExtensions: [".vue"],
    parser: require.resolve("@typescript-eslint/parser"),
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    "plugin:@typescript-eslint/recommended",

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    "plugin:vue/vue3-essential", // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    "prettier",
  ],
  env: {
    node: true,
  },
  plugins: [
    // required to apply rules which need type information
    "@typescript-eslint",

    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    "vue",
  ],

  // add your custom rules here
  rules: {
    // others rules...

    // TypeScript
    quotes: ["warn"],
    // this rule, if on, would require explicit return type on the `render` function
    "@typescript-eslint/explicit-function-return-type": "off",
    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-require-imports": "off",
  },
};
