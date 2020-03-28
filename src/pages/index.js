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
  OurApproachHeadings,
  HeadingWithAccent,
  LearnMoreBlock,
  ServicesBlock,
  WorkSection,
  AllWorkLink,
  TestimonialsSection,
  StoriesSection,
} from './landing.styles'
import {
  Medium as AccentMedium,
  Large as AccentLarge,
  ExtraLarge as AccentExtraLarge,
} from '../components/elements/Accent'
import NavBar from '../components/layout/Header/Nav'
import ArrowDown from '../../static/svg/arrow-down.svg'
import Arrow from '../../static/svg/arrow'

import { WorkCard, Quote, StoryCard } from '../components/common'

import { colors } from '../utils'

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
      <OurApproachSection>
        <OurApproachHeadings>
          <HeadingWithAccent>
            <H1
              css={css`
                color: ${colors.primary};
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
          </HeadingWithAccent>
          <LearnMoreBlock>
            <H2
              css={css`
                color: ${colors.primary};
              `}
            >
              A user-centred approach is at the heart of everything we do.
            </H2>
            <Button
              title="Learn More"
              hasArrow
              onClick={() => null}
              capitalize
              primary
            />
          </LearnMoreBlock>
        </OurApproachHeadings>
        <ServicesBlock>
          <div>
            <CapsHeadingLarge
              css={css`
                color: ${colors.primary};
              `}
              w={800}
            >
              DISCOVERY / STRATEGY
            </CapsHeadingLarge>
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
            <CapsHeadingLarge
              css={css`
                color: ${colors.primary};
              `}
              w={800}
            >
              Design
            </CapsHeadingLarge>
            <LP>
              UI/UX Design
              <br /> Stylescapes
              <br /> Wireframing / Mockups
              <br /> Prototypes
              <br /> UI Kits/Design Systems
            </LP>
          </div>
          <div>
            <CapsHeadingLarge
              css={css`
                color: ${colors.primary};
              `}
              w={800}
            >
              DIGITAL DEVELOPMENT
            </CapsHeadingLarge>
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
        </ServicesBlock>
      </OurApproachSection>
      <WorkSection>
        <H2
          css={css`
            color: ${colors.white};
          `}
        >
          We work collaboratively with our clients and take pride in creating
          delightful user experiences.
        </H2>
        {/* Subtitle Part */}
        <AllWorkLink>
          <H3
            css={css`
              color: rgba(255, 255, 255, 0.3);
            `}
          >
            All work
          </H3>
          <Arrow
            width={30}
            height={35}
            css={css`
              path {
                fill: rgba(255, 255, 255, 0.3);
              }
              margin-left: 1.7rem;
            `}
          />
        </AllWorkLink>

        <HeadingWithAccent
          css={css`
            position: absolute;
            z-index: 1;
            top: 15%;
            right: 5%;
            transform: translate(-5%, -15%);
          `}
        >
          <H1
            css={css`
              color: rgba(255, 255, 255, 0.3);
              transform: rotate(-90deg);
            `}
          >
            Featured Work
            <br /> + Case Studies
          </H1>
          <AccentExtraLarge
            css={css`
              transform: translate(-10rem, 30%);
            `}
          />
        </HeadingWithAccent>
        {/* Work Cards */}
        <div
          css={css`
            display: flex;
          `}
        >
          {/* First Column */}
          <div>
            <WorkCard
              smallHeading="EARWIG - CONSTRUCTION"
              bigHeading="Building a powerful reviews platform setting new standards for workers in the construction industry"
              fileName="mask-group"
              altText="mask group"
            />
            <WorkCard
              smallHeading="EARWIG - CONSTRUCTION"
              bigHeading="Building a powerful reviews platform setting new standards for workers in the construction industry"
              fileName="mask-group"
              altText="mask group"
            />
            <div
              css={css`
                margin-top: 7rem;
              `}
            >
              <Button
                title="LOVE WHAT YOU SEE? GET IT TOUCH"
                hasArrow
                capitalize
                onClick={() => null}
                backgroundColor={colors.accent}
              />
            </div>
          </div>
          {/* Second Column */}
          <div
            css={css`
              margin-top: 25%;
            `}
          >
            <WorkCard
              smallHeading="EARWIG - CONSTRUCTION"
              bigHeading="Building a powerful reviews platform setting new standards for workers in the construction industry"
              fileName="mask-group"
              altText="mask group"
            />
            <WorkCard
              smallHeading="EARWIG - CONSTRUCTION"
              bigHeading="Building a powerful reviews platform setting new standards for workers in the construction industry"
              fileName="mask-group"
              altText="mask group"
            />
          </div>
        </div>
      </WorkSection>
      <TestimonialsSection>
        <Quote
          headline="In my experience, Yalla are a creative, reliable and trusted partner to work with."
          person="LAURA JENNER"
          position="DIGITAL PROJECT MANAGER"
        >
          <p>
            From start to fruition, Joe was available every step of the way –
            having time to chat through the development, and full transparency
            of the build through GitHub gave me and my stakeholders great
            confidence.
          </p>
          <br />
          <p>
            Yalla worked flexibly with our budget and timescale for the Tech for
            Good project we’d asked them to help us with. Their strong team
            management also helped us feel we were able to give feedback
            quickly, and feel really involved in the process. As Joe and Simon
            are also Founders and Coders grads, I also felt they had a strong
            sense of product development from both a UX and technical point of
            view.
          </p>
          <br />
          <p>
            Above all, Yalla held similar values to our organisation – an
            interest in social impact projects, and driven by value for users. I
            would not hesitate to work with them again.
          </p>
          <br />
        </Quote>
      </TestimonialsSection>
      <StoriesSection>
        <div>
          {/* for the heading and the accent */}
          <HeadingWithAccent
            css={css`
              z-index: 2;
              transform: translate(75%, 0);
            `}
          >
            <H1
              css={css`
                color: ${colors.black};
                transform: rotate(-90deg);
              `}
            >
              Stories
            </H1>
            <AccentLarge
              css={css`
                transform: translate(0, 50%);
              `}
            />
          </HeadingWithAccent>
        </div>
        <div
          css={css`
            display: flex;
            width: 120%;
            margin-top: 4rem;

            overflow: hidden;
            div {
              margin-right: 4rem;
            }
          `}
        >
          {/* for displaying the stories */}
          <StoryCard
            smallHeading="RESET - DIGITAL FOR GOOD"
            bigHeading="Yalla Cooperative: Coding for Impact Between Europe and Gaza"
            fileName="mask-group"
            altText="mask group"
          />
          <StoryCard
            smallHeading="RESET - DIGITAL FOR GOOD"
            bigHeading="Yalla Cooperative: Coding for Impact Between Europe and Gaza"
            fileName="mask-group"
            altText="mask group"
          />
          <StoryCard
            smallHeading="RESET - DIGITAL FOR GOOD"
            bigHeading="Yalla Cooperative: Coding for Impact Between Europe and Gaza"
            fileName="mask-group"
            altText="mask group"
          />
        </div>
      </StoriesSection>
    </Layout>
  )
}

export default IndexPage
