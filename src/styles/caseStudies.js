// TODO: Migrate all common case studies styles to this file

import styled from 'styled-components'
import {
  breakpoints,
  spacings,
  size,
  letterSpacing,
  lineHeight,
  psize,
  colors,
} from '../utils'
import { Wrapper as ContentWrapper } from '../components/contentWrapper'

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
      font-size: ${size.lg};
      line-height: 4.8rem;
      margin-bottom: ${spacings[6]};
    }

    p {
      font-size: ${psize.xl};
      line-height: 3.6rem;
      padding-bottom: ${spacings[6]};
    }
  }
`

export const WhereItAllStartedSection = styled(ContentWrapper)`
  h2 {
    margin-bottom: ${spacings[2]};
  }

  p:not(:last-child) {
    margin-bottom: ${spacings[3]};
  }

  ${breakpoints.laptopLarge} {
    padding-top: 0;
    background: white;
    padding-bottom: ${spacings[5]};
  }

  ${breakpoints.laptopLarge} {
    h2 {
      font-size: ${size.s};
      line-height: 3rem;
    }

    p {
      font-size: ${psize.l};
      line-height: 3rem;
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
    font-size: ${size.sm};
    margin-top: ${spacings[3]};
    margin-bottom: ${spacings[3]};
  }

  ${breakpoints.laptopLarge} {
    padding-top: ${spacings[8]};

    h3 {
      font-size: ${size.md};
      padding-top: ${spacings[6]};
    }
  }
`

export const IntroAndMetaSection = styled.div`
  ${breakpoints.tabletVertical} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`

export const MetaDataContainer = styled.div`
  background-color: ${colors.LightestGray};
  padding: ${spacings[4]};

  ${breakpoints.tabletVertical} {
    order: 2;
    width: 30%;
    padding: ${spacings[4]};
    background-color: ${colors.white};
  }
`
