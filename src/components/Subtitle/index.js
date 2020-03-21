import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ExtraSmall, Small } from '../elements/Accent'

import { CapsHeadingMedium, H2 } from '../elements/typography'

const SubtitleContainer = styled.div`
  box-sizing: border-box;
  margin-top: 30px;
  position: relative;
  background: transparent;
  padding-left: 3.5rem;
  width: 100%;
`
const AccentContainer = styled.div`
  position: absolute;
  top: -3rem;
  left: 0px;
`
const Subtitle = ({ title, size }) =>
  size === 'large' ? (
    <SubtitleContainer>
      <H2> {title}</H2>
      <AccentContainer>
        <Small />
      </AccentContainer>
    </SubtitleContainer>
  ) : (
    <SubtitleContainer>
      <CapsHeadingMedium> {title}</CapsHeadingMedium>
      <AccentContainer>
        <ExtraSmall />
      </AccentContainer>
    </SubtitleContainer>
  )
Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

export default Subtitle
