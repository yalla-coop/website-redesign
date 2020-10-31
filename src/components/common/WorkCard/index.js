import PropTypes from 'prop-types'
import React, { useRef } from 'react'

import { css } from 'styled-components'
import { WorkWrapper, TextWrapper } from './styles'
import { CapsHeadingSmall, H4 } from '../../elements'

import Image from '../../image'

const WorkCard = ({
  smallHeading,
  bigHeading,
  fileName,
  altText,
  topDestance,
  cardNumber,
}) => {
  const ref = useRef()
  let light = 0
  switch (cardNumber) {
    case 1:
      light = topDestance > 2794
      break
    case 2:
      light = topDestance > 3115
      break
    case 3:
      light = topDestance > 3426
      break
    case 4:
      light = topDestance > 3730
      break
    default:
      break
  }
  return (
    <WorkWrapper ref={ref} light={light}>
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
}

WorkCard.propTypes = {
  bigHeading: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  smallHeading: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  cardNumber: PropTypes.number.isRequired,
  topDestance: PropTypes.number.isRequired,
}

export default WorkCard
