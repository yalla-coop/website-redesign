import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H2, MP, CapsHeadingLarge } from '../components/elements'

import {
  List,
  Introduction,
  ImageBackground,
  StrategySection,
  Headings,
  StartagyContnet,
  StartagyImages,
  DesignSection,
  DesignContent,
  HeadingWithAccent,
  HeadingWithAccentDesign,
  StrategyBlock,
  WhatWeOffer,
  DesignBlock,
  DesignImages,
  DigitalSection,
  DigitalImages,
  Description,
} from '../styles/ourApproach'

import {
  Dev,
  ImageBackground,
  Wrapper,
  CapsHeadingSmallModifier,
  H1Modifier,
  ArrowWrapper,
  ArrowImage,
} from '../styles/landing'

// import {
//   Medium as AccentMedium,
//   ExtraLarge as AccentExtraLarge,
// } from '../components/elements/Accent'

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
        {/* <AccentMedium
          css={css`
            transform: translate(-3rem, -2.5rem);
          `}
        /> */}
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
      {/* strategy section */}
      <StrategySection>
        <StartagyContnet>
          <Headings>
            <HeadingWithAccent>
              <H2>Discovery</H2>
              {/* <AccentExtraLarge
                css={css`
                  transform: translate(-20rem, -50%);
                `}
              /> */}
            </HeadingWithAccent>
          </Headings>
          <StrategyBlock>
            <Description>
              <CapsHeadingLarge
              // css={css`
              //   color: ${colors.primary};
              // `}
              // w={800}
              >
                We’ll start with understanding your problems, your users and
                ideate on solutions
              </CapsHeadingLarge>
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
              <CapsHeadingLarge
              // css={css`
              //   color: ${colors.primary};
              // `}
              // w={800}
              >
                What we offer
              </CapsHeadingLarge>
              <List>
                <li>Strategy</li>
                <li>Discovery & Research</li>
                <li>User Experience</li>
                <li>Brand Strategy & Architecture</li>
                <li>Positioning</li>
                <li>Content Strategy</li>
              </List>
            </WhatWeOffer>
          </StrategyBlock>
        </StartagyContnet>
        <StartagyImages>
          <Img
            fileName="strategy"
            altText="strategy"
            style={{ marginBottom: '24px' }}
          />
          <Img
            fileName="discovery"
            altText="discovery"
            style={{ marginBottom: '32px' }}
          />
        </StartagyImages>
      </StrategySection>
      {/* Design section */}
      <DesignSection>
        <DesignContent>
          <Headings>
            <HeadingWithAccentDesign>
              <H2>Design</H2>
              {/* <AccentExtraLarge
                css={css`
                  transform: translate(-15rem, -30%);
                `}
              /> */}
            </HeadingWithAccentDesign>
          </Headings>
          <DesignBlock>
            <Description>
              <CapsHeadingLarge
              // css={css`
              //   color: ${colors.primary};
              // `}
              // w={800}
              >
                We’ll then prioritise your users needs, create wireframes and
                design prototypes to shape the product
              </CapsHeadingLarge>
              <MP
                css={css`
                  width: 90%;
                `}
              >
                Before we write even a line of code we want to make sure you
                have confidence in the digital solution you are building.
                Through wireframes, interactive prototypes and user testing we
                will be able to test key ideas and assumptions to ensure what
                you are building truly meets the problems you are looking to
                solve.
              </MP>
            </Description>
            <WhatWeOffer>
              <CapsHeadingLarge
              // css={css`
              //   color: ${colors.primary};
              // `}
              // w={800}
              >
                What we offer
              </CapsHeadingLarge>
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
          <Img
            fileName="design2"
            altText="design"
            style={{ marginBottom: '32px' }}
          />
          <Img
            fileName="design1"
            altText="design2"
            style={{ marginBottom: '32px' }}
            // style={{ height: 625, width: 485 }}
          />
        </DesignImages>
      </DesignSection>
      {/* Digital developments section */}
      <DigitalSection>
        <StartagyContnet>
          <Headings>
            <HeadingWithAccent>
              <H2>Digital development</H2>
              {/* <AccentExtraLarge
                css={css`
                  transform: translate(-20rem, -50%);
                `}
              /> */}
            </HeadingWithAccent>
          </Headings>
          <StrategyBlock>
            <Description>
              <CapsHeadingLarge
              // css={css`
              //   color: ${colors.primary};
              // `}
              // w={800}
              >
                Next, we’ll build and user test the features to make up your
                product
              </CapsHeadingLarge>
              <MP
              // css={css`
              //   width: 90%;
              // `}
              >
                Through short, very targeted periods of development work, we
                will look to build your product in the most efficient way
                possible, constantly bringing it back to test with your users to
                ensure the product is always built in a truly use-centred way.
              </MP>
            </Description>
            <WhatWeOffer>
              <CapsHeadingLarge
              // css={css`
              //   color: ${colors.primary};
              // `}
              // w={800}
              >
                What we offer
              </CapsHeadingLarge>
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
          </StrategyBlock>
        </StartagyContnet>
        <DigitalImages>
          <Img fileName="digital" altText="digital" />
        </DigitalImages>
      </DigitalSection>
    </Layout>
  )
}

export default OurApproachPage
