import React from "react"
import { MenuItem } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ButtonAppBarCollapse from "./ButtonAppBarCollapse"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
}))

function AppBarCollapse() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse>
        <MenuItem>
          <Link
            data-testid="about-link"
            to="/horses"
            style={{
              color: `#212121`,
              display: `inline-block`,
              float: `right`,
              lineHeight: `35px`,
              textDecoration: `none`,
              marginRight: 20,
              fontSize: 18,
            }}
          >
            Horses
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            data-testid="about-link"
            to="/horses"
            style={{
              color: `#212121`,
              display: `inline-block`,
              float: `right`,
              lineHeight: `35px`,
              textDecoration: `none`,
              marginRight: 20,
              fontSize: 18,
            }}
          >
            Goats
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            data-testid="about-link"
            to="/teams"
            style={{
              color: `#212121`,
              display: `inline-block`,
              float: `right`,
              lineHeight: `35px`,
              textDecoration: `none`,
              marginRight: 20,
              fontSize: 18,
            }}
          >
            Teams
          </Link>
        </MenuItem>
      </ButtonAppBarCollapse>
      <div className={classes.buttonBar} id="appbar-collapse">
        <Link
          data-testid="about-link"
          to="/horses"
          style={{
            color: `#212121`,
            display: `inline-block`,
            float: `right`,
            lineHeight: `35px`,
            textDecoration: `none`,
            marginRight: 20,
            fontSize: 18,
          }}
        >
          Horses
        </Link>
        <Link
          data-testid="about-link"
          to="/teams"
          style={{
            color: `#212121`,
            display: `inline-block`,
            float: `right`,
            lineHeight: `35px`,
            textDecoration: `none`,
            marginRight: 20,
            fontSize: 18,
          }}
        >
          Teams
        </Link>
        <Link
          data-testid="about-link"
          to="/about"
          style={{
            color: `#212121`,
            display: `inline-block`,
            float: `right`,
            lineHeight: `35px`,
            textDecoration: `none`,
            marginRight: 15,
            fontSize: 18,
          }}
        >
          About
        </Link>
      </div>
    </div>
  )
}

export default AppBarCollapse
