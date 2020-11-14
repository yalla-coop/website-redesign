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
    height: 60vh;
  }

  @media (min-width: 1280px) {
    height: 75vh;
  }

  @media (min-width: 1800px) {
    height: 80vh;
  }
`

export const LogoContainer = styled.div`
  width: 67%;

  position: absolute;
  top: 40%;
`

export const PhoneContainer = styled.div`
  position: absolute;
  right: 0;

  width: 30%;
  top: 30%;

  @media (min-width: 1024px) {
    top: 55%;
  }

  @media (min-width: 1280px) {
    top: 0%;
  }
`

export const TitleSection = styled(CaseStudies.Context)`
  margin-top: 3.2rem;
  margin-bottom: 5rem;

  ${breakpoints.tabletVertical} {
    margin: ${spacings[6]} 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`

export const IntroAndMetaSection = styled.div`
  ${breakpoints.tabletVertical} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`

export const MetaDataContainer = styled.div`
  background-color: ${colors.LightestGray};

  ${breakpoints.tabletVertical} {
    order: 2;
    width: 30%;
    padding: ${spacings[4]};
    background-color: ${colors.white};
  }
`

export const WhereItAllStartedSection = styled(
  CaseStudies.WhereItAllStartedSection,
)`
  margin: ${spacings[4]} 0;

  ${breakpoints.tabletVertical} {
    order: 1;
    width: 60%;
    padding-right: 0;
  }
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

  p {
    padding-bottom: 0;
  }
`
