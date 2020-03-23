module.exports = {
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.(ts|html)$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!@clr/core|lit-element|lit-html|ramda)'],
  moduleNameMapper: {
    'base.element.css': '@clr/core/common/base/base.element.css.js',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageReporters: ['html']
};