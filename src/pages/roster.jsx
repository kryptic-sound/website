import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import SpotifyPlayer from 'react-spotify-player';

import Footer from '../components/atoms/Copyright'
import NavFooter from '../components/layout/NavFooter'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '95.25%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  cardTitle: {
    color: 'black',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    flexGrow: 1,
  },
  iconColor: {
    color: 'black',
  },
}))

const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

export default function RosterPage({ data }) {
  const classes = useStyles()
  return (
    <>
      <div id="wrapper">
        <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={8}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Grid item key={node} xs={12} sm={6} md={6}>

                <Card className={classes.card}>
                  <CardActionArea component="a">
                    <Link
                      to={`${node.fields.slug}`}
                      style={{ textDecoration: `none` }}
                    >
                      <Img
                        sizes={
                          node.frontmatter.featuredImage.childImageSharp.sizes
                        }
                      />
                    </Link>
                  </CardActionArea>
                  <CardContent className={classes.cardContent}>
                    <SpotifyPlayer
                      uri={node.frontmatter.uri}
                      size={size}
                      view={view}
                      theme={theme}
                    />

                  </CardContent>
                </Card>

              </Grid>
            ))}
          </Grid>
        </Container>
        <NavFooter />
        <Footer />
      </div>
      <div id="bg"></div>
    </>
  )
}

export const mgmtQuery = graphql`
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
            uri
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630, maxHeight: 580) {
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
