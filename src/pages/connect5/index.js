import React from 'react'
import { useMediaQuery } from 'react-responsive'
import {
  Image,
  Subtitle,
  H2,
  MetaData,
  MP,
  H3,
  Button,
  Quote,
  Contact,
} from '../../components'
import NavBar from '../../components/layout/Header/Nav'
import Layout from '../../components/layout'
import { CapsHeadingLargeModifier } from '../../styles/landing'
import {
  BackgroundWithGradient,
  LogoContainer,
  PhoneContainer,
  TitleSection,
  MetaDataContainer,
  WhereItAllStartedSection,
  ImagesWrapper,
  WhereWeCameSection,
  WhatWeDeliveredSection,
  QuoteSection,
} from './styles'
import { Context } from '../../styles/caseStudies'
import { colors } from '../../utils'

const Connect5CaseStudy = () => {
  const isIpadOrBigger = useMediaQuery({
    minWidth: 680,
  })

  return (
    <Layout>
      <NavBar menuColor="black" logoColor="black" />
      <BackgroundWithGradient>
        <LogoContainer>
          <Image
            fileName="connect5"
            altText="connect 5 logo in the background"
            style={{
              width: '100%',
            }}
          />
        </LogoContainer>
      </BackgroundWithGradient>
      {isIpadOrBigger && (
        <PhoneContainer>
          <Image
            fileName="connect5-mobile"
            altText="connect 5 app in a mobile"
          />
        </PhoneContainer>
      )}

      <TitleSection>
        <CapsHeadingLargeModifier color={colors.gray3}>
          WEBSITE DESIGN AND DEVELOPMENT
        </CapsHeadingLargeModifier>
        <H2 color={colors.black}>
          Creating an end-to-end management + reporting tool to improve delivery
          of training in mental health
        </H2>
      </TitleSection>

      <MetaDataContainer>
        <MetaData title="DELIVERABLES" text={['c5. training']} />
      </MetaDataContainer>

      <WhereItAllStartedSection>
        <Subtitle title="WHERE IT ALL STARTED" size="small" />
        <MP>
          Connect 5 is a UK-wide mental health promotion training programme. It
          is designed to increase the confidence and core skills of front line
          staff so that they can be more effective in having conversations about
          mental health and wellbeing, help people to manage mental health
          problems and increase their resilience and mental wellbeing through
          positive changes.
        </MP>
      </WhereItAllStartedSection>
      <ImagesWrapper>
        <Image
          fileName="connect-intro-2"
          altText="connect 5 app in a mobile"
          style={{
            width: `${isIpadOrBigger ? '40%' : '100%'}`,
          }}
        />
        {isIpadOrBigger && (
          <Image
            fileName="connect-intro-1"
            altText="connect 5 app in a mobile"
            style={{ width: '40%' }}
          />
        )}
      </ImagesWrapper>
      <WhereWeCameSection>
        <Subtitle title="WHERE WE CAME IN" size="small" />
        <MP>
          The entire process of delivery was manual with no joined-up system for
          management or reporting. Each group of trainers across the UK had
          created their own ways of setting up training sessions, inviting
          participants and storing feedback. While there was a survey to capture
          participant feedback, this was often filled in on paper. This made it
          very difficult to evaluate and demonstrate the impact of the training
          - right from individual trainers wanting to improve through to the top
          Connect 5 management needing insights into the overall training
          programme.
        </MP>
      </WhereWeCameSection>
      <Image fileName="connect-figma" altText="connect 5 designs" />
      <WhatWeDeliveredSection>
        <Subtitle title="What We Delivered" size="small" />
        <H3>
          1.0 Building a platform with the functionality of Airbnb (but without
          the ££££ VC investment!)
        </H3>
        <MP>
          This was a complex problem with many areas you could work on, which
          can quickly lead to bulky digital products. So we carried out a series
          of design workshops to break down the problems and define the highest
          priority user and problem.
        </MP>
        <H3>2.0 Building a prototype to help secure further investment</H3>
        <MP>
          After exploring and breaking down Connect 5’s problem, we eventually
          identified an initial minimum viable product that helped trainers have
          participants fill in a survey on the app and have this data visualised
          in real-time. This initial MVP helped secure additional funding and we
          have continued to iterate over the past year, carrying out user
          testing throughout, to develop a training app which enables trainers
          to handle the entire Connect 5 process within a single app - training
          session set up / management, participant surveys, and visualised data
          feedback.
        </MP>
        {/* // TODO: add a link to connect 5 here */}
        <Button
          title="CHECK OUT CONNECT 5"
          hasArrow
          capitalize
          primary
          onClick={() => {}}
        />
      </WhatWeDeliveredSection>
      <Image
        fileName="connect-devices"
        altText="connect 5 app in a mobile and desktop"
      />
      <Context>
        <QuoteSection>
          <Quote
            headline="The people building my app demonstrated high quality levels of attention + application to produce a product which exactly serves my project’s needs."
            person="ELYSABETH WILLIAMS"
            position="FOUNDER"
          >
            <MP>
              It is a project that is highly complex; with different levels of
              users, different sessions and complex data collection pathways.
              The team, listened closely to me (who has no knowledge app
              building) asked questions that got beneath the skin of what was
              needed. I felt they really understood my product and my needs. The
              time I spent with the team and the interactions always felt
              productive as well as being a pleasure.
            </MP>
            <MP>
              Despite my demanding a lot from Yalla in terms of quality ​and​
              quantity of work, they have given me precisely what I dreamt about
              building and they’ve done it fast, too. Thanks to Yalla, I’ve been
              able to realise my product vision with a robust MVP and I’m well
              on the way to achieving my impact goals.
            </MP>
            <MP>
              I would highly recommend Yalla if you’ve got a product vision and
              are looking for real, trustworthy and hardworking people to
              accompany you along the way.
            </MP>
          </Quote>
        </QuoteSection>
      </Context>
      <Contact />
    </Layout>
  )
}
export default Connect5CaseStudy
