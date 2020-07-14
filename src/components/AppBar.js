import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'

import PropTypes from 'prop-types'

import { useShoppingCart } from 'use-shopping-cart'

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    flexDirection: 'right'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'transparent'
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const { redirectToCheckout, clearCart, cartCount } = useShoppingCart()
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Grid container >
          <Toolbar className={classes.root}>
            <Typography variant="h6" className={classes.title}>
              Creating a lot of weird things
            </Typography>
            <IconButton
              aria-label="display cart value"
              color="inherit"
              onClick={() => {
                redirectToCheckout()
              }}
              // edge="end"
            >
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              a
            </Typography>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={clearCart}

            >
              <RemoveShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
