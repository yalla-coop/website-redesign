import styled from 'styled-components'

import { H3, XLP, CapsHeadingLarge, CapsHeadingMedium } from '../../elements'
import { colors, breakpoints, spacings, size, psize } from '../../../utils'

export const QuoteWrapper = styled.div`
  ${breakpoints.tabletVertical} {
    display: flex;
  }
`

export const H3Modifier = styled(H3)`
  font-size: ${size.sm};
  margin-bottom: ${spacings[4]};
  color: ${colors.black};

  ${breakpoints.mobileMedium} {
    font-size: ${size.md};
  }

  ${breakpoints.tabletVertical} {
    margin-bottom: ${spacings[5]};
  }

  ${breakpoints.laptopLarge} {
    font-size: ${size.lg};
  }
`

export const QuoteIcon = styled.div`
  font-size: 10rem;
  color: ${colors.accent};
  font-weight: 700;
  line-height: 2rem;

  margin: ${spacings[3]} 0;

  ${breakpoints.tabletVertical} {
    margin-right: ${spacings[5]};
  }
`

export const BodyWrapper = styled.div`
  /* transform: translateX(66px); */
`

export const XLPModifier = styled(XLP)`
  color: ${colors.gray3};
  margin-bottom: ${spacings[4]};

  p {
    margin-bottom: ${spacings[3]};
  }

  ${breakpoints.tabletVertical} {
    margin-bottom: ${spacings[5]};
  }

  ${breakpoints.laptopLarge} {
    margin-bottom: ${spacings[3]};
    padding-bottom: 0;
  }
`

export const CapsHeadingLargeModifier = styled(CapsHeadingLarge)`
  margin-top: ${spacings[3]};
  margin-bottom: ${spacings[2]};
  color: ${colors.black};
  font-size: ${size.xs};
`

export const CapsHeadingMediumModifier = styled(CapsHeadingMedium)`
  font-size: ${psize.s};
  letter-spacing: 0;
  font-weight: 400;
  color: ${colors.gray3};
`
