import styled from 'styled-components'
import { breakpoints, spacings, colors } from '../utils'
import * as CaseStudies from './caseStudies'

export const BackgroundWithGradient = styled.div`
  position: relative;
  background: linear-gradient(90deg, #2c3192 -0.83%, #1c1f60 100%);
  height: 30vh;

  ${breakpoints.mobileMedium} {
    height: 35vh;
  }

  ${breakpoints.tabletVertical} {
    height: 40vh;
  }

  ${breakpoints.laptop} {
    height: 90vh;
  }

  ${breakpoints.laptopLarge} {
    height: 100vh;
  }
`

export const LogoContainer = styled.div`
  width: 67%;

  position: absolute;
  top: 40%;
`

export const PhoneContainer = styled.div`
  width: 40%;
  /* height: 30.84rem; */

  position: absolute;
  top: 15%;
  right: 0;

  ${breakpoints.laptop} {
    /* top: 10%; */

    /* width: 5; */
    /* height: 80rem; */
  }
`

export const TitleSection = styled(CaseStudies.Context)`
  margin-top: 3.2rem;
  margin-bottom: 5rem;
`

export const MetaDataContainer = styled.div`
  padding: ${spacings[4]};
  background-color: ${colors.LightestGray};
`

export const WhereItAllStartedSection = styled(
  CaseStudies.WhereItAllStartedSection,
)`
  margin: ${spacings[4]} 0;
`

export const ImagesWrapper = styled.div`
  display: flex;
`

export const WhereWeCameSection = styled(CaseStudies.WhereWeCameInSection)`
  margin-top: ${spacings[5]};
  background-color: ${colors.LightestGray};
`

export const WhatWeDeliveredSection = styled(
  CaseStudies.WhatWeDeliveredSection,
)`
  margin-top: ${spacings[5]};
`

export const QuoteSection = styled.section`
  margin: ${spacings[5]} 0;
`
