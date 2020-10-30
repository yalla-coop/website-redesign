import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Cross from '../../static/svg/cross.svg'
import { size, letterSpacing, colors, spacings } from '../utils'

import { Wrapper as ContentWrapper } from '../components/contentWrapper'

const MenuWrapper = styled(ContentWrapper)`
  background: linear-gradient(
    180deg,
    rgba(183, 21, 64, 1) 0%,
    rgba(199, 62, 70, 1) 100%
  );
  color: white;
  height: 100vh;
  padding-top: 16px;
  padding-right: 16px;
`

export const Link = styled(GatsbyLink)`
  color: ${colors.white};
  font-size: ${size.md};
  letter-spacing: ${letterSpacing.small};
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 48px;
`

export const CrossIcon = styled.img`
  svg {
    color: white;
  }

  width: 48px;
  margin-bottom: ${spacings[7]};
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
