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

  ${breakpoints.tabletVertical} {
    padding: 6rem;
  }

  ${breakpoints.laptop} {
    padding-left: 20rem;
    padding-right: 20rem;
  }

  ${breakpoints.laptopLarge} {
    padding-left: 32rem;
    padding-right: 32rem;
    padding-top: ${spacings[9]};
    padding-bottom: ${spacings[9]};
  }

  ${breakpoints.desktop} {
    padding-left: 65rem;
    padding-right: 65rem;
  }
`

export const TextContentWrapper = styled(Wrapper)`
  h1,
  h2,
  h3,
  h4,
  p,
  li {
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
