import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { letterSpacing, colors, size } from '../../../utils'

const { blueCharcoal } = colors

export const H1 = styled.h1`
  font-size: ${size.xl};
  letter-spacing: ${letterSpacing.xs};
  white-space: nowrap;
  font-weight: 900;
`

export const H2 = styled.h2`
  font-size: ${size.lg};
  letter-spacing: ${letterSpacing.xs};
  font-weight: 700;
`

export const H3 = styled.h3`
  font-size: ${size.md};
  letter-spacing: ${letterSpacing.xxs};
  font-weight: 700;
`

export const H4 = styled.h4`
  font-size: ${size.s};
  letter-spacing: ${letterSpacing.xxs};
`

export const Link = styled(GatsbyLink)`
  font-size: ${size.xs};
  font-weight: bold;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: ${blueCharcoal};
  }
`

export const P = styled.p`
  font-size: ${({ s = size.s }) => s};
`
