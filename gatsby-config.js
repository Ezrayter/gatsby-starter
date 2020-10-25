module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-tsconfig-paths',
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json'],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('autoprefixer'), require('postcss-csso')],
      },
    },
  ],
};
