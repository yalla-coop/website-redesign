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
import { OurStorySection } from './landing'
import { ExtraLarge } from '../components/elements/Accent'
// import { Img } from '../components/image'

export const List = styled.ul`
  font-size: ${psize.m};
  line-height: ${lineHeight.l};
  font-weight: 400;
  list-style: none;
`
// header style //

export const PageTitle = styled(H2)`
  color: #fff;
  text-align: center;
`

export const CapsHeadingSmallModifier = styled(CapsHeadingSmall)`
  color: #fff;
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, 5%);
`

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

// export const Image = styled(Img)``

export const CapsHeadingLargeModifier = styled(CapsHeadingLarge)`
  color: ${colors.primary};

  ${breakpoints.laptopLarge} {
    width: 60%;
    font-size: 30px;
    line-height: 40px;
  }
`

export const AccentExtraLargeLeft = styled(ExtraLarge)`
  ${breakpoints.mobileSmall} {
    display: none;
  }
`

export const AccentExtraLargeRight = styled(AccentExtraLargeLeft)`
  ${breakpoints.laptopLarge} {
    transform: translate(-15rem, -30%);
  }
`

// introduction style //

export const Introduction = styled(OurStorySection)`
  ${breakpoints.mobileSmall} {
    span {
      color: ${colors.primary};
      font-weight: 700;
      font-size: ${psize.l};
      display: block;
      margin-top: ${spacings[3]};
      margin-bottom: ${spacings[3]};
    }
  }

  ${breakpoints.laptopLarge} {
    padding: 14rem 12.5rem 14rem;
    width: 70%;
    display: flex;

    h3 {
      margin-bottom: 4.5rem;
    }

    p {
      margin-bottom: 4rem;
    }

    span {
      display: inline-block;
      font-size: ${psize.xl};
    }
  }
`

// discovery section style //

export const DiscoverySection = styled.section`
  ${breakpoints.mobileSmall} {
    background: rgba(247, 247, 247, 0.7);
  }

  ${breakpoints.laptopLarge} {
    margin-top: 12rem;
  }
`

export const HeadingWithAccent = styled.div`
  ${breakpoints.mobileSmall} {
    h2 {
      font-size: ${size.md};
      color: ${colors.primary};
    }
  }

  ${breakpoints.laptopLarge} {
    display: flex;
    align-items: center;
    margin-left: -120px;

    h2 {
      font-size: 60px;
      transform: rotate(-90deg);
    }
  }
`

export const DiscoveryContent = styled.div`
  ${breakpoints.laptopLarge} {
    background: rgba(247, 247, 247, 0.7);
    display: flex;
    margin-right: 21.1rem;
    height: 550px;
  }
`

export const DiscoveryBlock = styled(TextContentWrapper)`
  ${breakpoints.mobileSmall} {
    h3 {
      margin-bottom: ${spacings[3]};
    }
  }

  ${breakpoints.laptopLarge} {
    padding: 0;
    flex: 2;
    margin: 8rem 0 11rem 0;
    width: 90%;

    div:not(:last-child) {
      margin-bottom: 4.8rem;
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

  ${breakpoints.laptopLarge} {
    display: flex;
    justify-content: flex-end;

    div {
      margin-left: 30px;
    }

    img {
      height: 440px;
      width: 580px;
    }
  }
`

// design section style //

export const DesignSection = styled.section`
  ${breakpoints.laptopLarge} {
    margin-top: 22rem;
  }
`
export const DesignContent = styled.div`
  ${breakpoints.laptopLarge} {
    background: rgba(247, 247, 247, 0.7);
    display: flex;
    flex-direction: row-reverse;
    margin-left: 21.1rem;
    height: 55rem;
  }
`
export const HeadingWithAccentDesign = styled.div`
  ${breakpoints.mobileSmall} {
    h2 {
      color: ${colors.primary};
      font-size: 30px;
    }
  }

  ${breakpoints.laptopLarge} {
    display: flex;
    align-items: center;
    transform: translateY(-5rem);

    h2 {
      font-size: 60px;
      margin-top: -12rem;
      margin-right: 10rem;
      transform: rotate(-90deg);
    }
  }
`

export const WhatWeOffer = styled.div`
  h3 {
    margin-bottom: ${spacings[1]};
  }
`

export const Headings = styled(TextContentWrapper)`
  padding-bottom: 0;

  ${breakpoints.laptopLarge} {
    padding-left: 200px;
    padding-right: 0;
  }
`

export const DesignBlock = styled(DiscoveryBlock)`
  ${breakpoints.laptopLarge} {
    padding: 0;
    flex: 2;
    margin: 8rem 0 11rem 0;
    padding: 0 10rem;

    div:not(:last-child) {
      margin-bottom: 4.8rem;
    }
  }
`

export const DesignImages = styled.div`
  ${breakpoints.laptopLarge} {
    margin-top: 22rem;
    display: flex;
    justify-content: flex-start;

    div {
      margin-right: ${spacings[5]};
    }

    img {
      height: 625px;
      width: 625px;
    }
  }
  }
`

// digital development section style //

export const DigitalSection = styled.section`
  ${breakpoints.laptopLarge} {
    margin-top: 28rem;
  }
`

export const DigitalImages = styled.div`
  ${breakpoints.mobileSmall} {
    img {
      width: 100vw;
      height: auto;
    }
  }

  ${breakpoints.laptopLarge} {
    margin: 22rem 0;
    display: flex;
    justify-content: flex-end;

    img {
      width: 750px;
      height: auto;
    }
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
      font-size: 24px;
      line-height: 36px;
      width: 60%;
      margin-bottom: 0;
    }
  }
`
