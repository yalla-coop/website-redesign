import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NavBar from '../components/layout/Header/Nav'
import MemberCard from '../components/MemberCard'
import Button from '../components/elements/Button'
import { Small as AccentSmall } from '../components/elements/Accent'
import ArrowDown from '../../static/svg/arrow-down.svg'
import { H3, H2, MP } from '../components/elements'
import {
  Header,
  AboutSection,
  TitleMobile,
  TeamSection,
  AccentContainer,
  ImageBackground,
  AccentLarge,
  CardsContainer,
  AccentTitle,
  TextWrapper,
  CapsHeadingSmallModifier,
  PageTitle,
  ArrowContainer,
  ArrowImage,
} from '../styles/ourTeam'
import ourTeam from '../utils/data/ourTeam'

const OurStory = () => {
  const {
    image,
    joe,
    ramy,
    ahmed,
    simon,
    jem,
    fadi,
    cemal,
    beth,
    kristina,
    israa,
  } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "our-story.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      joe: file(relativePath: { eq: "joe.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      simon: file(relativePath: { eq: "simon.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ramy: file(relativePath: { eq: "ramy.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ahmed: file(relativePath: { eq: "ahmed.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jem: file(relativePath: { eq: "jem.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fadi: file(relativePath: { eq: "fadi.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cemal: file(relativePath: { eq: "cemal.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beth: file(relativePath: { eq: "beth.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kristina: file(relativePath: { eq: "kristina.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      israa: file(relativePath: { eq: "israa.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const images = {
    joe,
    ramy,
    simon,
    ahmed,
    jem,
    fadi,
    cemal,
    beth,
    kristina,
    israa,
  }
  const membersData = ourTeam.map(member => ({
    ...member,
    image: images[member.key],
  }))
  return (
    <Layout>
      <SEO title="Our Story" />
      <Header>
        <ImageBackground tag="section" fluid={image.sharp.fluid}>
          <NavBar menuColor="white" logoColor="white" />
          <TextWrapper>
            <CapsHeadingSmallModifier>
              Web design and development agency
            </CapsHeadingSmallModifier>
            <PageTitle>Our Story + Team</PageTitle>
          </TextWrapper>
          <ArrowContainer>
            <ArrowImage src={ArrowDown} alt="arrow down" />
          </ArrowContainer>
        </ImageBackground>
      </Header>
      {/* about section */}
      <AboutSection>
        <H2>
          We’re a collective of web developers and designers, working together
          across Europe and Gaza, united by our vision to use technology to
          transcend borders and deliver true positive impact.
        </H2>
        <MP>
          The internet means we are all connected regardless of where we come
          from and at Yalla we want to make the most of that! We are made up of
          talented designers, developers, project managers and strategists, all
          focused on building digital products with an emphasis on driving
          social good through everything we do.
        </MP>
        <MP>
          We work with charities, non-profits, start ups and impact-driven
          businesses, helping them get to the heart of the problems they’ve
          looking to solve and delivering the products their users’ need
        </MP>
        <MP>
          So whether you&apos;re looking for a new website, an app, UX design,
          workshops or anything similar, contact us and we can chat.
        </MP>

        {/* hide story button for first release */}

        <Button
          title="GET IN TOUCH"
          hasArrow
          onClick={() => null}
          capitalize
          primary
        />
      </AboutSection>
      {/* members section */}
      <TitleMobile>
        <AccentSmall
          css={css`
            position: absolute;
            left: 20px;
            top: -16px;
          `}
        />
        <H3
          css={css`
            margin-left: 50px;
          `}
        >
          Our Team
        </H3>
      </TitleMobile>
      <TeamSection>
        <AccentContainer>
          <AccentLarge />
          <AccentTitle>Our Team</AccentTitle>
        </AccentContainer>
        <CardsContainer>
          {membersData.map(member => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <MemberCard {...member} />
          ))}
        </CardsContainer>
      </TeamSection>
    </Layout>
  )
}

export default OurStory
