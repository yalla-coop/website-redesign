import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CapsHeadingMedium, H2 } from '../elements/typography'

const SubtitleContainer = styled.div``

const Subtitle = ({ title, size }) =>
  size === 'large' ? (
    <SubtitleContainer>
      <H2>{title}</H2>
    </SubtitleContainer>
  ) : (
    <SubtitleContainer>
      <CapsHeadingMedium>{title}</CapsHeadingMedium>
    </SubtitleContainer>
  )

Subtitle.defaultProps = {
  size: 'small',
}
Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default Subtitle
