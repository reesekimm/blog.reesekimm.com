const path = require('path')
const _ = require('lodash')

const postListTemplate = path.resolve('src/templates/postList/index.tsx')
const postTemplate = path.resolve('src/templates/post/index.tsx')
const tagTemplate = path.resolve('src/templates/tags/index.tsx')

const POSTS_PER_PAGE = 5

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
          edges {
            node {
              id
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                subtitle
                slug
                tags
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

  Array.from({ length: numOfPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: postListTemplate,
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        numOfPages,
        currentPage: i + 1,
      },
    })
  })

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    })
  })

  createPage({
    path: `/tags`,
    component: tagTemplate,
  })
}
