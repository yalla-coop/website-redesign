import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  H1,
  H2,
  H3,
  MP,
  Button,
  CapsHeadingLarge,
  LP,
} from '../components/elements'

import {
  Header,
  ImageBackground,
  CapsHeadingSmallModifier,
  H2Modifier,
  TextWrapper,
  ArrowImage,
  OurStorySection,
  OurApproachSection,
} from './landing.styles'
import {
  Medium as AccentMedium,
  ExtraLarge as AccentExtraLarge,
} from '../components/elements/Accent'
import NavBar from '../components/layout/Header/Nav'
import ArrowDown from '../../static/svg/arrow-down.svg'

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
        <ImageBackground tag="section" fluid={image.sharp.fluid}>
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
      <OurStorySection>
        <AccentMedium
          css={css`
            transform: translate(-3rem, -2.5rem);
          `}
        />
        <div>
          <H3>
            Yalla is a collective of web developers, designers, project managers
            and strategists.
          </H3>
          <MP>
            We work together across the UK, Gaza and Germany, united in our
            desire to build quality products that deliver social good.
          </MP>
          <MP>
            Collaborating with non-profits, start ups and impact-driven
            businesses, we harness the power of technology to solve societal
            challenges, spread knowledge and transcend borders.
          </MP>
          <MP>
            So if you&apos;re looking for us to build a website, app, help your
            understand your users or anything in between, give us a shout!
          </MP>
          <Button
            title="Our Story"
            hasArrow
            onClick={() => null}
            capitalize
            primary
          />
        </div>
      </OurStorySection>
      <OurApproachSection
        css={css`
          display: flex;
          justify-content: space-around;
        `}
      >
        <div
          css={css`
            flex: 3;
            padding-right: 10rem;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              transform: translate(0, -50%);
            `}
          >
            <H1
              css={css`
                transform: rotate(-90deg);
              `}
            >
              Our Approach <br />+ Services
            </H1>
            <AccentExtraLarge
              css={css`
                transform: translate(-10rem, 30%);
              `}
            />
          </div>
          <div
            css={css`
              margin: 20.7rem 0 8rem 0;
              padding: 0 11.2rem 0 18rem;

              h2 {
                margin-bottom: 3.6rem;
              }
            `}
          >
            <H2>
              A user-centred approach is at the heart of everything we do.
            </H2>
            <Button
              title="Learn More"
              hasArrow
              onClick={() => null}
              capitalize
              primary
            />
          </div>
        </div>
        <div
          css={css`
            flex: 1;
            margin: 8rem 0 11rem 0;
            /* padding-right: 10rem; */

            div:not(:last-child) {
              margin-bottom: 4.8rem;
            }
          `}
        >
          <div>
            <CapsHeadingLarge>DISCOVERY / STRATEGY</CapsHeadingLarge>
            <LP>
              Strategy
              <br /> Discovery & Research
              <br /> User Experience
              <br /> Brand Strategy & Architecture
              <br /> Positioning
              <br /> Content Strategy
            </LP>
          </div>
          <div>
            <CapsHeadingLarge>Design</CapsHeadingLarge>
            <LP>
              UI/UX Design
              <br /> Stylescapes
              <br /> Wireframing / Mockups
              <br /> Prototypes
              <br /> UI Kits/Design Systems
            </LP>
          </div>
          <div>
            <CapsHeadingLarge>DIGITAL DEVELOPMENT</CapsHeadingLarge>
            <LP>
              Full stack development
              <br /> Information Architecture
              <br /> Prototypes <br />
              Content Management Systems
              <br /> iOS Applications
              <br /> Web Applications
              <br /> Android Applications
            </LP>
          </div>
        </div>
      </OurApproachSection>
    </Layout>
  )
}

export default IndexPage
