import React from 'react'
import styled from 'styled-components'
import { CapsHeadingMedium } from '../elements/typography/index'

const AlternateContainer = styled.div`
  padding: 50px 90px;
  background: rgba(247, 247, 247, 0.7);
`

const SubtitleAlternate = () => (
  <AlternateContainer>
    <CapsHeadingMedium> hi from SubtitleAlternate</CapsHeadingMedium>
  </AlternateContainer>
)

export default SubtitleAlternate
