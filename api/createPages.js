const path = require('path')
const _ = require('lodash')
const {
  createOpenGraphImage,
} = require(`../plugins/gatsby-plugin-my-opengraph`)

const postListTemplate = path.resolve('src/templates/postList/index.tsx')
const postTemplate = path.resolve('src/templates/post/index.tsx')
const postOgImageTemplate = path.resolve('src/templates/og-image/post.tsx')

const POSTS_PER_PAGE = 5

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
              date(formatString: "MMMM D, YYYY")
              title
              subtitle
            }
            internal {
              contentFilePath
            }
          }
        }
        group(field: frontmatter___tags) {
          edges {
            node {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create post pagination
  const posts = result.data.allMdx.edges
  const numOfPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  Array.from({ length: numOfPages }).forEach(() => {
    createPage({
      path: '/',
      component: postListTemplate,
    })
  })

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    })

    createOpenGraphImage(createPage, {
      path: `/og-image/${node.id}`,
      component: postOgImageTemplate,
      context: {
        id: node.id,
        date: node.frontmatter.date,
        title: node.frontmatter.title,
        subtitle: node.frontmatter.subtitle,
      },
    })
  })
}
