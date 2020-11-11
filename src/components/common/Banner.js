import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Wrapper } from '../contentWrapper'
import { H3 } from '../elements'
import { breakpoints, colors, spacings, size } from '../../utils'

const Callout = styled(Wrapper)`
  background-color: black;
  ${breakpoints.mobileSmall} {
    background: linear-gradient(
      90deg,
      rgba(183, 21, 64, 1) 0%,
      rgba(199, 62, 70, 1) 100%
    );
    background: ${colors.secondary};

    h3 {
      color: ${colors.white};
      text-align: center;
      margin-top: ${spacings[3]};
      margin-bottom: ${spacings[3]};
    }
  }

  ${breakpoints.tabletVertical} {
    h3 {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  ${breakpoints.laptopLarge} {
    h3 {
      font-size: ${size.lg};
    }
  }
`

export const Banner = ({ children }) => (
  <Callout>
    <H3>{children}</H3>
  </Callout>
)

Banner.propTypes = {
  children: PropTypes.string.isRequired,
}
