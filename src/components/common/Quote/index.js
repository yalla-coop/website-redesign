import React from 'react'
import PropTypes from 'prop-types'

import {
  QuoteWrapper,
  QuoteIcon,
  HeadlineWrapper,
  H3Modifier,
  BodyWrapper,
  XLPModifier,
  CapsHeadingLargeModifier,
  CapsHeadingMediumModifier,
} from './styles'

const index = ({ headline, children, person, position }) => (
  <QuoteWrapper>
    <HeadlineWrapper>
      <QuoteIcon>“</QuoteIcon>
      <H3Modifier>{headline}</H3Modifier>
    </HeadlineWrapper>
    <BodyWrapper>
      <XLPModifier>{children}</XLPModifier>
      <CapsHeadingLargeModifier w="500">{person}</CapsHeadingLargeModifier>
      <CapsHeadingMediumModifier w="700">{position}</CapsHeadingMediumModifier>
    </BodyWrapper>
  </QuoteWrapper>
)

index.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  headline: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default index
