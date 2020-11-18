import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavBar from '../components/layout/Header/Nav'
import Image from '../components/image'

import { H2, H3, MP, Button } from '../components/elements'
import { TestimonialsSection } from '../styles/landing'

import { IntroAndMetaSection, MetaDataContainer } from '../styles/caseStudies'

import { ImageBackground } from '../styles/ourApproach'

import Subtitle from '../components/Subtitle'
import { Contact, Quote, MetaData } from '../components'

import { WhereWeCameInSection } from '../styles/earwig'

import {
  Context,
  WhereItAllStartedSection,
  WhatWeDeliveredSection,
} from '../styles/presspad'

const PressPadCaseStudy = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "presspad-header.png" }) {
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
      <SEO title="PressPad Case Study" />
      <header>
        <ImageBackground tag="section" fluid={image.sharp.fluid}>
          <NavBar menuColor="white" logoColor="white" />
        </ImageBackground>
      </header>

      <Context>
        <H2>
          Designing and delivering a marketplace to bring diversity in media
          through mentorship & hosting
        </H2>
      </Context>

      <IntroAndMetaSection>
        <MetaDataContainer>
          <MetaData title="CLIENT" text={['PressPad']} />
          <MetaData title="SECTOR" text={['Media & Accommodation']} />
          <MetaData
            title="DELIVERABLES"
            text={[
              'User Testing',
              'Content Strategy',
              'User Experience',
              'UI/UX Design',
              'UI Kits/Design Systems',
              'Prototypes',
              'Full stack development ',
              'Information Architecture',
              'Prototypes',
              'Web Applications',
            ]}
          />
        </MetaDataContainer>

        <WhereItAllStartedSection>
          <Subtitle title="Where It All Started" size="small" />
          <MP>
            PressPad is a social enterprise that matches young journalists with
            host-mentors. In 2018 the Sutton Trust estimated that it costs a
            young person £1,019 a month to do unpaid internships in London where
            the best media opportunities are found. This prices out talented,
            diverse people who cannot afford to work for free or who don’t have
            friends/family to stay with.
          </MP>
          <MP>
            PressPad significantly lowers these costs by matching such people
            with professional journalists in London with a spare room who act as
            hosts *and mentors* for those completing placements. Our service
            levels the playing field thus diversifying the media industry.
          </MP>
        </WhereItAllStartedSection>
      </IntroAndMetaSection>

      <WhereWeCameInSection>
        <Subtitle title="Where We Came In" size="small" />
        <MP>
          PressPad were doing all of their matching completely manually.
          Considering the long process required in signing up, verifying people,
          finding matches, safeguarding, and handling invoices, this was
          unscaleable and PressPad approached us to help create a digital
          solution.
        </MP>
        <MP>
          They needed the very first iteration, built cost and time efficiently
          but designed to ensure it could scale as the enterprise continued to
          grow.
        </MP>
      </WhereWeCameInSection>
      {isLaptop ? (
        <WhereWeCameInSection style={{ paddingTop: 0 }}>
          <Image
            fileName="presspad-figma"
            altText="presspad styles and wire frames in Figma"
            style={{
              width: '100%',
            }}
          />
        </WhereWeCameInSection>
      ) : (
        <Image
          fileName="presspad-figma"
          altText="presspad styles and wire frames in Figma"
          style={{
            width: '100%',
          }}
        />
      )}

      <WhatWeDeliveredSection>
        <Subtitle title="What We Delivered" size="small" />
        <H3>
          1.0 Building a platform with the functionality of Airbnb (but without
          the ££££ VC investment!)
        </H3>
        <MP>
          By the end of the first release we had built an online marketplace
          where users could:
        </MP>
        <MP>- Create a listing for their home for potential interns to stay</MP>
        <MP>
          - Securely sign up and create profiles whether they are an intern,
          host or organisation
        </MP>
        <MP>- Make booking requests and accept booking requests</MP>
        <MP>
          - Complete payments and add/withdraw money from their PressPad
          accounts
        </MP>

        <H3>2.0 User centred design for a whole bunch of different users</H3>
        <MP>
          Marketplace platforms are always complex due to the different users
          you need to cater on each end of the product, each with their own
          individual needs (think eBay and creating something that both people
          can use as buyers and sellers)
        </MP>
        <MP>For PressPad there were 4 key users:</MP>
        <MP>- The intern looking for somewhere to stay</MP>
        <MP>- The host looking to provide support through their home </MP>
        <MP>
          - The PressPad staff needing to verify users, carry out invoicing and
          ensure the platform is safe and reliable to use from initial searching
          through to moving in{' '}
        </MP>
        <MP>
          With this diverse range of user types it&apos;s even more important to
          understand each user through building user personas, identifying their
          needs and continuously testing their user experience throughout the
          platform.
        </MP>

        <H3>3.0 Enabling fast and secure financial transactions</H3>
        <MP>
          At the heart of PressPad users need to be able to exchange money -
          whether it&apos;s an intern paying for upcoming accommodation, a host
          withdrawing funds or donating to PressPad, or organisations add funds
          to provide financial support for their interns.
        </MP>
        <MP>
          Using a popular third-party tool, Stripe, and integrating within the
          data architecture of our PressPad product, we quickly built a reliable
          way to cover all these transactions, with a sandbox phase to ensure
          every case could be safely tested.
        </MP>
        <H3>4.0 Scaling with the user at the centre of what we do </H3>
        <MP>
          After a public roll out of the beta version at the start of 2020,
          receiving national coverage, PressPad have committed to a long term
          release plan with us which will include multiple iterations across the
          first half of 2020. We are about to start the next phase of user
          testing using the existing platform and wireframes to ensure the
          platform continues to grow in exactly the right way to meet our
          users&apos; needs.
        </MP>
        <Button
          as="a"
          title="Check out Presspad"
          hasArrow
          href="https://presspad.co.uk/"
          target="_blank"
          capitalize
          primary
          style={{
            textDecoration: 'none',
            width: '250px',
            marginTop: isLaptop ? '48px' : '24px',
          }}
        />
      </WhatWeDeliveredSection>
      <Image
        fileName="presspad-mockups"
        altText="PressPad app on desktop and mobile devices"
      />

      <TestimonialsSection>
        <Quote
          person="OLIVIA CRELLIN"
          position="CEO"
          headline=" Their team initially really appealed to a social enterprise like
          PressPad because of their unique set-up utilising programming talent
          in Gaza and bringing work to an economically maligned and war-torn
          region."
        >
          <MP>
            Joe and the Yalla team have been fantastic to work with. It soon
            became clear that [working with this remote team] set up was just a
            bonus on top of the flexible, economically-viable and conscientious
            way they go about work for their clients.
          </MP>
          <MP>
            Endlessly patient with someone like myself who has limited technical
            expertise and has never built a website from scratch, Joe has been a
            great communicator working around my schedule, availability and
            disaster of an email inbox! Honest and pragmatic while at the same
            time remaining supportive and ambitious, I would thoroughly
            recommend working with the team to date!
          </MP>
        </Quote>
      </TestimonialsSection>
      <Contact />
    </Layout>
  )
}

export default PressPadCaseStudy
