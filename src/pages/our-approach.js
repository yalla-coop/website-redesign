import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H1, H3, MP, CapsHeadingLarge } from '../components/elements'

import {
  Header,
  ImageBackground,
  List,
  CapsHeadingSmallModifier,
  PageTitle,
  TextWrapper,
  ArrowImage,
  Introduction,
  StrategySection,
  Headings,
  HeadingWithAccent,
  StartagyContnet,
  StartagyImages,
  DesignSection,
  DesignContent,
  HeadingWithAccentDesign,
  StrategyBlock,
  DesignBlock,
  DesignImages,
  DigitalSection,
  DigitalImages,
} from '../styles/ourApproach'

import {
  Medium as AccentMedium,
  ExtraLarge as AccentExtraLarge,
} from '../components/elements/Accent'

import NavBar from '../components/layout/Header/Nav'
import ArrowDown from '../../static/svg/arrow-down.svg'

import { colors } from '../utils'

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
      <Header>
        <ImageBackground tag="section" fluid={image.sharp.fluid}>
          <NavBar menuColor="white" logoColor="white" />
          <TextWrapper>
            <CapsHeadingSmallModifier>
              Web design and development agency
            </CapsHeadingSmallModifier>
            <PageTitle>Our Approach + Services</PageTitle>
            <ArrowImage src={ArrowDown} alt="arrow down" />
          </TextWrapper>
        </ImageBackground>
      </Header>

      {/* Introduction */}

      <Introduction>
        <AccentMedium
          css={css`
            transform: translate(-3rem, -2.5rem);
          `}
        />
        <div>
          <H3>A user-centred approach is at the heart of everything we do.</H3>
          <MP>
            Whether it&apos;s building a website, an app, carrying out user
            research or running design thinking workshops for you and your team,
            we make sure we work with you to truly understand your users and
            what they need. After all, if we don’t help you build something that
            your users truly want, then we’re not helping you build something
            you need.
          </MP>
          <MP>
            So, how do we get there? We go through three phases:{' '}
            <small>Discovery, Design and Develop.</small>
          </MP>
          <MP>
            And then we go around again! Taking the product back to the users,
            to discover more about how they need the product to develop and so
            on.
          </MP>
          <MP>
            This tight, cyclical approach ensures we build your product in the
            most efficient way, with you fully in control and secure that
            you&lsquo;re creating something that will be used.
          </MP>
        </div>
      </Introduction>

      {/* strategy section */}

      <StrategySection>
        <StartagyContnet>
          <Headings>
            <HeadingWithAccent>
              <H1
                css={css`
                  color: ${colors.primary};
                  transform: rotate(-90deg);
                `}
              >
                Strategy + Discovery
              </H1>
              <AccentExtraLarge
                css={css`
                  transform: translate(-20rem, -50%);
                `}
              />
            </HeadingWithAccent>
          </Headings>
          <StrategyBlock>
            <div>
              <CapsHeadingLarge
                css={css`
                  color: ${colors.primary};
                `}
                w={800}
              >
                We’ll start with understanding your problems, your users and
                ideate on solutions
              </CapsHeadingLarge>
              <MP
                css={css`
                  width: 90%;
                `}
              >
                The internet means we are all connected regardless of where we
                come from and at Yalla we want to make the most of that! We are
                made up of talented designers, developers, project The internet
                means we are all connected regardless of where we come from and
                at Yalla we want to make the most of that! We are made up of
                talented designers, developers, project The internet means we
                are all connected regardless of where we come from and at Yalla
                we want to make the most of that! We are made up of talented
                designers, developers, project
              </MP>
            </div>
            <div>
              <CapsHeadingLarge
                css={css`
                  color: ${colors.primary};
                `}
                w={800}
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
            </div>
          </StrategyBlock>
        </StartagyContnet>
        <StartagyImages>
          <Img
            fileName="strategy"
            altText="strategy"
            style={{ height: 440, width: 580 }}
          />
          <Img
            fileName="discovery"
            altText="discovery"
            style={{ height: 440, width: 660 }}
          />
        </StartagyImages>
      </StrategySection>

      {/* Design section */}

      <DesignSection>
        <DesignContent>
          <Headings>
            <HeadingWithAccentDesign>
              <H1
                css={css`
                  color: ${colors.primary};
                  transform: rotate(-90deg);
                `}
              >
                Design
              </H1>
              <AccentExtraLarge
                css={css`
                  transform: translate(-15rem, -30%);
                `}
              />
            </HeadingWithAccentDesign>
          </Headings>
          <DesignBlock>
            <div>
              <CapsHeadingLarge
                css={css`
                  color: ${colors.primary};
                `}
                w={800}
              >
                We’ll then prioritise your users needs, create wireframes and
                design prototypes to shape the product
              </CapsHeadingLarge>
              <MP
                css={css`
                  width: 90%;
                `}
              >
                The internet means we are all connected regardless of where we
                come from and at Yalla we want to make the most of that! We are
                made up of talented designers, developers, project The internet
                means we are all connected regardless of where we come from and
                at Yalla we want to make the most of that! We are made up of
                talented designers, developers, project The internet means we
                are all connected regardless of where we come from and at Yalla
              </MP>
            </div>
            <div>
              <CapsHeadingLarge
                css={css`
                  color: ${colors.primary};
                `}
                w={800}
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
            </div>
          </DesignBlock>
        </DesignContent>
        <DesignImages>
          <Img
            fileName="design2"
            altText="design"
            style={{ height: 625, width: 625 }}
          />
          <Img
            fileName="design1"
            altText="design2"
            style={{ height: 625, width: 485 }}
          />
        </DesignImages>
      </DesignSection>
      {/* Digital developments section */}
      <DigitalSection>
        <StartagyContnet>
          <Headings>
            <HeadingWithAccent>
              <H1
                css={css`
                  color: ${colors.primary};
                  transform: rotate(-90deg);
                `}
              >
                Digital development
              </H1>
              <AccentExtraLarge
                css={css`
                  transform: translate(-20rem, -50%);
                `}
              />
            </HeadingWithAccent>
          </Headings>
          <StrategyBlock>
            <div>
              <CapsHeadingLarge
                css={css`
                  color: ${colors.primary};
                `}
                w={800}
              >
                Next, we’ll build and user test the features to make up your
                product
              </CapsHeadingLarge>
              <MP
                css={css`
                  width: 90%;
                `}
              >
                The internet means we are all connected regardless of where we
                come from and at Yalla we want to make the most of that! We are
                made up of talented designers, developers, project managers and
                strategists, all focused on building digital products with an
                emphasis on driving social good through everything we do.
              </MP>
              <MP
                css={css`
                  width: 90%;
                  margin-top: 2rem;
                `}
              >
                The internet means we are all connected regardless of where we
                come from and at Yalla we want to make the most of that! We are
                made up of talented
              </MP>
            </div>
            <div>
              <CapsHeadingLarge
                css={css`
                  color: ${colors.primary};
                `}
                w={800}
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
            </div>
          </StrategyBlock>
        </StartagyContnet>
        <DigitalImages>
          <Img
            fileName="digital"
            altText="digital"
            style={{ height: 'auto', width: 750 }}
          />
        </DigitalImages>
      </DigitalSection>
    </Layout>
  )
}

export default OurApproachPage
