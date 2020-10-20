import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { breakpoints } from '../../utils'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
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

const ContentWrapper = ({ children, fullWidth, direction, justifyContent }) => (
  <Wrapper
    fullWidth={fullWidth}
    direction={direction}
    justifyContent={justifyContent}
  >
    {children}
  </Wrapper>
)

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  fullWidth: PropTypes.bool,
  direction: PropTypes.string,
  justifyContent: PropTypes.string,
}

ContentWrapper.defaultProps = {
  fullWidth: false,
  direction: 'column',
  justifyContent: 'flex-start',
}

export default ContentWrapper
