import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          image
          siteUrl
          categories {
            displayText
            url
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
