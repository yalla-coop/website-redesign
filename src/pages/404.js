import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Wrapper as ContentWrapper } from '../components/contentWrapper'
import { H1 } from '../components/elements/typography'
import { breakpoints, spacings, size, psize } from '../utils'

export const NotFoundWrapper = styled(ContentWrapper)`
  background: rgb(2, 15, 29);
  background: linear-gradient(
    180deg,
    rgba(2, 15, 29, 1) 0%,
    rgba(4, 32, 61, 1) 50%
  );
  height: 100vh;
`

export const H1Modifier = styled(H1)`
  text-align: center;
  color: white;

  ${breakpoints.mobileSmall} {
    font-size: 8rem;
    margin-bottom: ${spacings[4]};
    padding-top: 10vh;
  }

  ${breakpoints.tabletVertical} {
    font-size: 12rem;
  }

  ${breakpoints.laptopLarge} {
    font-size: 20rem;
    letter-spacing: 0.8rem;
  }
`

export const Info = styled.p`
  color: white;
  font-weight: bold;
  text-align: center;

  ${breakpoints.mobileSmall} {
    font-size: ${psize.l};
  }

  ${breakpoints.laptopLarge} {
    font-size: ${size.md};
  }
`

const NotFoundPage = () => (
  <Layout noFooter>
    <SEO title="404: Not found" />
    <NotFoundWrapper>
      <H1Modifier>404</H1Modifier>
      <Info>Doh, something&apos;s missing.</Info>
    </NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
