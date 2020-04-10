import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { GlobalStyle } from '../../utils'
import Header from './Header'
import Footer from './Footer'

const PageContainer = styled.div``

const Layout = ({ children, noFooter }) => (
  <>
    <GlobalStyle />
    <Header />
    <PageContainer>{children}</PageContainer>
    {noFooter ? null : <Footer />}
  </>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  noFooter: PropTypes.bool.isRequired,
}

export default Layout
