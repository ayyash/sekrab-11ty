// first get the dev config in
const devConfig = require('./.eleventy.js');

module.exports = function (eleventyConfig) {
  // pass everything from config, if any
  const config = devConfig(eleventyConfig);

  // set different output
  return {
    dir: {
      input: config.dir.input,
      output: 'dist',
    },
  };
};
