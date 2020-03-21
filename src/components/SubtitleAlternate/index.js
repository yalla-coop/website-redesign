import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ExtraSmall as Accent } from '../elements/Accent'

import { CapsHeadingMedium, MP } from '../elements/typography/index'

const AlternateContainer = styled.div`
  box-sizing: border-box;
  margin-top: 30px;
  position: relative;
  padding: 50px 90px;
  background: rgba(247, 247, 247, 0.7);
`

const PragraphContainer = styled.div`
  width: 90%;
`
const AccentContainer = styled.div`
  position: absolute;
  top: -21px;
  left: 60px;
`
const SubtitleAlternate = ({ title, content }) => (
  <AlternateContainer>
    <CapsHeadingMedium> {title}</CapsHeadingMedium>
    <PragraphContainer>
      <MP>{content}</MP>
    </PragraphContainer>
    <AccentContainer>
      <Accent />
    </AccentContainer>
  </AlternateContainer>
)
SubtitleAlternate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default SubtitleAlternate
