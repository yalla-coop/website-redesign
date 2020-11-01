import styled from 'styled-components'
import {
  breakpoints,
  colors,
  spacings,
  size,
  letterSpacing,
  lineHeight,
  psize,
} from '../utils'
import { Wrapper as ContentWrapper } from '../components/contentWrapper'

export const Deliverables = styled(ContentWrapper)`
  padding-bottom: 0;
`

export const Context = styled(ContentWrapper)`
  ${breakpoints.mobileSmall} {
    h2 {
      font-size: ${size.sm};
      letter-spacing: ${letterSpacing.small};
      line-height: ${lineHeight.xl};
      margin-bottom: ${spacings[4]};
      padding-right: ${spacings[2]};
    }
  }
  ${breakpoints.tabletVertical} {
    h2 {
      font-size: ${size.md};
    }
  }

  ${breakpoints.laptopLarge} {
    padding-bottom: 0;

    h2 {
      font-size: 4.8rem;
      line-height: 4.8rem;
      margin-bottom: ${spacings[6]};
    }

    p {
      font-size: ${psize.xl};
      line-height: 3.6rem;
      padding-bottom: 48px;
    }
  }
`

export const WhereItAllStartedSection = styled(ContentWrapper)`
  background: #f9f9f9;

  h2 {
    margin-bottom: ${spacings[2]};
  }

  p:not(:last-child) {
    margin-bottom: ${spacings[3]};
  }

  ${breakpoints.laptopLarge} {
    padding-top: 0;
    background: white;
    padding-bottom: 32px;
  }

  ${breakpoints.laptopLarge} {
    h2 {
      font-size: 24px;
      line-height: 36px;
    }

    p {
      font-size: 24px;
      line-height: 36px;
    }
  }
`

export const WhereWeCameInSection = styled(WhereItAllStartedSection)`
  background: white;

  ${breakpoints.laptopLarge} {
    padding-top: ${spacings[8]};
    padding-bottom: ${spacings[8]};
    background: #f9f9f9;
  }
`

export const WhatWeDeliveredSection = styled(WhereItAllStartedSection)`
  background: white;

  h3 {
    font-size: 24px;
    margin-top: ${spacings[3]};
    margin-bottom: ${spacings[3]};
  }

  ${breakpoints.laptopLarge} {
    padding-top: ${spacings[8]};

    h3 {
      font-size: 40px;
      padding-top: ${spacings[6]};
    }
  }
`

export const Link = styled.a`
  font-size: 18px;
  margin-top: ${spacings[3]};
  color: ${colors.accent};
`
