const path = require('path')
const postTemplate = path.resolve(`./src/templates/post.tsx`)

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
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data.allMdx.edges
  const numOfPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  Array.from({ length: numOfPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? '/' : `${i + 1}`,
      component: path.resolve('./src/templates/postList.tsx'),
      context: {
        limit: POSTS_PER_PAGE,
        numOfPages,
        currentPage: i + 1,
      },
    })
  })

  posts.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    })
  })
}
