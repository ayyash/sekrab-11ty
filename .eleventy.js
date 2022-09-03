module.exports = function (eleventyConfig) {
  // pass through your assets
  eleventyConfig.addPassthroughCopy('src/assets');

  return {
    dir: {
      input: 'src',
      // output: "_site" // default
    },
  };
};
