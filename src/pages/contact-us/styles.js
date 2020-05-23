import styled from 'styled-components'
import { colors } from '../../utils'
import { H1 } from '../../components/elements'

export const FlexDiv = styled.div`
  display: flex;
  width: 100%;
`
export const FlexDivWrap = styled(FlexDiv)`
  justify-content: space-between;
  flex-flow: wrap;
`
export const SidePanel = styled.div`
  width: 17.5vw;
  background-color: ${colors.primary};
  height: 100vh;
`

export const HeadingSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: baseline;
`

export const H1Inverted = styled(H1)`
  margin-top: 40%;
  margin-left: -40%;
  transform: rotate(-90deg) translateX(-30%);
  color: ${colors.white};
`
