import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { H2, CapsHeadingSmall, H1 } from '../components/elements'
import { TextContentWrapper } from '../components/contentWrapper'
import { ExtraLarge } from '../components/elements/Accent'
import {
  colors,
  breakpoints,
  spacings,
  letterSpacing,
  size,
  psize,
  lineHeight,
} from '../utils'

export const Header = styled.header`
  height: 100vh;
`

export const ImageBackground = styled(BackgroundImage)`
  background-image: url('/images/our-approach.png') no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TextWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CapsHeadingSmallModifier = styled(CapsHeadingSmall)`
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
`

export const PageTitle = styled(H2)`
  color: #fff;
  text-align: center;
  @media (max-width: 820px) {
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;
  }
`

export const ArrowImage = styled.img`
  position: absolute;

  ${breakpoints.mobileSmall} {
    bottom: ${spacings[5]};
  }

  ${breakpoints.laptopLarge} {
    bottom: ${spacings[9]};
  }
`

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  /* flex-grow: 1; */
`
export const TeamSection = styled.section`
  padding: 90px 15% 68px 25%;
  display: flex;
  justify-content: center;
  @media (max-width: 1375px) {
    padding: 90px 10% 68px 20%;
  }
  @media (max-width: 600px) {
    padding: 22px 24px;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & div {
    margin-right: 76px;
  }

  & div:nth-child(even) {
    margin-top: 76px;
    margin-right: 0;
  }
  @media (max-width: 1375px) {
    & div:first-child {
      margin-top: 0px;
      margin-right: 10px;
      color: green;
    }
    & div {
      margin-right: 10px;
      color: blue;
    }
    & div:nth-child(even) {
      margin-top: 30px;
      margin-right: 10px;
    }
  }
`

export const AccentContainer = styled.div`
  width: 20px;
  position: relative;
  display: black;
  @media (max-width: 600px) {
    display: none;
  }
`
export const AccentLarge = styled(ExtraLarge)``

export const AccentTitle = styled(H1)`
  transform: translate(-50px, -100px) rotate(-90deg);
  position: absoulte;
`
export const TitleMobile = styled.div`
  width: 100%;
  background: ${colors.lightGray};
  height: 70px;
  position: relative;
  margin-top: 32px;
  display: flex;
  align-items: center;
  @media (min-width: 600px) {
    display: none;
  }
`

// about section styles

export const AboutSection = styled(TextContentWrapper)`
  ${breakpoints.mobileSmall} {
    h2 {
      font-size: ${size.sm};
      letter-spacing: ${letterSpacing.small};
      line-height: ${lineHeight.xl};
      margin-bottom: ${spacings[4]};
      padding-right: ${spacings[2]};
    }
    p:not(:last-child) {
      padding-bottom: ${spacings[3]};
      padding-right: ${spacings[2]};
    }
    button {
      margin-left: 2.8rem;
      margin-top: ${spacings[3]};
      width: 20rem;
    }
  }
  ${breakpoints.tabletVertical} {
    h2 {
      font-size: ${size.md};
    }
  }

  ${breakpoints.laptopLarge} {
    padding-top: 16rem;

    h2 {
      font-size: 4rem;
      line-height: 4.8rem;
      margin-bottom: ${spacings[6]};
    }

    p {
      font-size: ${psize.xl};
      line-height: 3.6rem;
    }
  }
`
