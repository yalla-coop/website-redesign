import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { letterSpacing, colors, size, psize } from '../../../utils'

const { blueCharcoal, mineShaft } = colors

export const H1 = styled.h1`
  font-size: ${size.xl};
  letter-spacing: ${letterSpacing.medium};
  white-space: nowrap;
  font-weight: 800;
`

export const H2 = styled.h2`
  font-size: ${size.lg};
  letter-spacing: ${letterSpacing.medium};
  font-weight: 700;
`

export const H3 = styled.h3`
  font-size: ${size.md};
  letter-spacing: ${letterSpacing.small};
  font-weight: 700;
`

export const H4 = styled.h4`
  font-size: ${size.xs};
  letter-spacing: ${letterSpacing.small};
  font-weight: 700;
`

export const CapsHeadingLarge = styled.h1`
  font-size: ${size.s};
  letter-spacing: ${letterSpacing.huge};
  white-space: nowrap;
  font-weight: ${({ w = 700 }) => w};
  text-transform: uppercase;
`

export const CapsHeadingMedium = styled.h2`
  font-size: ${size.xs};
  letter-spacing: ${letterSpacing.medium};
  white-space: nowrap;
  text-transform: uppercase;
  color: ${mineShaft};
`

export const CapsHeadingSmall = styled.h3`
  font-size: ${size.xxs};
  letter-spacing: ${({ l = letterSpacing.medium }) => l};
  white-space: nowrap;
  font-weight: 500;
  text-transform: uppercase;
`

// Paragraphs

export const XLP = styled.p`
  font-size: ${psize.xl};
  line-height: 3.3rem;
  font-weight: 400;
`

export const LP = styled.p`
  font-size: ${psize.l};
  line-height: 3rem;
  font-weight: 400;
`

export const MP = styled.p`
  font-size: ${psize.m};
  line-height: 2.7rem;
  font-weight: 400;
`

export const BoldMP = styled.p`
  font-size: ${psize.m};
  line-height: 3rem;
  font-weight: 700;
`

export const SP = styled.p`
  font-size: ${psize.s};
  line-height: 2.1rem;
  font-weight: 300;
`

export const BoldXSP = styled.p`
  font-size: ${psize.xs};
  line-height: 1.8rem;
  font-weight: 700;
`

export const XSP = styled.p`
  font-size: ${psize.xs};
  line-height: 1.8rem;
  font-weight: 300;
`

export const P = styled.p`
  font-size: ${({ s = size.s }) => s};
  font-weight: 400;
`

export const Link = styled(GatsbyLink)`
  font-size: ${size.xxs};
  font-weight: 400;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: ${blueCharcoal};
  }
`
