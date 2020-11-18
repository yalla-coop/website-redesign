import styled from 'styled-components'
import { breakpoints, spacings } from '../utils'
import {
  Context as EarwigContext,
  WhereItAllStartedSection as EarwigWhereItAllStartedSection,
  WhatWeDeliveredSection as EarwigWhatWeDeliveredSection,
} from './earwig'

export const Context = styled(EarwigContext)`
  ${breakpoints.mobileSmall} {
    padding-bottom: 0;
  }
`

export const WhereItAllStartedSection = styled(EarwigWhereItAllStartedSection)`
  ${breakpoints.laptopLarge} {
    padding-bottom: ${spacings[8]};
  }

  ${breakpoints.tabletVertical} {
    order: 1;
    width: 60%;
    padding-right: 1rem;
    margin: 0;
  }
`

export const WhatWeDeliveredSection = styled(EarwigWhatWeDeliveredSection)`
  ${breakpoints.laptopLarge} {
    padding-bottom: ${spacings[9]};
  }
`
