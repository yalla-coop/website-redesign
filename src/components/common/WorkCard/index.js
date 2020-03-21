import PropTypes from 'prop-types'
import React from 'react'

import { css } from 'styled-components'
import { WorkWrapper, TextWrapper } from './styles'
import { CapsHeadingSmall, H4 } from '../../elements'

import Image from '../../image'

const WorkCard = ({ smallHeading, bigHeading, fileName, altText }) => (
  <WorkWrapper>
    <Image
      css={css`
        border-radius: 5px;
      `}
      fileName={fileName}
      altText={altText}
    />
    <TextWrapper>
      <CapsHeadingSmall
        css={css`
          margin-bottom: 0.9rem;
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
  </WorkWrapper>
)

WorkCard.propTypes = {
  bigHeading: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  smallHeading: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
}

export default WorkCard
