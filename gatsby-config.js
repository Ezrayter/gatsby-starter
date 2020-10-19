/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('autoprefixer'), require('postcss-csso')],
      },
    },
  ],
};
