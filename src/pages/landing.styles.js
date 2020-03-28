import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { H2, CapsHeadingSmall } from '../components/elements'
import { colors } from '../utils'

export const ImageBackground = styled(BackgroundImage)`
  background-image: url('/images/landing-image.png') no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: relative;
`

export const Header = styled.header`
  height: 100vh;
`

export const H2Modifier = styled(H2)`
  color: #fff;
  text-align: center;
  transform: translateX(-5rem);
`

export const CapsHeadingSmallModifier = styled(CapsHeadingSmall)`
  color: #fff;
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, 5%);
`

export const TextWrapper = styled.div`
  background: rgba(196, 196, 196, 0.15);
  width: 80%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  padding: 1.5rem 0;
`
export const ArrowImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`

export const OurStorySection = styled.section`
  padding: 14rem 12.5rem 14rem;
  width: 65%;
  display: flex;

  h3 {
    margin-bottom: 4.5rem;
  }

  p {
    margin-bottom: 4rem;
  }
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
