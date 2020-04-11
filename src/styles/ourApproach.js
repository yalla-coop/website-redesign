import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { H2, CapsHeadingSmall } from '../components/elements'

export const ImageBackground = styled(BackgroundImage)`
  background-image: url('/images/our-approach.png') no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: relative;
`
// header style //

export const Header = styled.header`
  height: 100vh;
`

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

export const TextWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
`
export const ArrowImage = styled.img`
  margin-top: 100px;
`

// introduction style //

export const Introduction = styled.section`
  padding: 14rem 12.5rem 14rem;
  width: 70%;
  display: flex;
  h3 {
    margin-bottom: 4.5rem;
  }
  p {
    margin-bottom: 4rem;
  }
  small {
    font-size: 100%;
    font-weight: 700;
  }
`

// strategy section style //

export const StrategySection = styled.section`
  margin-top: 12rem;
`

export const HeadingWithAccent = styled.div`
  display: flex;
  align-items: center;
  margin-left: -120px;
`

export const StartagyContnet = styled.div`
  background: rgba(247, 247, 247, 0.7);
  display: flex;
  margin-right: 21.1rem;
  height: 550px;
`
export const StrategyBlock = styled.div`
  flex: 2;
  margin: 8rem 0 11rem 0;
  div:not(:last-child) {
    margin-bottom: 4.8rem;
  }
`
export const StartagyImages = styled.div`
  margin-top: 22rem;
  display: flex;
  justify-content: flex-end;
  div {
    margin-left: 30px;
  }
`

// design section style //

export const DesignSection = styled.section`
  margin-top: 22rem;
`
export const DesignContent = styled.div`
  background: rgba(247, 247, 247, 0.7);
  display: flex;
  flex-direction: row-reverse;
  margin-left: 21.1rem;
  height: 55rem;
`
export const HeadingWithAccentDesign = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(-5rem);
  h1 {
    margin-top: -12rem;
    margin-right: 10rem;
  }
`

export const Headings = styled.div``

export const DesignBlock = styled.div`
  flex: 2;
  margin: 8rem 0 11rem 0;
  padding: 0 10rem;

  div:not(:last-child) {
    margin-bottom: 4.8rem;
  }
`

export const DesignImages = styled.div`
  margin-top: 22rem;
  display: flex;
  justify-content: flex-start;
  div {
    margin-right: 30px;
  }
`

// digital development section style //

export const DigitalSection = styled.section`
  margin-top: 28rem;
`
export const DigitalImages = styled.div`
  margin: 22rem 0;
  display: flex;
  justify-content: flex-end;
`
