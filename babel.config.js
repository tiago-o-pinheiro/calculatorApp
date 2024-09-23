module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@components': './src/presentation/components',
          '@hooks': './src/presentation/hooks',
          '@screen': './src/presentation/screen',
        },
      },
    ],
  ],
};
