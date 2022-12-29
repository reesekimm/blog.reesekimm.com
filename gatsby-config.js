module.exports = {
  siteMetadata: {
    title: `Reese.dev`,
    description: `Reese's tech blog`,
    author: `reeesekimm`,
    titleTemplate: `%s | Reese.dev`,
    image: `/og-bg-default.png`,
    siteUrl: `https://blog.reesekimm.com`,
    categories: [
      {
        name: `home`,
        url: `/`,
        displayText: `홈`,
        priority: 0,
        generatePage: false,
      },
      {
        name: `til`,
        url: `/til`,
        displayText: `TIL`,
        description: `Today I Learned`,
        priority: 1,
        generatePage: true,
      },
      {
        name: `dev`,
        url: `/dev`,
        displayText: `개발`,
        description: `개발과 기술에 대해 기록합니다`,
        priority: 2,
        generatePage: true,
      },
      {
        name: `reading`,
        url: `/reading`,
        displayText: `독서`,
        description: `책을 읽고 드는 생각을 기록합니다`,
        priority: 3,
        generatePage: true,
      },
      {
        name: `essay`,
        url: `/essay`,
        displayText: `기록`,
        description: `경험과 생각을 기록합니다`,
        priority: 4,
        generatePage: true,
      },
    ],
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
        name: `content`,
        path: `${__dirname}/content/`,
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
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [`/__og-image/*`],
      },
    },
  ],
}
