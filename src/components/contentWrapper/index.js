import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { breakpoints } from '../../utils'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  ${breakpoints.mobileSmall} {
    width: ${({ fullWidth }) => (fullWidth ? '100vw' : 'calc(100vw - 48px)')};
  }

  ${breakpoints.mobileMedium} {
    width: ${({ fullWidth }) => (fullWidth ? '100vw' : 'calc(100vw - 40px)')};
  }

  ${breakpoints.tablet} {
    width: ${({ fullWidth }) => (fullWidth ? '100vw' : 'calc(100vw - 80px)')};
  }
`

const ContentWrapper = ({ children, fullWidth }) => (
  <Wrapper fullWidth={fullWidth}>{children}</Wrapper>
)

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  fullWidth: PropTypes.bool,
}

ContentWrapper.defaultProps = {
  fullWidth: false,
}

export default ContentWrapper
