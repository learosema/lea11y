import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

import lightningCss from './plugins/lightning-css.js';

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(lightningCss);
  eleventyConfig.addPlugin(syntaxHighlight);
  // custom watch targets
  eleventyConfig.addWatchTarget('src/images');

  // passthrough copy
  eleventyConfig.addPassthroughCopy('src/images');  
  //eleventyConfig.addPassthroughCopy('src/styles');

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
