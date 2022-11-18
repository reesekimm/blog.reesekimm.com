const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Reese.dev',
    description: `Reese's tech blog`,
    author: `reeesekimm`,
    titleTemplate: '%s | Reese.dev',
    image: `/og-bg-default.png`,
    siteUrl: 'https://blog.reesekimm.com',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-catch-links`,
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        mdxOptions: {
          remarkPlugins: [require(`remark-gfm`)],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: [],
              destinationDir: (f) => `images/${f.name}`,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blog.reesekimm.com`,
        short_name: `reesekimm`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#15db95`,
        display: `standalone`,
        icon: `./static/favicon-192x192.png`,
      },
    },
    `gatsby-plugin-dynamic-open-graph-images`,
  ],
}
