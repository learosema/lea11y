import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

import lightningCss from './plugins/lightning-css.js';
import myFilters from './plugins/filters.js';

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(lightningCss);
  eleventyConfig.addPlugin(syntaxHighlight);
  // custom watch targets
  eleventyConfig.addWatchTarget('src/images');
  eleventyConfig.addWatchTarget('src/js');

  // passthrough copy
  eleventyConfig.addPassthroughCopy('src/images');  
  eleventyConfig.addPassthroughCopy('src/js');

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addFilter('split', (str, sep = '/') => {
    if (typeof str !== 'string') return [];
    return str.split(sep).filter(Boolean);
  });

  eleventyConfig.addFilter('find', (arr, prop, value) => {
    if (!Array.isArray(arr)) return null
    return arr.find(it => {
      const v = it?.[prop]
      return typeof v === 'string' && typeof value === 'string'
        ? v.toLowerCase() === value.toLowerCase()
        : v === value
    })
  })
  eleventyConfig.addPlugin(myFilters);

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
