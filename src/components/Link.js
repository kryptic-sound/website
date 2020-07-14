import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    boxShadow: 'none'
  },
}))


const Link = React.forwardRef(function Link(props, ref) {
  const classes = useStyles()
  return <MuiLink className={classes.link} component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;