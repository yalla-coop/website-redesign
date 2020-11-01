import styled from 'styled-components'
import { breakpoints } from '../utils'
import { Context as EarwigContext } from './earwig'

export const Context = styled(EarwigContext)`
  ${breakpoints.mobileSmall} {
    padding-bottom: 0;
  }
`

export default Context
