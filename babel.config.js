module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      "production": {
        "plugins": ["ignite-ignore-reactotron"]
      }
    },
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            scenes: './src/scenes', 
            theme: './src/theme',
            utils: './src/utils',
            modules: './src/modules'
          },
        },
      ],
    ],
  };
};
