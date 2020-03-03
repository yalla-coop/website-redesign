import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { GlobalStyle } from '../../utils'
import Header from './Header'
import Footer from './Footer'

const PageContainer = styled.div``

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <PageContainer>{children}</PageContainer>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout