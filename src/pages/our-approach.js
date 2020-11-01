import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H2, MP, CapsHeadingLarge } from '../components/elements'

import {
  Wrapper,
  HeadingWrapper,
  List,
  Li,
  Introduction,
  ImageBackground,
  CapsHeadingLargeModifier,
  Section,
  WhatWeOffer,
  Images,
  Description,
} from '../styles/ourApproach'

import {
  CapsHeadingSmallModifier,
  H1Modifier,
  ArrowWrapper,
  ArrowImage,
} from '../styles/landing'

import NavBar from '../components/layout/Header/Nav'
import ArrowDown from '../../static/svg/arrow-down.svg'

import Img from '../components/image'

const OurApproachPage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "our-approach.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const isLaptop = useMediaQuery({ minWidth: 1024 })

  return (
    <Layout>
      <SEO title="Our Approach" />
      <header>
        <ImageBackground tag="section" fluid={image.sharp.fluid}>
          <NavBar menuColor="white" logoColor="white" />
          <HeadingWrapper>
            <CapsHeadingSmallModifier>
              Web design and development agency
            </CapsHeadingSmallModifier>
            <H1Modifier>Our Approach + Services</H1Modifier>
            <ArrowWrapper>
              <ArrowImage src={ArrowDown} alt="arrow down" />
            </ArrowWrapper>
          </HeadingWrapper>
        </ImageBackground>
      </header>

      {/* Introduction */}
      <Introduction>
        <H2>A user-centred approach is at the heart of everything we do.</H2>
        <MP>
          Whether it&apos;s building a website, an app, carrying out user
          research or running design thinking workshops for you and your team,
          we make sure we work with you to truly understand your users and what
          they need. After all, if we don’t help you build something that your
          users truly want, then we’re not helping you build something you need.
        </MP>
        <MP>So, how do we get there? We go through three phases:</MP>
        <MP>
          <span>Discovery, Design and Develop.</span>
        </MP>
        <MP>
          And then we go around again! Taking the product back to the users, to
          discover more about how they need the product to develop and so on.
        </MP>
        <MP>
          This tight, cyclical approach ensures we build your product in the
          most efficient way, with you fully in control and secure that
          you&lsquo;re creating something that will be used.
        </MP>
      </Introduction>

      {/* Discovery section */}
      <Wrapper background="#F9F9F9">
        <Section>
          <H2>Discovery</H2>
          <Description>
            <CapsHeadingLargeModifier>
              We’ll start with understanding your problems, your users and
              ideate on solutions
            </CapsHeadingLargeModifier>
            <MP>
              With our UX and UI designers we are able to work with you to break
              down the problems you are looking to solve, really understand the
              people you are solving these problems for and reach initial ideas
              to take and test in the design phase. We are able to work out
              where you are on your journey, delivering the exercises needed to
              pick up from your work on develop it further.
            </MP>
          </Description>

          <WhatWeOffer>
            <CapsHeadingLargeModifier>What we offer</CapsHeadingLargeModifier>
            <List>
              <Li>Strategy</Li>
              <Li>Discovery & Research</Li>
              <Li>User Experience</Li>
              <Li>Brand Strategy & Architecture</Li>
              <Li>Positioning</Li>
              <Li>Content Strategy</Li>
            </List>
          </WhatWeOffer>
        </Section>
        {isLaptop ? (
          <Images>
            <Img
              fileName="strategy"
              altText="strategy"
              style={{
                height: '600px',
                width: '50%',
                display: 'inline-block',
              }}
            />
            <Img
              fileName="discovery"
              altText="discovery"
              style={{
                height: '600px',
                width: '50%',
                display: 'inline-block',
              }}
            />
          </Images>
        ) : (
          <Images>
            <Img
              fileName="strategy"
              altText="strategy"
              style={{
                marginBottom: '16px',
              }}
            />
            <Img fileName="discovery" altText="discovery" />
          </Images>
        )}
      </Wrapper>

      {/* Design section */}
      <Wrapper>
        <Section>
          <H2>Design</H2>
          <Description>
            <CapsHeadingLargeModifier>
              We’ll then prioritise your users needs, create wireframes and
              design prototypes to shape the product
            </CapsHeadingLargeModifier>
            <MP>
              Before we write even a line of code we want to make sure you have
              confidence in the digital solution you are building. Through
              wireframes, interactive prototypes and user testing we will be
              able to test key ideas and assumptions to ensure what you are
              building truly meets the problems you are looking to solve.
            </MP>
          </Description>
          <WhatWeOffer>
            <CapsHeadingLargeModifier>What we offer</CapsHeadingLargeModifier>
            <List>
              <Li>UI/UX Design</Li>
              <Li>Stylescapes</Li>
              <Li>Wireframing/Mockups</Li>
              <Li>Prototypes</Li>
              <Li>UI Kits/Design Systems</Li>
            </List>
          </WhatWeOffer>
        </Section>
        {isLaptop ? (
          <Images>
            <Img
              fileName="design2"
              altText="design"
              style={{
                height: '600px',
                width: '50%',
                display: 'inline-block',
              }}
            />
            <Img
              fileName="design1"
              altText="design2"
              style={{
                height: '600px',
                width: '50%',
                display: 'inline-block',
              }}
            />
          </Images>
        ) : (
          <Images>
            <Img
              fileName="design2"
              altText="design"
              style={{
                marginBottom: '16px',
              }}
            />
            <Img fileName="design1" altText="design2" />
          </Images>
        )}
      </Wrapper>

      {/* Digital developments section */}
      <Wrapper background="#F9F9F9">
        <Section>
          <H2>Digital development</H2>
          <Description>
            <CapsHeadingLargeModifier>
              Next, we’ll build and user test the features to make up your
              product
            </CapsHeadingLargeModifier>
            <MP>
              Through short, very targeted periods of development work, we will
              look to build your product in the most efficient way possible,
              constantly bringing it back to test with your users to ensure the
              product is always built in a truly use-centred way.
            </MP>
          </Description>
          <WhatWeOffer>
            <CapsHeadingLarge>What we offer</CapsHeadingLarge>
            <List>
              <Li>Full stack development</Li>
              <Li>Information Architecture</Li>
              <Li>Content Management Systems</Li>
              <Li>iOS Applications</Li>
              <Li>Web Applications</Li>
              <Li>Android Applications</Li>
              <Li>Prototypes</Li>
            </List>
          </WhatWeOffer>
        </Section>
        {isLaptop ? (
          <Images>
            <Img
              fileName="digital"
              altText="digital"
              style={{
                height: '700px',
                width: '100%',
              }}
            />
          </Images>
        ) : (
          <Images>
            <Img fileName="digital" altText="digital" />
          </Images>
        )}
      </Wrapper>
    </Layout>
  )
}

export default OurApproachPage
