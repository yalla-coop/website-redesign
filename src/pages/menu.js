import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link as GatsbyLink, navigate } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { CapsHeadingSmall, XSP } from '../components'
import Cross from '../../static/svg/cross.svg'
import { size, letterSpacing, colors, spacings, breakpoints } from '../utils'

import { Wrapper as ContentWrapper } from '../components/contentWrapper'

const moveInLeft = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-3rem);
  } 
`

const moveHalfWayLeft = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-8rem);
  } 
`

const MenuWrapper = styled(ContentWrapper)`
  background: ${colors.secondary};
  color: white;
  min-height: 100vh;
  padding-top: ${spacings[3]};
  padding-right: ${spacings[3]};

  ${breakpoints.laptop} {
    padding-left: 0;
    padding-right: 0;
  }

  ${breakpoints.laptopLarge} {
    padding-top: ${spacings[4]};
    padding-bottom: ${spacings[6]};
    padding-left: 0;
    padding-right: 0;
  }
`

export const Link = styled(GatsbyLink)`
  color: ${colors.white};
  letter-spacing: ${letterSpacing.small};
  font-weight: 700;
  text-decoration: none;
  margin-bottom: ${spacings[6]};

  display: flex;
  align-items: center;

  ${breakpoints.tabletVertical} {
    text-align: center;
  }

  ${breakpoints.laptopLarge} {
    font-size: ${size.lg};
    padding-bottom: ${spacings[6]};
  }

  ${breakpoints.laptop} {
    width: 45%;
  }
`

const LinkNumber = styled.span`
  font-size: ${size.lg};
  margin-right: 1rem;
  color: rgba(255, 255, 255, 0.2);

  ${breakpoints.mobileMedium} {
    font-size: ${size.xl};
  }

  ${breakpoints.tabletVertical} {
    font-size: 15rem;
    font-weight: 400;
  }
`

const LinkText = styled.span`
  display: inline-block;
  font-size: ${size.s};

  animation: 1.5s ${moveInLeft} ease;
  animation-fill-mode: forwards;

  ${breakpoints.tabletVertical} {
    font-size: ${size.lg};
    animation: 2s ${moveInLeft} ease;
    animation-fill-mode: forwards;
  }

  ${breakpoints.laptop} {
    font-size: ${size.lg};
    animation: 2s ${moveHalfWayLeft} ease;
    animation-fill-mode: forwards;
  }
`

const LinksWrapper = styled.div`
  ${breakpoints.laptop} {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

export const CrossIcon = styled.img`
  svg {
    color: white;
  }

  width: 48px;
  margin-bottom: ${spacings[7]};

  ${breakpoints.laptop} {
    margin-right: ${spacings[3]};
  }

  ${breakpoints.laptopLarge} {
    margin-right: ${spacings[4]};
    margin-bottom: ${spacings[9]};
  }
`

export const AddressesBlock = styled.address`
  display: flex;
  font-style: normal;
  div {
    width: 30%;
    p {
      color: ${colors.white};
    }
  }
`

export const WhereWeAreSection = styled.div`
  margin-top: ${spacings[9]};
  margin-left: ${spacings[9]};
  width: 40%;
  h3 {
    margin-bottom: ${spacings[4]};
  }

  ${breakpoints.laptopLarge} {
    margin-top: ${spacings[6]};
    margin-left: ${spacings[6]};
  }
`

const MenuPage = () => {
  const isIpadOrBigger = useMediaQuery({
    minWidth: 680,
  })
  return (
    <Layout noFooter>
      <MenuWrapper>
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{
            alignSelf: 'flex-end',
            background: 'none',
            border: 'none',
            textDecoration: 'none',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          <CrossIcon src={Cross} alt="cross icon" />
        </button>
        <SEO title="Menu" />
        <LinksWrapper>
          <Link to="/our-approach">
            <LinkNumber>1.0</LinkNumber>
            <LinkText>Our Approach + Services</LinkText>
          </Link>
          <Link to="/#case-studies">
            <LinkNumber>2.0</LinkNumber>
            <LinkText>Our Work + Case Studies</LinkText>
          </Link>
          <Link to="/our-story">
            <LinkNumber>3.0</LinkNumber>
            <LinkText>Our Story + Team</LinkText>
          </Link>
          <Link to="/contact-us">
            <LinkNumber>4.0</LinkNumber>
            <LinkText>Get in touch</LinkText>
          </Link>
          <Link to="/policies">
            <LinkNumber>5.0</LinkNumber>
            <LinkText>Our Policies</LinkText>
          </Link>
        </LinksWrapper>
        {isIpadOrBigger && (
          <WhereWeAreSection>
            <CapsHeadingSmall>WHERE WE ARE</CapsHeadingSmall>
            <AddressesBlock>
              <div>
                <CapsHeadingSmall>london</CapsHeadingSmall>
                <XSP>
                  149 Fonthill Rd <br /> Finsbury Park <br /> London <br /> N4
                  3HF
                </XSP>
              </div>
              <div>
                <CapsHeadingSmall>germany</CapsHeadingSmall>
                <XSP>Remote locations</XSP>
              </div>
              <div>
                <CapsHeadingSmall>gaza</CapsHeadingSmall>
                <XSP>
                  Capital Mall
                  <br /> Omar Almokhtar <br /> Alrimal
                </XSP>
              </div>
            </AddressesBlock>
          </WhereWeAreSection>
        )}
      </MenuWrapper>
    </Layout>
  )
}

export default MenuPage
