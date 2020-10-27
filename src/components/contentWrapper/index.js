import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { breakpoints, spacings } from '../../utils'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  ${breakpoints.mobileSmall} {
    padding: ${spacings[5]} ${spacings[4]};
  }

  ${breakpoints.mobileMedium} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  ${breakpoints.tablet} {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`

export const TextContentWrapper = styled(Wrapper)`
  h1,
  h2,
  h3,
  h4,
  p {
    padding-left: 2.8rem;
  }
`

const ContentWrapper = ({ children }) => <Wrapper>{children}</Wrapper>

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ContentWrapper
