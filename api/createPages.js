const path = require('path')
const _ = require('lodash')
const {
  createOpenGraphImage,
} = require(`gatsby-plugin-dynamic-open-graph-images`)

const categoryPageTemplate = path.resolve('src/templates/category-page.tsx')
const postTemplate = path.resolve('src/templates/post/index.tsx')
const postOgImageTemplate = path.resolve('src/templates/og-image/post.tsx')

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const categoryInfo = await graphql(`
    {
      site {
        siteMetadata {
          categories {
            displayText
            name
            url
            description
            priority
            generatePage
          }
        }
      }
    }
  `)

  const categories = categoryInfo.data.site.siteMetadata.categories

  categories
    .filter((category) => category.generatePage)
    .forEach((category) => {
      reporter.info(`Createing category page - ${category.name}`)
      createPage({
        path: category.url,
        component: categoryPageTemplate,
        context: {
          categoryName: category.name,
          categoryDescription: category.description,
        },
      })
    })

  for (
    let index = 0, numOfCategories = categories.length;
    index < numOfCategories;
    index++
  ) {
    reporter.info(`Fetching posts under a category - ${categories[index].name}`)

    const result = await graphql(
      `
        query ($category: String!) {
          allMdx(
            filter: { frontmatter: { category: { eq: $category } } }
            sort: { fields: frontmatter___date, order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "MMM D, YYYY")
                  title
                  category
                  slug
                }
                internal {
                  contentFilePath
                }
              }
            }
          }
        }
      `,
      { category: categories[index].name }
    )

    if (result.errors) {
      reporter.panicOnBuild(
        `There was an error loading your posts`,
        result.errors
      )
      return
    }

    const posts = result.data.allMdx.edges

    if (posts.length > 0) {
      posts.forEach(({ node }) => {
        const category = node.frontmatter?.category
        const slug =
          `${category ? '/' + category : ''}` + `${node.frontmatter.slug || ''}`

        createPage({
          path: slug,
          component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
          context: {
            id: node.id,
            ogImage: createOpenGraphImage(createPage, {
              component: postOgImageTemplate,
              context: {
                id: node.id,
                date: node.frontmatter.date,
                title: node.frontmatter.title,
                subtitle: node.frontmatter.subtitle,
              },
            }),
          },
        })
      })
    }
  }
}
