module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@pages': './src/pages',
          '@services': './src/services',
          '@src': './src',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
