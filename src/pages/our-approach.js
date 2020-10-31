import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { H2, MP, CapsHeadingLarge } from '../components/elements'

import {
  List,
  Introduction,
  ImageBackground,
  DiscoverySection,
  Headings,
  CapsHeadingLargeModifier,
  DiscoveryContent,
  DiscoveryImages,
  DesignSection,
  DesignContent,
  HeadingWithAccent,
  HeadingWithAccentDesign,
  AccentExtraLargeLeft,
  AccentExtraLargeRight,
  DiscoveryBlock,
  WhatWeOffer,
  DesignBlock,
  DesignImages,
  DigitalSection,
  DigitalImages,
  Description,
} from '../styles/ourApproach'

import {
  Dev,
  Wrapper,
  CapsHeadingSmallModifier,
  H1Modifier,
  ArrowWrapper,
  ArrowImage,
} from '../styles/landing'

import NavBar from '../components/layout/Header/Nav'
import ArrowDown from '../../static/svg/arrow-down.svg'

// import Img from '../components/image'

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
  return (
    <Layout>
      <SEO title="Our Approach" />
      <Dev />
      <header>
        <ImageBackground tag="section" fluid={image.sharp.fluid}>
          <NavBar menuColor="white" logoColor="white" />
          <Wrapper>
            <CapsHeadingSmallModifier>
              Web design and development agency
            </CapsHeadingSmallModifier>
            <H1Modifier>Our Approach + Services</H1Modifier>
            <ArrowWrapper>
              <ArrowImage src={ArrowDown} alt="arrow down" />
            </ArrowWrapper>
          </Wrapper>
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
        <MP>
          So, how do we get there? We go through three phases:{' '}
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
      <DiscoverySection>
        <DiscoveryContent>
          <Headings>
            <HeadingWithAccent>
              <H2>Discovery</H2>
              <AccentExtraLargeLeft />
            </HeadingWithAccent>
          </Headings>
          <DiscoveryBlock>
            <Description>
              <CapsHeadingLargeModifier>
                We’ll start with understanding your problems, your users and
                ideate on solutions
              </CapsHeadingLargeModifier>
              <MP>
                With our UX and UI designers we are able to work with you to
                break down the problems you are looking to solve, really
                understand the people you are solving these problems for and
                reach initial ideas to take and test in the design phase. We are
                able to work out where you are on your journey, delivering the
                exercises needed to pick up from your work on develop it
                further.
              </MP>
            </Description>

            <WhatWeOffer>
              <CapsHeadingLargeModifier>What we offer</CapsHeadingLargeModifier>
              <List>
                <li>Strategy</li>
                <li>Discovery & Research</li>
                <li>User Experience</li>
                <li>Brand Strategy & Architecture</li>
                <li>Positioning</li>
                <li>Content Strategy</li>
              </List>
            </WhatWeOffer>
          </DiscoveryBlock>
        </DiscoveryContent>
        <DiscoveryImages>
          {/* <Img
            fileName="strategy"
            altText="strategy"
            style={{ marginBottom: '24px' }}
          />
          <Img
            fileName="discovery"
            altText="discovery"
            style={{ marginBottom: '32px' }}
          /> */}
        </DiscoveryImages>
      </DiscoverySection>

      {/* Design section */}
      <DesignSection>
        <DesignContent>
          <Headings>
            <HeadingWithAccentDesign>
              <H2>Design</H2>
              <AccentExtraLargeRight />
            </HeadingWithAccentDesign>
          </Headings>
          <DesignBlock>
            <Description>
              <CapsHeadingLargeModifier>
                We’ll then prioritise your users needs, create wireframes and
                design prototypes to shape the product
              </CapsHeadingLargeModifier>
              <MP>
                Before we write even a line of code we want to make sure you
                have confidence in the digital solution you are building.
                Through wireframes, interactive prototypes and user testing we
                will be able to test key ideas and assumptions to ensure what
                you are building truly meets the problems you are looking to
                solve.
              </MP>
            </Description>
            <WhatWeOffer>
              <CapsHeadingLargeModifier>What we offer</CapsHeadingLargeModifier>
              <List>
                <li>UI/UX Design</li>
                <li>Stylescapes</li>
                <li>Wireframing/Mockups</li>
                <li>Prototypes</li>
                <li>UI Kits/Design Systems</li>
              </List>
            </WhatWeOffer>
          </DesignBlock>
        </DesignContent>
        <DesignImages>
          {/* <Img
            fileName="design2"
            altText="design"
            style={{ marginBottom: '32px' }}
          />
          <Img
            fileName="design1"
            altText="design2"
            style={{ marginBottom: '32px' }}
            // style={{ height: 625, width: 485 }}
          /> */}
        </DesignImages>
      </DesignSection>

      {/* Digital developments section */}
      <DigitalSection>
        <DiscoveryContent>
          <Headings>
            <HeadingWithAccent>
              <H2>Digital development</H2>
              <AccentExtraLargeLeft />
            </HeadingWithAccent>
          </Headings>
          <DiscoveryBlock>
            <Description>
              <CapsHeadingLargeModifier>
                Next, we’ll build and user test the features to make up your
                product
              </CapsHeadingLargeModifier>
              <MP>
                Through short, very targeted periods of development work, we
                will look to build your product in the most efficient way
                possible, constantly bringing it back to test with your users to
                ensure the product is always built in a truly use-centred way.
              </MP>
            </Description>
            <WhatWeOffer>
              <CapsHeadingLarge>What we offer</CapsHeadingLarge>
              <List>
                <li>Full stack development</li>
                <li>Information Architecture</li>
                <li>Content Management Systems</li>
                <li>iOS Applications</li>
                <li>Web Applications</li>
                <li>Android Applications</li>
                <li>Prototypes</li>
              </List>
            </WhatWeOffer>
          </DiscoveryBlock>
        </DiscoveryContent>
        <DigitalImages>
          {/* <Img fileName="digital" altText="digital" /> */}
        </DigitalImages>
      </DigitalSection>
    </Layout>
  )
}

export default OurApproachPage
