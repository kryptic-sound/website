import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout/layout"

class BioPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <article>
          <header>
            <h1
              style={{
                marginTop: 20,
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
          </header>
          <section style={{ fontSize: 16 }} dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: 10,
            }}
          />
          <footer></footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BioPostTemplate

export const pageQuery = graphql`
  query BioPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
