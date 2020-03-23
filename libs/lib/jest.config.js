module.exports = {
  name: 'lib',
  transformIgnorePatterns: ['node_modules/(?!@clr|lit-element|lit-html|ramda)'],
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

// const tsTransform = tsJest.createTransformer({
//   tsConfig: {
//     jsx: 'preserve',
//     module: 'ESNext',
//   },
//   babelConfig: {
//     plugins: [
//       '@lingui/babel-plugin-transform-react',
//       '@lingui/babel-plugin-transform-js',
//       '@babel/plugin-transform-react-jsx',
//       '@babel/plugin-transform-modules-commonjs',
//     ],
//   }
// })

// module.exports = {
//   transform: {
//     '^.+\\.js?$': 'babel-jest',
//     '^.+\\.(ts|html)$': 'ts-jest'
//   },
//   transformIgnorePatterns: ['node_modules/(?!@clr/core|lit-element|lit-html|ramda)'],
//   moduleNameMapper: {
//     'base.element.css': '@clr/core/common/base/base.element.css.js',
//   },
//   resolver: '@nrwl/jest/plugins/resolver',
//   moduleFileExtensions: ['ts', 'js', 'html'],
//   collectCoverage: true,
//   coverageReporters: ['html']
// };


// ...from...
// module.exports = {
//   transform: {
//     '^.+\\.js?$': 'babel-jest',
//     '^.+\\.(ts|html)$': 'ts-jest'
//   },
//   transformIgnorePatterns: ['node_modules/(?!@clr/core|lit-element|lit-html|ramda)'],
//   moduleNameMapper: {
//     'base.element.css': '@clr/core/common/base/base.element.css.js',
//   },
//   resolver: '@nrwl/jest/plugins/resolver',
//   moduleFileExtensions: ['ts', 'js', 'html'],
//   collectCoverage: true,
//   coverageReporters: ['html']
// };

