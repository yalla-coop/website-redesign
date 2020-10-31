import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Cross from '../../static/svg/cross.svg'
import { size, letterSpacing, colors, spacings, breakpoints } from '../utils'

import { Wrapper as ContentWrapper } from '../components/contentWrapper'

const MenuWrapper = styled(ContentWrapper)`
  background: linear-gradient(
    180deg,
    rgba(183, 21, 64, 1) 0%,
    rgba(199, 62, 70, 1) 100%
  );
  color: white;
  height: 100vh;
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
  font-size: ${size.md};
  letter-spacing: ${letterSpacing.small};
  font-weight: 700;
  text-decoration: none;
  margin-bottom: ${spacings[6]};

  ${breakpoints.tabletVertical} {
    text-align: center;
  }

  ${breakpoints.laptopLarge} {
    font-size: ${size.xl};
    padding-bottom: ${spacings[6]};
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
    width: 64px;
    margin-right: ${spacings[4]};
    margin-bottom: ${spacings[9]};
  }
`

const MenuPage = () => (
  <Layout noFooter>
    <MenuWrapper>
      <GatsbyLink to="/" style={{ alignSelf: 'flex-end' }}>
        <CrossIcon src={Cross} alt="cross icon" />
      </GatsbyLink>
      <SEO title="Menu" />
      <Link to="/">Home</Link>
      <Link to="/our-approach">Our Approach + Services</Link>
    </MenuWrapper>
  </Layout>
)

export default MenuPage
