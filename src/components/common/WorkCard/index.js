import PropTypes from 'prop-types'
import React from 'react'

import { WorkWrapper, TextWrapper } from './styles'
import { CapsHeadingSmall, H4 } from '../../elements'

import Image from '../../image'

const WorkCard = ({ smallHeading, bigHeading, fileName, altText }) => (
  <WorkWrapper>
    <Image fileName={fileName} altText={altText} style={{ height: '400px' }} />
    <TextWrapper>
      <CapsHeadingSmall>{smallHeading}</CapsHeadingSmall>
      <H4>{bigHeading}</H4>
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
