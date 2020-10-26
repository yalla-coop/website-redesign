import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { H2, CapsHeadingSmall } from '../components/elements'
import { colors, breakpoints, spacings, size, lineHeight } from '../utils'
import { Wrapper as ContentWrapper } from '../components/contentWrapper'

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

export const H2Modifier = styled(H2)`
  color: #fff;

  ${breakpoints.mobileSmall} {
    text-align: center;
    font-size: ${size.sm};
    line-height: ${spacings[5]};
    letter-spacing: 1px;
    padding: 0 ${spacings[1]};
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
    margin-top: -30px;
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
  flex-direction: column;
  padding: 0;
`

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ArrowImage = styled.img``

export const OurStorySection = styled(ContentWrapper)`
  ${breakpoints.mobileSmall} {
    h3 {
      font-size: ${size.sm};
      line-height: ${lineHeight.xl};
      margin-left: 28px;
      margin-bottom: ${spacings[4]};
      padding-right: ${spacings[2]};
    }
    p {
      margin-left: 28px;
      padding-bottom: ${spacings[3]};
      padding-right: ${spacings[2]};
    }
    button {
      margin-top: ${spacings[3]};
      margin-left: 28px;
    }
  }
`

export const Main = styled.div`
  height: 65vh;
  position: relative;
`
export const OurApproachSection = styled.section`
  margin-top: 30.6rem;
  margin-right: 7.6rem;
  background: rgba(247, 247, 247, 0.7);
  display: flex;
  height: 786px;
`

export const OurApproachHeadings = styled.div`
  flex: 3;
  padding-right: 10rem;
`

export const HeadingWithAccent = styled.div`
  display: flex;
  align-items: center;
  transform: translate(0, -50%);
`

export const LearnMoreBlock = styled.div`
  margin-top: 20rem;
  padding-left: 14rem;

  h2 {
    margin-bottom: 3.6rem;
  }
`
export const ServicesBlock = styled.div`
  flex: 2;
  margin: 8rem 0 11rem 0;

  div:not(:last-child) {
    margin-bottom: 4.8rem;
  }
`

export const WorkSection = styled.section`
  margin-top: 11rem;
  background: ${colors.primary};
  /* height: 2459px; */
  padding: 15rem 13rem 30rem 6rem;
  position: relative;
`

export const AllWorkLink = styled(Link)`
  display: flex;
  margin-top: 11rem;
  text-decoration: none;
`

export const TestimonialsSection = styled.section`
  margin-top: 20.4rem;
  padding: 0 30.5rem 0 11rem;
`

export const StoriesSection = styled.section`
  margin-top: 7rem;
  margin-bottom: 30rem;
  padding-left: 11rem;
  overflow: hidden;
`
