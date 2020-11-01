import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import { WorkWrapper } from './styles'
import { CapsHeadingSmall, H4 } from '../../elements'

import Image from '../../image'

const WorkCard = ({ smallHeading, bigHeading, fileName, altText, link }) => (
  <WorkWrapper>
    <Link to={`/${link}`}>
      <Image
        fileName={fileName}
        altText={altText}
        style={{ width: '100%', height: 'auto' }}
      />
    </Link>
    <CapsHeadingSmall>{smallHeading}</CapsHeadingSmall>
    <H4>{bigHeading}</H4>
  </WorkWrapper>
)

WorkCard.propTypes = {
  bigHeading: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  smallHeading: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default WorkCard
