import styled from 'styled-components'

import { H3, XLP, CapsHeadingLarge, CapsHeadingMedium } from '../../elements'
import { colors } from '../../../utils'

export const QuoteWrapper = styled.div`
  width: 80%;
`

export const H3Modifier = styled(H3)`
  color: ${colors.black};
  margin-bottom: 5rem; /* the space between it and the paragraph */
`

export const QuoteIcon = styled.span`
  font-size: 100px;
  color: ${colors.accent};
  font-weight: 700;

  /* and these spacings: */
  margin: 0 2rem 1.5rem 0;
`

export const HeadlineWrapper = styled.div`
  display: flex;
`

export const BodyWrapper = styled.div`
  transform: translateX(66px);
`

export const XLPModifier = styled(XLP)`
  color: ${colors.gray3};
  margin-bottom: 0.8rem;
`

export const CapsHeadingLargeModifier = styled(CapsHeadingLarge)`
  color: ${colors.black};
  margin-bottom: 0.5rem;
`

export const CapsHeadingMediumModifier = styled(CapsHeadingMedium)`
  color: ${colors.gray4};
`
