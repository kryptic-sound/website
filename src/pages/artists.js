import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import NavFooter from '../components/layout/NavFooter'
import Footer from '../components/layout/Footer'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import SpotifyPlayer from 'react-spotify-player';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '75%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

export default function ArtistsPage({ data }) {
  const classes = useStyles()
  console.log(data)
  return (
    <Layout>
      <div id="wrapper">
        <CssBaseline />

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item sm={6} md={9}>
              <SpotifyPlayer
                uri="spotify:album:6MAyH6seu3XcLU48vkRGXj?si=xArO2HJJQLeMFUpC1ScUpg"
                size={size}
                view={view}
                theme={theme}
              />
            </Grid>
            <Grid item sm={6} md={9}>
              <SpotifyPlayer
                uri="spotify:album:6LAH3lTK8Gftq4yFAIo9Ih?si=9aHoNdd5SIeNnDiPowA3sg"
                size={size}
                view={view}
                theme={theme}
              />
            </Grid>
          </Grid>
        </Container>

        <NavFooter />
        <Footer />
      </div>
      <div id="bg"></div>
    </Layout>
  )
}

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