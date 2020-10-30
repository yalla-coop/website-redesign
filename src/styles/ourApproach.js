import styled from 'styled-components'
import { H2, CapsHeadingSmall } from '../components/elements'
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

export const List = styled.ul`
  font-size: ${psize.l};
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

// strategy section style //

export const StrategySection = styled.section`
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
      transform: rotate(-90deg);
    }
  }
`

export const StartagyContnet = styled.div`
  ${breakpoints.laptopLarge} {
    background: rgba(247, 247, 247, 0.7);
    display: flex;
    margin-right: 21.1rem;
    height: 550px;
  }
`
export const StrategyBlock = styled(TextContentWrapper)`
  ${breakpoints.mobileSmall} {
    h3 {
      margin-bottom: ${spacings[3]};
    }
  }

  ${breakpoints.laptopLarge} {
    flex: 2;
    margin: 8rem 0 11rem 0;
    div:not(:last-child) {
      margin-bottom: 4.8rem;
    }
  }
`
export const StartagyImages = styled.div`
  ${breakpoints.mobileSmall} {
    img {
      width: 100vw;
      height: auto;
      margin-bottom: ${spacings[4]};
    }
  }

  ${breakpoints.laptopLarge} {
    margin-top: 22rem;
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
`

export const DesignBlock = styled(StrategyBlock)`
  ${breakpoints.laptopLarge} {
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
`
