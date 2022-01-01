module.exports = {
  siteMetadata: {
    title: 'gatsby-starter-rk',
    titleTemplate: '%s | gatsby-starter-rk',
    siteUrl: 'https://gatsby-starter-rk.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
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
        fonts: ['Noto+Sans+KR:400,600,900', 'Roboto-Mono:400,400i'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-rk`,
        short_name: `gatsby-starter-rk`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#15db95`,
        display: `standalone`,
        icon: `./src/images/favicon-192x192.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + `/${edge.node.slug}`,
                  guid: site.siteMetadata.siteUrl + `/${edge.node.slug}`,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        date
                      }
                      slug
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "gatsby-starter-rk's RSS Feed",
          },
        ],
      },
    },
  ],
}
