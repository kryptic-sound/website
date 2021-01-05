import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ChevronIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton'

import Footer from '../components/layout/Footer'
import NavFooter from '../components/layout/NavFooter'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
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

export default function MgmtPage({ data }) {
  const classes = useStyles()
  return (
    <Layout>
      <div id="wrapper">
        <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={6}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Grid item key={node} xs={12} sm={6} md={4}>
                <CardActionArea component="a" className={classes.card}>
                  <Link
                    to={`${node.fields.slug}`}
                    style={{ textDecoration: `none` }}
                  >
                    <Card className={classes.card}>
                      <Img
                        sizes={
                          node.frontmatter.featuredImage.childImageSharp.sizes
                        }
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography
                          variant="h4"
                          component="h2"
                          className={classes.cardTitle}
                        >
                          {node.frontmatter.title}
                        </Typography>
                        <div className={classes.root}>
                          <Grid container spacing={3}>
                            <Grid item xs={8} sm={9}>
                              <Typography>
                                <Typography style={{ marginTop: 8 }}>
                                  {node.frontmatter.description}
                                </Typography>
                              </Typography>
                            </Grid>
                            <Grid item xs={3}>
                              <IconButton>
                                <ChevronIcon className={classes.iconColor} />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Container>
        <NavFooter />
        <Footer />
      </div>
      <div id="bg"></div>
    </Layout>
  )
}

export const teamQuery = graphql`
  query AllMarkdown {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/bios/" } }
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
