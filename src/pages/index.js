import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { H2, H3, MP, Button, CapsHeadingLarge } from '../components/elements'

import {
  ImageBackgroundWithGradient,
  CapsHeadingSmallModifier,
  H1Modifier,
  Wrapper,
  ArrowWrapper,
  ArrowImage,
  OurStorySection,
  OurApproachSection,
  OurApproachBackground,
  OurApproachWrapper,
  OurApproachHeadings,
  LearnMoreBlock,
  ServicesBlock,
  Service,
  WorkSection,
  WorkCards,
  TestimonialsSection,
  TextSection,
} from '../styles/landing'
import NavBar from '../components/layout/Header/Nav'
import ArrowDown from '../../static/svg/arrow-down.svg'

import { WorkCard, Banner } from '../components/common'

import { QuotesSlider, Contact } from '../components'

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
      <header>
        <ImageBackgroundWithGradient tag="section" fluid={image.sharp.fluid}>
          <NavBar menuColor="white" logoColor="white" />
          <Wrapper>
            <CapsHeadingSmallModifier>
              Web design and development agency
            </CapsHeadingSmallModifier>
            <H1Modifier>
              We help non-profits and impact-driven businesses drive positive
              social change in the tech sphere.
            </H1Modifier>
          </Wrapper>
          <ArrowWrapper>
            <ArrowImage src={ArrowDown} alt="arrow down" />
          </ArrowWrapper>
        </ImageBackgroundWithGradient>
      </header>
      <OurStorySection>
        <TextSection>
          <H2>
            Yalla is a collective of web developers, designers, project managers
            and strategists.
          </H2>
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
            So if you&apos;re looking for us to build a website, app, help you
            understand your users or anything in between, give us a shout!
          </MP>
        </TextSection>

        <Button
          title="Our Story"
          hasArrow
          onClick={() => navigate('/our-story')}
          capitalize
          primary
        />
      </OurStorySection>
      <OurApproachSection>
        <OurApproachBackground />
        <OurApproachHeadings>
          <H2>Our Approach + Services</H2>
        </OurApproachHeadings>
        <OurApproachWrapper>
          <ServicesBlock>
            <Service>
              <CapsHeadingLarge>DISCOVERY</CapsHeadingLarge>
              <MP>
                Strategy
                <br /> Discovery & Research
                <br /> User Experience
                <br /> Brand Strategy & Architecture
                <br /> Positioning
                <br /> Content Strategy
              </MP>
            </Service>
            <Service>
              <CapsHeadingLarge>Design</CapsHeadingLarge>
              <MP>
                UI/UX Design
                <br /> Stylescapes
                <br /> Wireframing / Mockups
                <br /> Prototypes
                <br /> UI Kits/Design Systems
              </MP>
            </Service>
            <Service>
              <CapsHeadingLarge>DIGITAL DEVELOPMENT</CapsHeadingLarge>
              <MP>
                Full stack development
                <br /> Information Architecture
                <br /> Prototypes
                <br /> Content Management Systems
                <br /> iOS Applications
                <br /> Web Applications
                <br /> Android Applications
              </MP>
            </Service>
          </ServicesBlock>
          <LearnMoreBlock>
            <H3>
              A user-centred approach is at the heart of everything we do.
            </H3>
            <Button
              title="Learn More"
              hasArrow
              onClick={() => navigate('/our-approach/')}
              capitalize
              primary
            />
          </LearnMoreBlock>
        </OurApproachWrapper>
      </OurApproachSection>
      <Banner>
        We work collaboratively with our clients and take pride in creating
        delightful user experiences.
      </Banner>
      <WorkSection id="case-studies">
        <H2>Featured Work + Case Studies</H2>
        <WorkCards>
          <WorkCard
            smallHeading="EARWIG - CONSTRUCTION"
            bigHeading="Building a powerful reviews platform setting new standards for workers in the construction industry"
            fileName="earwig-header"
            altText="work-earwig"
            link="earwig"
          />
          <WorkCard
            smallHeading="PRESSPAD - MEDIA & ACCOMMODATION"
            bigHeading="Designing and delivering a marketplace to bring diversity in media through mentorship & hosting"
            fileName="presspad-header"
            altText="work-presspad"
            link="presspad"
          />
          <WorkCard
            smallHeading="TEMPO - VOLUNTEERING"
            bigHeading="Delivering digital transformation for a leading UK charity to drive volunteering and community engagement"
            fileName="tempo-cover"
            altText="tempo-cover"
            link="tempo"
          />
        </WorkCards>
      </WorkSection>
      <TestimonialsSection>
        <QuotesSlider />
      </TestimonialsSection>
      <Contact />
    </Layout>
  )
}

export default IndexPage
