import PropTypes from 'prop-types'
import React from 'react'
import logo from '../../images/ks_logo.png'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img
        className="icon"
        src={logo}
        alt="Smiley face"
        height="36"
        width="55"
      />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Kryptic Sound</h1>
        <h4>A collective for freethinkers</h4>
      </div>
    </div>
    <nav>
      <ul style={{ alignItems: 'center' }}>
        <li>
          <Link to="/team">
          <button
            style={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2 }}
          >
            Team
          </button>
          </Link>
        </li>
        <li>
          <button
            style={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2 }}
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <Link to="/merch">
          <button
            style={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2 }}
          >
            Merch
          </button>
          </Link>
        </li>
        <li>
          <button
            style={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2 }}
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
