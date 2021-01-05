import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '../Link'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
    // minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: 'transparent',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
  link: {
    fontSize: 16,
    color: 'white',
    marginRight: 13,
    textDecoration: 'none',
    boxShadow: 'none'
  }
}));

export default function NavFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container >
        <Grid
            container
            spacing={6}
            alignContent="center"
            alignItems="center"
            justify="center"
          >
          <Link className={classes.link} to="/mgmt">MGMT</Link>
          <Link className={classes.link} to="/artists">Artists</Link>
          <Link className={classes.link} to="/merch">Merch</Link>
          <Link className={classes.link} to="/">Home</Link>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}