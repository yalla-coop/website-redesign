import styled from 'styled-components'
import {
  breakpoints,
  colors,
  spacings,
  size,
  letterSpacing,
  lineHeight,
} from '../utils'
import { Wrapper as ContentWrapper } from '../components/contentWrapper'

export const Deliverables = styled(ContentWrapper)`
  padding-bottom: 0;
`

export const HeadingsWrapper = styled(ContentWrapper)`
  ${breakpoints.mobileSmall} {
    margin: 0;
    padding-bottom: 0;

    h2 {
      font-size: 24px;
      line-height: 32px;
    }

    h3 {
      color: ${colors.gray3};
      padding-bottom: ${spacings[2]};
    }
  }

  ${breakpoints.laptopLarge} {
    h2 {
      font-size: 40px;
      line-height: 52px;
    }
  }
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
`

export const SecondSection = styled(ContentWrapper)`
  ${breakpoints.mobileSmall} {
    display: flex;
    padding-bottom: 0;
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
`

export const WhereWeCameInSection = styled(WhereItAllStartedSection)`
  background: white;
`

export const WhatWeDeliveredSection = styled(WhereItAllStartedSection)`
  background: white;

  h3 {
    font-size: 24px;
    margin-top: ${spacings[3]};
    margin-bottom: ${spacings[3]};
  }
`

export const Link = styled.a`
  font-size: 18px;
  margin-top: ${spacings[3]};
  color: ${colors.accent};
`
