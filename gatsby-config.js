module.exports = {
  siteMetadata: {
    title: '<DevReese />',
    titleTemplate: '%s | DevReese',
    siteUrl: 'https://blog.reesekimm.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 852,
            },
          },
        ],
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['IBM+Plex+Sans+KR:300,500,700', 'Roboto+Mono:400,400i'],
        display: 'swap',
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
        icon: `./src/images/favicon-192x192.png`,
      },
    },
  ],
}
