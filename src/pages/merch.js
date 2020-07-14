import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Skus from '../components/Skus'
// import CartOverview from '../components/CartOverview'
import Header from '../components/AppBar'
import Footer from '../components/layout/Footer'
import NavFooter from '../components/layout/NavFooter'

import '@stripe/stripe-js';

const Merch = () => (
  <>
    <div id="wrapper">
      <CssBaseline />
      <Header />
      {/* <CartOverview /> */}
      <Skus />
      <NavFooter />
      <Footer />
    </div>
    <div id="bg"></div>
  </>
)

export default Merch
