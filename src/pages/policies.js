import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Contact } from '../components'

import {
  HeadingWrapper,
  ImageBackground,
  Section,
  Images,
  EmailLink,
  StyledLink,
  P,
  Heading,
} from '../styles/policies'

import {
  CapsHeadingSmallModifier,
  H1Modifier,
  ArrowWrapper,
  ArrowImage,
} from '../styles/landing'

import NavBar from '../components/layout/Header/Nav'
import ArrowDown from '../../static/svg/arrow-down.svg'

import Img from '../components/image'

const PoliciesPage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "simon-joe-ramy-working.png" }) {
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
      <SEO title="Our policies" />
      <header>
        <ImageBackground tag="section" fluid={image.sharp.fluid}>
          <NavBar menuColor="white" logoColor="white" />
          <HeadingWrapper>
            <CapsHeadingSmallModifier>
              Web design and development agency
            </CapsHeadingSmallModifier>
            <H1Modifier>Our Policies</H1Modifier>
          </HeadingWrapper>
          <ArrowWrapper>
            <ArrowImage src={ArrowDown} alt="arrow down" />
          </ArrowWrapper>
        </ImageBackground>
      </header>

      {/* Introduction */}
      <Section>
        <Heading>Our policies</Heading>
        <P color="black">
          We believe in both building responsible products and being a
          responsible company. Below are a number of our key policies and
          certifications. If there is anything specific you would like from us,
          please contact us at{' '}
          <EmailLink
            href="mailto:hello@yallacooperative.com?Subject=Hello%20again"
            target="_top"
          >
            hello@yallacooperative.com
          </EmailLink>
        </P>

        <StyledLink
          href="https://drive.google.com/file/d/1y5HTRP7ggHE1hMIlvLbSprFuw1NyPh-b/view?usp=sharing"
          target="_blank"
        >
          Cyber Essentials Certification
        </StyledLink>

        <StyledLink
          href="https://drive.google.com/file/d/1eca62Cnw4U8eOKzqlhov70X9msovo8iW/view?usp=sharing"
          target="_blank"
        >
          Data Protection Policy
        </StyledLink>
        <StyledLink
          href="https://drive.google.com/file/d/1bdvdhhQQKiO19rMSB11b0jYA5qhSpeKV/view?usp=sharing"
          target="_blank"
        >
          Privacy Statement
        </StyledLink>
        <StyledLink
          href="https://drive.google.com/file/d/1ZZd-oE1rnqaCohaVwdDTpyGSAaYv96qr/view?usp=sharing"
          target="_blank"
        >
          Safeguarding Policy
        </StyledLink>
        <StyledLink
          href="https://drive.google.com/file/d/18FZPDoUUqAntiCq8dhitFQxsyQt0cBfZ/view?usp=sharing"
          target="_blank"
        >
          Equality and Diversity Policy
        </StyledLink>
        <StyledLink
          href="https://drive.google.com/file/d/1gkujBc5go4tAJEE5kgBBL0Bmb7iiONkB/view?usp=sharing"
          target="_blank"
        >
          Evidence of Public & Employers liability and professional indemnity
        </StyledLink>
      </Section>
      {isLaptop ? (
        <Images>
          <Img
            fileName="simon-ramy-ahmed-working"
            altText="digital"
            style={{
              height: '700px',
              width: '100%',
            }}
          />
        </Images>
      ) : (
        <Images>
          <Img fileName="simon-ramy-ahmed-working" altText="digital" />
        </Images>
      )}
      <Contact />
    </Layout>
  )
}

export default PoliciesPage
