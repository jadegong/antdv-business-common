/*
 * @Descripttion:
 * @version:
 * @Author: ljx
 * @Date: 2021-07-13 09:49:55
 * @LastEditors: ljx
 * @LastEditTime: 2021-07-13 11:10:07
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/standard'],
  rules: {
    'standard/object-curly-even-spacing': 0,
    'space-before-function-paren': 0,
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 5,
        multiline: {
          max: 1,
        }
      }
    ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/no-unused-vars': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'vue/no-v-model-argument': 0,
    'vue/html-indent': 0,
    'vue/mustache-interpolation-spacing': 0,
    'vue/no-mutating-props':  0,
    'no-tabs': 0,
    'no-eval': 0,
    'no-unreachable': 0,
    'no-unused-vars': 0,
    'no-useless-catch': 0,
    'no-multiple-empty-lines': 0,
    'no-useless-escape': 0,
    'comma-spacing': 0,
    'brace-style': 0,
    'no-prototype-builtins': 0,
    'quote-props': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [
      'off',
      // 'never',
      // {
        // beforeStatementContinuationChars: 'never'
      // }
    ],
    'no-delete-var': 2,
    'prefer-const': [
      0,
      {
        ignoreReadBeforeAssign: false
      }
    ],
    'template-curly-spacing': 'off',
    indent: ['off', 4],
      'comma-dangle': ['off'],
      'no-trailing-spaces': ['off'],
      'object-curly-spacing': ['off'],
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
