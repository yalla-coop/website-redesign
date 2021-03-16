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

const TempoCaseStudy = () => {
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
      <SEO title="Tempo Case Study" />
      <header>
        <ImageBackground tag="section" fluid={image.sharp.fluid}>
          <NavBar menuColor="white" logoColor="white" />
        </ImageBackground>
      </header>

      <Context>
        <H2>
          Delivering digital transformation for a leading UK charity, creating a
          digital volunteering recognition platform that engages people in
          communities
        </H2>
      </Context>

      <IntroAndMetaSection>
        <MetaDataContainer>
          <MetaData title="CLIENT" text={['Tempo']} />
          <MetaData title="SECTOR" text={['Volunteering']} />
          <MetaData
            title="DELIVERABLES"
            text={[
              'Digital Transformation',
              'User Testing',
              'Content Strategy',
              'User Experience',
              'UI/UX Design',
              'UI Kits/Design Systems',
              'Prototypes',
              'Full stack development',
              'Information Architecture',
              'Prototypes',
              'Web Applications',
            ]}
          />
        </MetaDataContainer>

        <WhereItAllStartedSection>
          <Subtitle title="Where It All Started" size="small" />
          <MP>
            Tempo Time Credits is the largest time recognition scheme in the UK.
            They work in partnership with organisations across the UK to involve
            more people in their communities.
          </MP>
          <MP>
            Tempo Time Credits encourage more people to get involved in
            volunteering and enjoy the benefits it brings - like feeling
            healthier and happier, learning new skills, making new friends and
            gaining confidence.
          </MP>
        </WhereItAllStartedSection>
      </IntroAndMetaSection>

      <WhereWeCameInSection>
        <Subtitle title="Where We Came In" size="small" />
        <MP>
          Tempo had grown organically over 10 years, achieving great success.
          However, this had also meant legacy, mostly off-line processes that
          they had identified a need to move away from to ensure they could
          continue to grow and deliver on their ambitious strategy. Digitisation
          of Tempo Time Credits offered a way to address these challenges and
          open up other transformative opportunities.
        </MP>
        <MP>
          They required a digital partner to work with them across this journey,
          right from understanding the problems and those who use Time Credits
          (volunteers, community groups, recognition partners and staff) through
          to design and eventual deployment of a new digital platform.
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
          1.0 Creating a digital transactions application and online discovery
          platform
        </H3>
        <MP>
          The now deployed digital tool has much the same functionality you
          might expect from financial apps from Santander to Monzo. Users are
          able to:
        </MP>
        <MP>- See their balance</MP>
        <MP>
          - View their transactions history, including details on each
          individual transaction
        </MP>
        <MP>- Make booking requests and accept booking requests</MP>
        <MP>- Earn and use Time Credits online or in person</MP>
        <MP>
          The platform also serves as a marketplace to promote ways people can
          earn and spend Time Credits:
        </MP>
        <MP>
          - Members can find opportunities to earn and use Time Credits based on
          location and interests
        </MP>
        <MP>- Staff and partners can add and manage profiles and activities</MP>
        <MP>
          And finally, it&apos;s an easy way for communities and organisations
          to manage their volunteering activity:
        </MP>
        <MP>- View and manage volunteers</MP>
        <MP>- Give out Time Credits for volunteering activity</MP>
        <MP>- Invite new volunteers</MP>
        <H3>2.0 Enabling deep insights into impact while protecting users</H3>
        <MP>
          A big part of the work was to ensure Tempo had much better oversight
          on the Time Credits ecosystem. The physical process meant it was very
          hard to track where Time Credits were being earned, used and the
          impact being delivered.
        </MP>
        <MP>
          We created a dashboard that enabled the tracking of every single Time
          Credit, right from when it was first issued through to being redeemed
          with a Recognition Partner. With data visualisation, management
          features and the ability to export, this gave Tempo granular details
          to truly understand how Time Credits were being used and to measure
          the impact internally and for partners.{' '}
        </MP>
        <MP>
          However, throughout all of this a key focus for Tempo was always to
          protect the privacy of their users. We worked closely with them
          through design, continual user testing and security testing to ensure
          only the data that was absolutely needed was collected and shared,
          following best practices throughout.{' '}
        </MP>

        <H3>3.0 Release-based user-centred development</H3>
        <MP>
          The goals for the product were ambitious. There were lots of features
          that all seemed important and a number of different types of users,
          all with very different needs, behaviours and attitudes to technology.
          So it was important to break the work down into a series of short
          design and development bursts and releases, to ensure we were
          continually going back to the user to test and make sure we were
          developing the features they wanted, in a way they could use them.
        </MP>
        <MP>
          This also meant Tempo and ourselves could review our processes,
          constantly looking to learn and improve our ways of working as a team.
        </MP>
        <MP>
          This iterative process was also useful considering the impact of
          Covid-19. Working closely with Tempo we quickly pivoted feature
          priorities to include opportunities for earning / using Time Credits
          that can exist purely online, ensuring Tempo can still support
          communities while physical access is so limited.
        </MP>
        <H3>4.0 Developing with long-term scaleability</H3>
        <MP>
          A key aim, as with all our products, is to build in a sustainable way
          that ensures you can continue to develop your products beyond any work
          you&apos;ve booked in with us. This means developing with a strategy
          to minimise technical debt, and transparency with our partners so they
          fully understand and have ownership of the product we help develop
          with you. Right from the start we always involved Tempo in all parts
          of the decision making, explaining our reasoning for technologies we
          used and the overall data architecture.
        </MP>
        <MP>
          Following our initial work and deployment of the digital product, we
          have agreed further iterations with Tempo going into 2021, building on
          our existing ways of working to ensure the product to continues to
          develop always with the user&apos;s needs at the centre.
        </MP>
        <Button
          as="a"
          title="Check out Tempo"
          hasArrow
          href="https://tempotimecredits.org/use"
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
          person="JUDE LUCKETT"
          position="Product Development Lead"
          headline="Yalla have been central to the successful development of online Time
          Credits... I wholeheartedly recommend working with them!"
        >
          <MP>
            Yalla have been central to the successful development of online Time
            Credits, which was a significant investment in digital
            transformation by Tempo. Working with Yalla has been absolutely
            brilliant – they are insightful, creative, energetic and very hard
            working, always going the extra mile to ensure success.
          </MP>
          <MP>
            They have helped us build in-house skills and capacity and worked in
            partnership with us – we’ve really felt like one team. I
            wholeheartedly recommend working with them!
          </MP>
        </Quote>
      </TestimonialsSection>
      <Contact />
    </Layout>
  )
}

export default TempoCaseStudy
