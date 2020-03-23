import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { H2, CapsHeadingSmall } from '../components/elements'
import NavBar from '../components/layout/Header/Nav'
import ArrowDown from '../../static/svg/arrow-down.svg'

const ImageBackground = styled(BackgroundImage)`
  background-image: url('/images/landing-image.png') no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: relative;
`

const Header = styled.header`
  height: 100vh;
`

const H2Modifier = styled(H2)`
  color: #fff;
  text-align: center;
  transform: translateX(-5rem);
`

const CapsHeadingSmallModifier = styled(CapsHeadingSmall)`
  color: #fff;
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, 5%);
`

const TextWrapper = styled.div`
  background: rgba(196, 196, 196, 0.15);
  width: 80%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  padding: 1.5rem 0;
`
const ArrowImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`

const IndexPage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "landing-image.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Header>
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
          <NavBar menuColor="white" logoColor="white" />
          <TextWrapper>
            <CapsHeadingSmallModifier>
              Web design and development agency
            </CapsHeadingSmallModifier>
            <H2Modifier>
              We help non-profits and impact-driven businesses drive positive
              social change in the tech sphere
            </H2Modifier>
          </TextWrapper>
          <ArrowImage src={ArrowDown} alt="arrow down" />
        </ImageBackground>
      </Header>
    </Layout>
  )
}

export default IndexPage
