import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  CapsHeadingSmall,
  CapsHeadingMedium,
  CapsHeadingLarge,
} from '../components/elements'
import {
  colors,
  breakpoints,
  spacings,
  letterSpacing,
  size,
  psize,
  lineHeight,
} from '../utils'
import {
  Wrapper as ContentWrapper,
  TextContentWrapper,
} from '../components/contentWrapper'

export const Dev = styled.div`
  height: 5px;

  ${breakpoints.mobileSmall} {
    background: cyan;
  }

  ${breakpoints.mobileMedium} {
    background: orange;
  }

  ${breakpoints.mobileLarge} {
    background: blueviolet;
  }

  ${breakpoints.tabletVertical} {
    background: pink;
  }

  ${breakpoints.laptop} {
    background: red;
  }

  ${breakpoints.laptopLarge} {
    background: green;
  }

  ${breakpoints.desktop} {
    background: brown;
  }
`

export const ImageBackgroundWithGradient = styled(BackgroundImage)`
  position: relative;
  display: flex;
  flex-direction: column;

  ${breakpoints.mobileSmall} {
    background-image: url('/images/landing-image.png') no-repeat;
    background-size: cover;
    opacity: 1 !important;
    background: rgba(3, 24, 47, 0.8);
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

export const H1Modifier = styled.h1`
  color: #fff;
  margin: 0;

  ${breakpoints.mobileSmall} {
    text-align: center;
    font-size: ${size.sm};
    line-height: ${spacings[5]};
    letter-spacing: ${letterSpacing.small};
    padding: 0 ${spacings[2]};
  }

  ${breakpoints.mobileMedium} {
    font-size: ${size.md};
    line-height: 4rem;
  }

  ${breakpoints.laptopLarge} {
    font-size: ${size.lg};
    line-height: 6.4rem;
  }
`

export const CapsHeadingSmallModifier = styled(CapsHeadingSmall)`
  color: #fff;

  ${breakpoints.mobileSmall} {
    text-align: center;
    padding-bottom: ${spacings[3]};
  }

  ${breakpoints.laptopLarge} {
    font-size: ${psize.r};
    padding-bottom: ${spacings[5]};
  }
`

export const Wrapper = styled(ContentWrapper)`
  ${breakpoints.mobileMedium} {
    margin-top: 20vh;
  }
  ${breakpoints.tabletVertical} {
    margin-top: 6vh;
  }
`

export const TextWrapper = styled(ContentWrapper)`
  padding-bottom: 0;

  ${breakpoints.tabletVertical} {
    background: rgba(196, 196, 196, 0.15);
    width: 80%;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    padding: 1.5rem 0;
  }
`

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
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

export const OurStorySection = styled(TextContentWrapper)`
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
    padding-bottom: 16rem;

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

export const TextSection = styled.div`
  margin-bottom: 4rem;
`

export const Main = styled.div`
  height: 65vh;
  position: relative;
`
export const OurApproachSection = styled(TextContentWrapper)`
  position: relative;
  background: rgba(247, 247, 247, 0.7);

  ${breakpoints.mobileSmall} {
    h2 {
      color: ${colors.primary};
      font-size: ${size.md};
    }
  }
`

export const OurApproachBackground = styled.div`
  ${breakpoints.tabletVertical} {
    background: #f7f7f7;
    height: 90%;
    width: 90%;
    position: absolute;
    top: 21rem;
    left: 0;
    z-index: -10;
  }
`

export const OurApproachWrapper = styled.div`
  ${breakpoints.tabletVertical} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`

export const OurApproachHeadings = styled.div`
  ${breakpoints.laptopLarge} {
    h2 {
      font-size: ${size.lg};
    }
  }
`

export const HeadingWithAccent = styled.div``

export const LearnMoreBlock = styled.div`
  ${breakpoints.mobileSmall} {
    margin-top: ${spacings[6]};

    h3 {
      color: ${colors.primary};
      font-size: ${size.sm};
      margin-bottom: ${spacings[3]};
    }
    button {
      margin-left: 2.8rem;
      margin-bottom: ${spacings[3]};
      width: 20rem;
    }
  }
  ${breakpoints.tabletVertical} {
    align-self: flex-end;
    width: 30rem;
    margin-right: ${spacings[7]};

    h3 {
      font-size: ${size.md};
    }
  }

  ${breakpoints.laptopLarge} {
    width: 60rem;

    h3 {
      font-size: ${size.lg};
    }
  }
`
export const ServicesBlock = styled.div`
  ${breakpoints.mobileSmall} {
    margin-top: ${spacings[5]};
    margin-bottom: ${spacings[3]};
  }

  ${breakpoints.tabletVertical} {
  }
`

export const Service = styled.div`
  ${breakpoints.mobileSmall} {
    :not(:last-child) {
      margin-bottom: ${spacings[5]};
    }

    h3 {
      margin-bottom: ${spacings[1]};
    }
  }
  ${breakpoints.laptopLarge} {
    :not(:last-child) {
      margin-bottom: ${spacings[6]};
    }

    h3 {
      font-size: ${size.sm};
      margin-bottom: ${spacings[2]};
    }

    p {
      font-size: ${psize.l};
      line-height: 3rem;
    }
  }
`

export const Callout = styled(ContentWrapper)`
  ${breakpoints.mobileSmall} {
    background: ${colors.secondary};
    background: linear-gradient(
      90deg,
      rgba(183, 21, 64, 1) 0%,
      rgba(199, 62, 70, 1) 100%
    );

    h3 {
      color: ${colors.white};
      text-align: center;
      margin-top: ${spacings[3]};
      margin-bottom: ${spacings[3]};
    }
  }

  ${breakpoints.tabletVertical} {
    h3 {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  ${breakpoints.laptopLarge} {
    h3 {
      font-size: ${size.lg};
    }
  }
`

export const WorkSection = styled(TextContentWrapper)`
  background: ${colors.primary};

  ${breakpoints.mobileSmall} {
    padding-top: ${spacings[6]};
    padding-bottom: ${spacings[3]};

    h2 {
      color: ${colors.white};
      font-size: ${size.md};
      margin-bottom: ${spacings[5]};
    }
  }

  ${breakpoints.tabletVertical} {
    padding-top: ${spacings[7]};
    padding-bottom: ${spacings[7]};
  }

  ${breakpoints.laptopLarge} {
    padding-top: ${spacings[9]};
    padding-bottom: ${spacings[9]};

    h2 {
      font-size: ${size.lg};
      margin-bottom: ${spacings[8]};
    }
  }
`

export const WorkCards = styled.div`
  ${breakpoints.mobileSmall} {
    padding-left: 2.8rem;
  }

  ${breakpoints.tabletVertical} {
    display: flex;
  }
`

export const AllWorkLink = styled(Link)`
  display: flex;
  margin-top: 11rem;
  text-decoration: none;
`

export const TestimonialsSection = styled(TextContentWrapper)`
  margin-top: ${spacings[5]};

  ${breakpoints.mobileSmall} {
    margin-bottom: ${spacings[3]};

    h4 {
      margin-bottom: ${spacings[3]};
      margin-top: -0.8rem;
    }

    p:not(:last-child) {
      margin-bottom: ${spacings[3]};
    }
  }

  ${breakpoints.tabletVertical} {
    margin-bottom: 0;

    h4 {
      font-size: ${size.md};
    }
  }

  ${breakpoints.laptopLarge} {
    padding-top: ${spacings[7]};
    padding-bottom: ${spacings[8]};

    h4 {
      font-size: ${size.md};
      margin-top: ${spacings[1]};
      margin-bottom: ${spacings[5]};
    }

    p {
      font-size: ${psize.l};
      line-height: 3rem;
    }
  }
`

export const QuoteIcon = styled.span`
  font-size: 10rem;
  color: ${colors.accent};
  font-weight: 700;
  line-height: 5rem;
`

export const CapsHeadingLargeModifier = styled(CapsHeadingLarge)`
  margin-top: ${spacings[3]};
  margin-bottom: ${spacings[2]};
  font-size: ${size.xs};

  ${breakpoints.laptopLarge} {
    font-size: ${size.s};
  }
`

export const CapsHeadingMediumModifier = styled(CapsHeadingMedium)`
  color: ${colors.gray4};
  ${breakpoints.tabletVertical} {
    margin-top: ${spacings[3]};
    margin-bottom: ${spacings[2]};
    color: ${colors.black};
    font-size: ${size.xs};
  }
`

export const StoriesSection = styled.section`
  margin-top: 7rem;
  margin-bottom: 30rem;
  padding-left: 11rem;
  overflow: hidden;
`
