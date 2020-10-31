import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { letterSpacing, colors, size, psize, lineHeight } from '../../../utils'

const { primary, gray2 } = colors

export const H1 = styled.h1`
  font-size: ${size.xl};
  letter-spacing: ${letterSpacing.medium};
  white-space: nowrap;
  font-weight: 800;
  color: ${({ color }) => color};
`

export const H2 = styled.h2`
  font-size: ${size.lg};
  letter-spacing: ${letterSpacing.medium};
  font-weight: 700;
  color: ${({ color }) => color};
`

export const H3 = styled.h3`
  font-size: ${size.md};
  letter-spacing: ${letterSpacing.small};
  font-weight: 700;
  color: ${({ color }) => color};
`

export const H4 = styled.h4`
  font-size: ${size.xs};
  letter-spacing: ${letterSpacing.small};
  font-weight: 700;
  color: ${({ color }) => color};
`

export const CapsHeadingLarge = styled.h1`
  font-size: ${size.s};
  letter-spacing: ${letterSpacing.large};
  font-weight: ${({ w = 700 }) => w};
  text-transform: uppercase;
  color: ${({ color }) => color};
`

export const CapsHeadingMedium = styled.h2`
  font-size: ${size.xs};
  letter-spacing: ${letterSpacing.medium};
  text-transform: uppercase;
  color: ${({ color = gray2 }) => color};
`

export const CapsHeadingSmall = styled.h3`
  font-size: ${size.xxs};
  letter-spacing: ${({ l = letterSpacing.medium }) => l};
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ color }) => color};
`

// Paragraphs
// naming: {Bold}?{Size}P, examples: XLP: x-large paragraph

export const XLP = styled.p`
  font-size: ${psize.xl};
  line-height: ${lineHeight.xl};
  font-weight: 400;
  letter-spacing: 0.03em;
  color: ${({ color }) => color};
`

export const LP = styled.p`
  font-size: ${psize.l};
  line-height: ${lineHeight.l};
  font-weight: 400;
  letter-spacing: 0.03em;
  color: ${({ color }) => color};
`

export const MP = styled.p`
  font-size: ${psize.m};
  line-height: ${lineHeight.m};
  font-weight: 400;
  letter-spacing: 0.03em;
  color: ${({ color }) => color};
`

export const BoldMP = styled.p`
  font-size: ${psize.m};
  line-height: ${lineHeight.l};
  font-weight: 700;
  letter-spacing: 0.03em;
  color: ${({ color }) => color};
`

export const SP = styled.p`
  font-size: ${psize.s};
  line-height: ${lineHeight.s};
  font-weight: 300;
  letter-spacing: 0.03em;
  color: ${({ color }) => color};
`

export const BoldXSP = styled.p`
  font-size: ${psize.xs};
  line-height: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: ${({ color }) => color};
`

export const XSP = styled.p`
  font-size: ${psize.xs};
  line-height: 1.8rem;
  font-weight: 300;
  letter-spacing: 0.03em;
  color: ${({ color }) => color};
`

export const Link = styled(GatsbyLink)`
  font-size: ${size.xxs};
  font-weight: 400;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: ${primary};
  }
`
