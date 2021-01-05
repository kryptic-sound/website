import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import NavFooter from '../components/layout/NavFooter'
import Footer from '../components/layout/Footer'

import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'

const AboutPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div id="wrapper">
        <CssBaseline />
        <Typography>test</Typography>
        <NavFooter />
        <Footer />
      </div>
      <div id="bg"></div>
    </Layout>
  )
}

export default AboutPage

export const artistsQuery = graphql`
  query ArtistsMarkdown {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/artists/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 160)
          frontmatter {
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630, maxHeight: 700) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`