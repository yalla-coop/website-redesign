import styled from 'styled-components'
import { colors, size, spacings, breakpoints } from '../utils'
import { H1 } from '../components/elements'

export const NavBackground = styled.div`
  background: ${colors.primary};

  @media (min-width: 1280px) {
    background: transparent;
  }
`

export const FlexDiv = styled.div`
  width: 100%;

  h2 {
    font-size: ${size.md};
    margin-top: ${spacings[6]};
    margin-bottom: ${spacings[5]};
    padding: 0 ${spacings[4]};
  }

  form {
    padding: 0 ${spacings[4]};

    button {
      margin-top: ${spacings[5]};
      margin-bottom: ${spacings[6]};

      ${breakpoints.tabletVertical} {
        margin-top: ${spacings[6]};
        margin-bottom: ${spacings[8]};
      }
    }
  }
  @media (min-width: 1280px) {
    h2,
    form {
      padding: 0 ${spacings[9]};
    }

    width: 80%;
  }

  ${breakpoints.laptopLarge} {
    width: 60%;
  }
`
export const FlexDivWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${breakpoints.tabletVertical} {
    flex-direction: row;
    justify-content: space-between;
    flex-flow: wrap;
  }
`
export const SidePanel = styled.div`
  width: 17.5vw;
  background-color: ${colors.primary};
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
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
