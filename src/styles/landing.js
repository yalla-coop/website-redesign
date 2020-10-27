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
  lineHeight,
} from '../utils'
import {
  Wrapper as ContentWrapper,
  TextContentWrapper,
} from '../components/contentWrapper'

export const ImageBackground = styled(BackgroundImage)`
  ${breakpoints.mobileSmall} {
    height: 85vh;
    background-image: url('/images/landing-image.png') no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
  }

  ${breakpoints.mobileLarge} {
    height: 55vh;
  }
`

export const Header = styled.header`
  ${breakpoints.mobileSmall} {
    height: 85vh;
  }
`

export const H1Modifier = styled.h1`
  color: #fff;
  margin: 0;

  ${breakpoints.mobileSmall} {
    text-align: center;
    font-size: ${size.sm};
    line-height: ${spacings[5]};
    letter-spacing: 1px;
    padding: 0 ${spacings[2]};
  }

  ${breakpoints.mobileMedium} {
    font-size: ${size.md};
    line-height: 4rem;
  }
`

export const CapsHeadingSmallModifier = styled(CapsHeadingSmall)`
  color: #fff;

  ${breakpoints.mobileSmall} {
    text-align: center;
    padding-bottom: ${spacings[3]};
    margin-top: -6.2rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(196, 196, 196, 0.15);
  width: 100vw;

  ${breakpoints.mobileSmall} {
    padding: ${spacings[4]} 0;
    margin-top: ${spacings[6]};
    margin-bottom: 5.6rem;
  }

  ${breakpoints.mobileMedium} {
    margin-bottom: 96px;
  }

  ${breakpoints.mobileLarge} {
    margin: ${spacings[9]} 0;
  }
`

export const TextWrapper = styled(ContentWrapper)`
  padding-bottom: 0;
`

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ArrowImage = styled.img``

export const OurStorySection = styled(TextContentWrapper)`
  ${breakpoints.mobileSmall} {
    h2 {
      font-size: ${size.sm};
      letter-spacing: ${letterSpacing.small};
      line-height: ${lineHeight.xl};
      margin-bottom: ${spacings[4]};
      padding-right: ${spacings[2]};
    }
    p {
      padding-bottom: ${spacings[3]};
      padding-right: ${spacings[2]};
    }
    button {
      margin-left: 2.8rem;
      margin-top: ${spacings[3]};
      width: 200px;
    }
  }
`

export const Main = styled.div`
  height: 65vh;
  position: relative;
`
export const OurApproachSection = styled(TextContentWrapper)`
  ${breakpoints.mobileSmall} {
    h2 {
      color: ${colors.primary};
      font-size: ${size.md};
    }
  }

  ${breakpoints.mobileLarge} {
    h2 {
      transform: rotate(-90deg);
      font-size: ${size.lg};
    }
  }
`

export const OurApproachHeadings = styled.div`
  flex: 3;
`

export const HeadingWithAccent = styled.div``

export const LearnMoreBlock = styled.div`
  ${breakpoints.mobileSmall} {
    h3 {
      color: ${colors.primary};
      font-size: ${size.sm};
      margin-bottom: ${spacings[3]};
    }
    button {
      margin-left: 2.8rem;
      margin-bottom: ${spacings[3]};
      width: 200px;
    }
  }
`
export const ServicesBlock = styled.div`
  flex: 2;

  ${breakpoints.mobileSmall} {
    margin-top: ${spacings[5]};
    margin-bottom: ${spacings[3]};
  }
`

export const Service = styled.div`
  ${breakpoints.mobileSmall} {
    margin-bottom: ${spacings[5]};

    h3 {
      margin-bottom: ${spacings[1]};
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
`

export const WorkCards = styled.div`
  ${breakpoints.mobileSmall} {
    padding-left: 2.8rem;
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

    p {
      margin-bottom: ${spacings[3]};
    }
  }
`

export const QuoteIcon = styled.span`
  font-size: 100px;
  color: ${colors.accent};
  font-weight: 700;
  line-height: 50px;
`

export const CapsHeadingLargeModifier = styled(CapsHeadingLarge)`
  margin-top: ${spacings[3]};
  margin-bottom: ${spacings[2]};
  color: ${colors.black};
`

export const CapsHeadingMediumModifier = styled(CapsHeadingMedium)`
  color: ${colors.gray4};
`
