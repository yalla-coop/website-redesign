import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { CapsHeadingMedium } from '../elements'
import { spacings } from '../../utils'

// TODO: use spacings, sizes and breakpoints from the theme/utils

export const CardWarapper = styled.div`
  width: 336px;
  @media (max-width: 600px) {
    width: 272px;
  }
`

export const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 386px;
  width: 100%;
  position: relative;
  margin-top: 0;
  @media (max-width: 600px) {
    width: 312px;
  }
`

export const Name = styled(CapsHeadingMedium)`
  padding-left: 13px;
  font-family: Karu;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  margin-top: ${spacings[3]};
`

export const Descrip = styled(CapsHeadingMedium)`
  padding-left: 13px;
  font-family: Karu;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #e0e0e0;
`
