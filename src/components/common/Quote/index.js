import React from 'react'
import PropTypes from 'prop-types'

import {
  QuoteWrapper,
  QuoteIcon,
  H3Modifier,
  BodyWrapper,
  XLPModifier,
  CapsHeadingLargeModifier,
  CapsHeadingMediumModifier,
} from './styles'

const Quote = ({ headline, children, person, position }) => (
  <QuoteWrapper>
    <QuoteIcon>“</QuoteIcon>
    <div>
      <H3Modifier>{headline}</H3Modifier>
      <BodyWrapper>
        <XLPModifier>{children}</XLPModifier>
        <CapsHeadingLargeModifier w="500">{person}</CapsHeadingLargeModifier>
        <CapsHeadingMediumModifier w="700">
          {position}
        </CapsHeadingMediumModifier>
      </BodyWrapper>
    </div>
  </QuoteWrapper>
)

Quote.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  headline: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Quote
