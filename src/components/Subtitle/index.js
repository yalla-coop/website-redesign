import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ExtraSmall as Accent } from '../elements/Accent'

import { CapsHeadingMedium } from '../elements/typography'

const SubtitleContainer = styled.div`
  box-sizing: border-box;
  margin-top: 30px;
  position: relative;
  padding: 50px 90px;
  background: rgba(247, 247, 247, 0.7);
`
const AccentContainer = styled.div`
  position: absolute;
  top: -21px;
  left: 60px;
`
const Subtitle = ({ title }) => (
  <SubtitleContainer>
    <CapsHeadingMedium> {title}</CapsHeadingMedium>
    <AccentContainer>
      <Accent />
    </AccentContainer>
  </SubtitleContainer>
)
Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Subtitle
