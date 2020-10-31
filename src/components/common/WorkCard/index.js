import PropTypes from 'prop-types'
import React from 'react'

import { WorkWrapper } from './styles'
import { CapsHeadingSmall, H4 } from '../../elements'

import Image from '../../image'

const WorkCard = ({ smallHeading, bigHeading, fileName, altText }) => (
  <WorkWrapper>
    <Image
      fileName={fileName}
      altText={altText}
      style={{ width: '100%', height: 'auto' }}
    />
    <CapsHeadingSmall>{smallHeading}</CapsHeadingSmall>
    <H4>{bigHeading}</H4>
  </WorkWrapper>
)

WorkCard.propTypes = {
  bigHeading: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  smallHeading: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
}

export default WorkCard
