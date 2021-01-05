/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '../components/Link'
import Footer from '../components/layout/Footer'

// import Header from "./nav/header"
import './layout.css'

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: 16,
    color: 'white',
    marginRight: 13,
    textDecoration: 'none',
    boxShadow: 'none'
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className={classes.footer}>
          <Container maxWidth="sm" justifyContent="center">
            <Grid
              container
              spacing={4}
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Link className={classes.link} to="/">Home</Link>
              <Link className={classes.link} to="/mgmt">MGMT</Link>
              <Link className={classes.link} to="/about">Artists</Link>
              <a className={classes.link} href="https://kryptic-sound.myshopify.com/collections/all">Store</a>
              <Link className={classes.link} to="/contact">Contact</Link>
            </Grid>
          </Container>
        </footer>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
