/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `FUll-Stack Bootcamp`,
    author: 'Ademola Richard'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    'gatsby-transformer-remark' 
  ]
}
