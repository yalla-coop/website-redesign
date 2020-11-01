import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavBar from '../components/layout/Header/Nav'
import Image from '../components/image'
// import MetaData from '../components/common/MetaData'

import { H2, H3, H4, MP } from '../components/elements'
import {
  ImageBackgroundWithGradient,
  CapsHeadingSmallModifier,
  CapsHeadingLargeModifier,
  H1Modifier,
  Wrapper,
  ArrowWrapper,
  ArrowImage,
  TestimonialsSection,
  QuoteIcon,
} from '../styles/landing'

import Subtitle from '../components/Subtitle'

import {
  // Deliverables,
  Context,
  WhereItAllStartedSection,
  WhereWeCameInSection,
  WhatWeDeliveredSection,
  Link,
} from '../styles/earwig'
import ArrowDown from '../../static/svg/arrow-down.svg'

const EarwigCaseStudy = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "earwig-header.png" }) {
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
      <SEO title="Earwig Case Study" />
      <header>
        <ImageBackgroundWithGradient tag="section" fluid={image.sharp.fluid}>
          <NavBar menuColor="white" logoColor="white" />
          <Wrapper>
            <CapsHeadingSmallModifier>
              Web design and development agency
            </CapsHeadingSmallModifier>
            <H1Modifier>
              Building a powerful reviews platform setting new standards for
              workers in the construction industry
            </H1Modifier>
            <ArrowWrapper>
              <ArrowImage src={ArrowDown} alt="arrow down" />
            </ArrowWrapper>
          </Wrapper>
        </ImageBackgroundWithGradient>
      </header>

      {/* <Deliverables>
        <MetaData title="client" text={['earwig']} />
        <MetaData title="SECTOR" text={['Construction']} />
        <MetaData
          title="DELIVERABLES"
          text={[
            'User Experience',
            'UI Kits/Design',
            'Systems Prototypes',
            'Full stack development',
            'Information Architecture',
            'Content Management Systems',
            'Web Applications',
          ]}
        />
      </Deliverables> */}

      <Context>
        <H2>
          Earwig is a start up company looking to provide more accountability,
          security and community within the construction industry.
        </H2>
        <MP>
          Their mission is to build a worker-led community that give
          construction workers a voice and sets new standards for construction
          jobs.
        </MP>
      </Context>

      <WhereItAllStartedSection>
        <Subtitle title="Where It All Started" size="small" />
        <MP>
          earwig is a start up company looking to provide more accountability,
          security and community within the construction industry. Their mission
          is to build a worker-led community that give construction workers a
          voice and sets new standards for construction jobs.
        </MP>
        <MP>
          Here’s a video explaining that problem they’re looking to solve:
        </MP>
      </WhereItAllStartedSection>
      {isLaptop ? (
        <WhereItAllStartedSection style={{ paddingBottom: '64px' }}>
          <iframe
            title="earwig introduction"
            src="https://www.youtube.com/embed/Na1f8movCcw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              height: '600px',
              width: '100%',
            }}
          />
        </WhereItAllStartedSection>
      ) : (
        <iframe
          title="earwig introduction"
          src="https://www.youtube.com/embed/Na1f8movCcw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            height: '300px',
            width: '100%',
          }}
        />
      )}

      <WhereWeCameInSection>
        <Subtitle title="Where We Came In" size="small" />
        <MP>
          earwig asked us to create a brand new reviews-based platform from
          scratch for them to do this. It would need to enable workers to share
          experiences and information, but importantly protect their identity
          while ensuring all input was verified. Working in partnership with
          their in-house resources, we took the product from a design prototype
          through to full implementation.
        </MP>
      </WhereWeCameInSection>
      {isLaptop ? (
        <WhereWeCameInSection style={{ paddingTop: 0 }}>
          <Image
            fileName="earwig-figma"
            altText="earwig styles and wire frames in Figma"
            style={{
              width: '100%',
            }}
          />
        </WhereWeCameInSection>
      ) : (
        <Image
          fileName="earwig-figma"
          altText="earwig styles and wire frames in Figma"
          style={{
            width: '100%',
          }}
        />
      )}

      <WhatWeDeliveredSection>
        <Subtitle title="What We Delivered" size="small" />
        <H3>1.0 Understanding the client and their needs</H3>
        <MP>
          earwig had carried out extensive user research and testing of initial
          design prototypes, so we first ran workshops to do a user and design
          audit, assessing what stage of the process they were at to agree the
          most efficient way for us to work with them.
        </MP>
        <MP>
          This involved breaking down every user and user journey, prioritising
          to ensure we can deliver the quickest prototype to take back for
          further testing.
        </MP>

        <H3>2.0 Delivering the very first product iteration of earwig</H3>
        <MP>
          By the end of the first development sprint we had built a reviews
          platform which enabled users to:
        </MP>
        <MP>- Securely sign up and create accounts, verified by admin</MP>
        <MP>
          - Search and read reviews for Agencies, Payrolls, Worksites and
          Companies
        </MP>
        <MP>- Review any organisation with their identity protected </MP>

        <MP>
          This iteration enabled earwig to do further user testing as well as a
          prototype to secure investment from leading construction companies.
        </MP>

        <H3>
          3.0 Growing from prototype to full national rollout through continuous
          iterations
        </H3>
        <MP>
          Following feedback from both users and the client, we have continued
          to iterate on the product building in features - from voice messages
          to a rewards-based system - as well as continuously improving on the
          existing user flows.
        </MP>
        <MP>
          We are still the sole development team working on the project, with
          further development plans in place following the next phase of user
          testing.
        </MP>
        <Link href="https://www.earwigwork.com/">Check out Earwig here!</Link>
      </WhatWeDeliveredSection>
      <Image fileName="earwig-phones" altText="Earwig app on mobile devices" />

      <TestimonialsSection style={{ marginTop: 0 }}>
        <QuoteIcon>“</QuoteIcon>
        <H4>
          Despite my demanding a lot from Yalla in terms of quality ​and​
          quantity of work, they have given me precisely what I dreamt about
          building and they’ve done it fast, too.
        </H4>
        <MP>
          I’ve been working with Yalla for six months and the word I would use
          to describe them best is ‘reliable.’ At first I was concerned about
          hiring Yalla because the ‘remote’ development aspect made me feel like
          I wouldn’t have the closeness I felt I needed, especially as a virgin
          founder with zero product experience. But Yalla made me feel in
          control and included from day 1 by being well structured, reliable and
          honest.
        </MP>
        <MP>
          I would highly recommend Yalla if you’ve got a product vision and are
          looking for real, trustworthy and hardworking people to accompany you
          along the way.
        </MP>
        <CapsHeadingLargeModifier>HARRISON MOORE</CapsHeadingLargeModifier>
        <MP>CEO</MP>
      </TestimonialsSection>
    </Layout>
  )
}

export default EarwigCaseStudy
