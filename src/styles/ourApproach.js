import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { H2, CapsHeadingSmall, CapsHeadingLarge } from '../components/elements'
import {
  psize,
  size,
  lineHeight,
  breakpoints,
  colors,
  spacings,
} from '../utils'

import { TextContentWrapper } from '../components/contentWrapper'
import { OurStorySection, Wrapper as LandingHeadingWrapper } from './landing'

export const Wrapper = styled.section`
  background: ${({ background }) => background};
`

export const HeadingWrapper = styled(LandingHeadingWrapper)`
  ${breakpoints.laptopLarge} {
    margin-top: 16vh;
  }
`

export const List = styled.ul`
  font-size: ${psize.m};
  line-height: ${lineHeight.l};
  font-weight: 400;
  list-style: none;
  li {
    ${({ color }) => color};
  }
`
// header style //

export const Li = styled.li`
  color: ${colors.gray3};

  ${breakpoints.laptopLarge} {
    font-size: ${psize.xl};
    line-height: 3.6rem;
  }
`

export const PageTitle = styled(H2)`
  color: #fff;
  text-align: center;
`

export const CapsHeadingSmallModifier = styled(CapsHeadingSmall)``

export const ImageBackground = styled(BackgroundImage)`
  position: relative;
  display: flex;
  flex-direction: column;

  ${breakpoints.mobileSmall} {
    background-image: url('/images/our-approach.png') no-repeat;
    background-size: cover;
    height: 85vh;
  }

  ${breakpoints.tabletVertical} {
    height: 50vh;
  }

  ${breakpoints.laptop} {
    height: 70vh;
  }

  ${breakpoints.laptopLarge} {
    height: 100vh;
  }
`

export const CapsHeadingLargeModifier = styled(CapsHeadingLarge)`
  color: ${colors.primary};
  margin-bottom: ${spacings[2]};
`

// introduction style //

export const Introduction = styled(OurStorySection)`
  ${breakpoints.mobileSmall} {
    span {
      color: ${colors.primary};
      font-weight: 600;
      font-size: ${psize.m};
    }
  }

  ${breakpoints.laptopLarge} {
    span {
      font-size: ${psize.xl};
    }
  }
`

// discovery section style //

export const HeadingWithAccent = styled.div`
  ${breakpoints.mobileSmall} {
    h2 {
      font-size: ${size.md};
      color: ${colors.primary};
    }
  }

  ${breakpoints.laptopLarge} {
    h2 {
      font-size: ${size.xl};
    }
  }
`

export const Section = styled(TextContentWrapper)`
  ${breakpoints.mobileSmall} {
    h2 {
      font-size: ${size.md};
      margin-top: ${spacings[3]};
      margin-bottom: ${spacings[5]};
    }

    h3 {
      font-size: ${size.xs};
      margin-bottom: ${spacings[3]};
    }
  }

  ${breakpoints.laptopLarge} {
    h2 {
      font-size: ${size.lg};
      margin-bottom: ${spacings[6]};
    }

    h3 {
      font-size: ${size.s};
    }
  }
`

export const DiscoveryImages = styled.div`
  ${breakpoints.mobileSmall} {
    img {
      width: 100vw;
      height: auto;
      margin-bottom: ${spacings[4]};
    }
  }
`

// design section style //

export const DesignSection = styled.section``

export const DesignContent = styled.div`
  ${breakpoints.laptopLarge} {
  }
`
export const HeadingWithAccentDesign = styled.div`
  ${breakpoints.mobileSmall} {
    h2 {
      color: ${colors.primary};
      font-size: ${size.md};
    }
  }

  ${breakpoints.laptopLarge} {
    h2 {
      font-size: ${size.xl};
    }
  }
`

export const WhatWeOffer = styled.div``

// digital development section style //

export const Images = styled.div`
  ${breakpoints.mobileSmall} {
    img {
      width: 100vw;
      height: auto;
    }
  }

  ${breakpoints.laptopLarge} {
    width: 100%;
  }
`

export const Description = styled.div`
  ${breakpoints.mobileSmall} {
    p {
      margin-bottom: ${spacings[6]};
    }
  }

  ${breakpoints.laptopLarge} {
    p {
      font-size: ${psize.xl};
      line-height: 3.6rem;
    }
  }
`
