import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { H2, CapsHeadingSmall } from '../components/elements'

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
`
