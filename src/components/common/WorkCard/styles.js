import styled from 'styled-components'

import { colors } from '../../../utils'

export const WorkWrapper = styled.div`
  padding: 3.5rem;
  background-color: ${colors.primary};
  width: 100%;
  color: ${colors.white};
  opacity: ${props => (props.light ? 1 : 0.5)};
`

export const TextWrapper = styled.div`
  width: 90%;
  margin: 2.5rem 4rem 0 1.6rem;
`
