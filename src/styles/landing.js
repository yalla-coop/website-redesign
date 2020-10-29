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

export const Dev = styled.div`
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

export const ImageBackground = styled(BackgroundImage)`
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
    height: 85vh;
  }
`

export const Header = styled.header``

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
  }
`

export const Wrapper = styled(ContentWrapper)`
  ${breakpoints.mobileMedium} {
    margin-top: 2rem;
  }
`

export const TextWrapper = styled(ContentWrapper)`
  padding-bottom: 0;
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
  ${breakpoints.tabletVertical} {
    h2 {
      font-size: ${size.md};
    }
  }
`

export const Main = styled.div`
  height: 65vh;
  position: relative;
`
export const OurApproachSection = styled(TextContentWrapper)`
  position: relative;

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
    top: 210px;
    left: 0;
    z-index: -10;
  }
`

export const OurApproachWrapper = styled.div`
  ${breakpoints.tabletVertical} {
    display: flex;
    flex-direction: row-reverse;
    margin-top: -200px;
  }
`

export const OurApproachHeadings = styled.div`
  flex: 3;
`

export const HeadingWithAccent = styled.div`
  ${breakpoints.tabletVertical} {
    h2 {
      font-size: ${size.lg};
      transform: rotate(-90deg) translate(0, -300px);
    }
  }
`

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
  ${breakpoints.tabletVertical} {
    align-self: flex-end;
    width: 300px;
    margin-right: ${spacings[7]};

    h3 {
      font-size: ${size.md};
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
  ${breakpoints.tabletVertical} {
    h4 {
      font-size: ${size.md};
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
  font-size: ${size.xs};
`

export const CapsHeadingMediumModifier = styled(CapsHeadingMedium)`
  color: ${colors.gray4};
`
