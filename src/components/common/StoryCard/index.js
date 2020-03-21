import PropTypes from 'prop-types'
import React from 'react'

import { css } from 'styled-components'
import { StoryCardWrapper, TextWrapper } from './styles'
import { CapsHeadingSmall, H4 } from '../../elements'
import { colors } from '../../../utils'

import Image from '../../image'

const StoryCard = ({ smallHeading, bigHeading, fileName, altText }) => (
  <StoryCardWrapper>
    <Image fileName={fileName} altText={altText} />
    <TextWrapper>
      <CapsHeadingSmall
        css={css`
          margin-bottom: 1.3rem;
          color: ${colors.gray3};
        `}
      >
        {smallHeading}
      </CapsHeadingSmall>
      <H4
        css={css`
          margin: 0;
        `}
      >
        {bigHeading}
      </H4>
    </TextWrapper>
  </StoryCardWrapper>
)

StoryCard.propTypes = {
  bigHeading: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  smallHeading: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
}

export default StoryCard
