/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

// gatsby-config.js

// METADATA TUTORIAL
// https://www.digitalocean.com/community/tutorials/how-to-boost-seo-using-gatsby-s-seo-component-and-gatsby-react-helmet

module.exports = {
  siteMetadata: {
    title: "Roland Yang",
    description: "Roland Yang's personal website and project portfolio!",
    author: "Roland Yang",
    copyright: "© 2023 Roland Yang",
    siteUrl: "https://rolandyang.dev",
    siteName: "Roland Yang"
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: false,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}