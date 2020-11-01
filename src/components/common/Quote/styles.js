import styled from 'styled-components'

import { H3, XLP, CapsHeadingLarge, CapsHeadingMedium } from '../../elements'
import { colors, breakpoints, spacings, size, psize } from '../../../utils'

export const QuoteWrapper = styled.div`
  /* width: 80%; */
`

export const H3Modifier = styled(H3)`
  ${breakpoints.mobileSmall} {
    font-size: 24px;
    margin-bottom: ${spacings[4]};
  }

  color: ${colors.black};
  margin-bottom: 5rem; /* the space between it and the paragraph */
`

export const QuoteIcon = styled.div`
  font-size: 100px;
  color: ${colors.accent};
  font-weight: 700;
  line-height: 20px;

  /* and these spacings: */
  margin: 0 2rem 1.5rem 0;
`

export const HeadlineWrapper = styled.div`
  /* display: flex; */
`

export const BodyWrapper = styled.div`
  /* transform: translateX(66px); */
`

export const XLPModifier = styled(XLP)`
  color: ${colors.gray3};
  margin-bottom: 0.8rem;
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
