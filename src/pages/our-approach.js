import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H1, H3, MP, CapsHeadingLarge, LP } from '../components/elements'

import {
  Header,
  ImageBackground,
  CapsHeadingSmallModifier,
  PageTitle,
  TextWrapper,
  ArrowImage,
  Introduction,
  StrategySection,
  StrategyHeadings,
  HeadingWithAccent,
  StartagyContnet,
  StartagyImages,
  DesignSection,
  DesignContent,
  HeadingWithAccentDesign,
  StrategyBlock,
  DesignBlock,
  DesignImages,
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
      <StrategySection>
        <StartagyContnet>
          <StrategyHeadings>
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
                  transform: translate(-20rem, 30%);
                `}
              />
            </HeadingWithAccent>
          </StrategyHeadings>
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
              <LP>
                <ul style={{ listStyle: 'none' }}>
                  <li>Strategy</li>
                  <li>Discovery & Research</li>
                  <li>User Experience</li>
                  <li>Brand Strategy & Architecture</li>
                  <li>Positioning</li>
                  <li>Content Strategy</li>
                </ul>
              </LP>
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
          <StrategyHeadings>
            <HeadingWithAccentDesign>
              <H1
                css={css`
                  color: ${colors.primary};
                  transform: rotate(-90deg);
                  padding: 100px 0px;
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
          </StrategyHeadings>
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
              <LP>
                <ul style={{ listStyle: 'none' }}>
                  <li>UI/UX Design</li>
                  <li>Stylescapes</li>
                  <li>Wireframing/Mockups</li>
                  <li>Prototypes</li>
                  <li>UI Kits/Design Systems</li>
                </ul>
              </LP>
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
    </Layout>
  )
}

export default OurApproachPage
