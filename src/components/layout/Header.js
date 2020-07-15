import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import logo from '../../images/ks_logo.png'


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img
        className="icon"
        src={logo}
        alt="Smiley face"
        height="36"
        width="55"
        style={{marginTop: 18}}
      />
    </div>
    <div className="content">
      <div className="inner">
        <h1 style={{ color: 'white' }}>Kryptic Sound</h1>
        <h4 style={{ color: 'white' }}>A collective for freethinkers</h4>
      </div>
    </div>
    <nav>
      <ul style={{ alignItems: 'center' }}>
        <li>
          <Link to="/team">
            <button
              style={{ fontWeight: 'bold'}}
            >
              Team
          </button>
          </Link>
        </li>
        <li>
          <button
            style={{ fontWeight: 'bold'}}
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <a href="https://kryptic-sound.myshopify.com">
            <button
              style={{ fontWeight: 'bold' }}
            >
              Merch
          </button>
          </a>
        </li>
        <li>
          <button
            style={{ fontWeight: 'bold'}}
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
