exports.onPostBuild = async ({ graphql }) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMdx.edges

  // puppeteer로 og image 생성
}
