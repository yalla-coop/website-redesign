import styled from 'styled-components'
import { breakpoints, spacings } from '../utils'
import {
  Context as EarwigContext,
  WhereItAllStartedSection as EarwigWhereItAllStartedSection,
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
`

export default Context
