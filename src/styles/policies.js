import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { size, breakpoints, colors, spacings } from '../utils'

import { TextContentWrapper } from '../components/contentWrapper'
import { Wrapper as LandingHeadingWrapper } from './landing'

export const Wrapper = styled.section`
  background: ${({ background }) => background};
`

export const HeadingWrapper = styled(LandingHeadingWrapper)`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const P = styled.p`
  color: ${colors.black};
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  margin-bottom: 54px;
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

  @media (min-width: 1280px) {
    height: 100vh;
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

export const EmailLink = styled.a`
  color: ${colors.black};
`
export const StyledLink = styled.a`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
  line-height: 39px;
  padding-left: 28px;
`
export const Heading = styled.p`
  color: ${colors.black};
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 39px;
  line-height: 39px;
`
