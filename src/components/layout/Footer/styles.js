import styled from 'styled-components'
import { colors, breakpoints, spacings, size, psize } from '../../../utils'

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background: ${colors.primary};
  background: linear-gradient(
    90deg,
    rgba(183, 21, 64, 1) 0%,
    rgba(199, 62, 70, 1) 100%
  );
  color: ${colors.white};

  ${breakpoints.mobileSmall} {
    padding-top: ${spacings[6]};
    padding-left: 5.2rem;
    padding-bottom: ${spacings[6]};

    h2 {
      font-size: ${size.md};
      padding-bottom: ${spacings[3]};
    }
  }
`

export const Copyright = styled.div`
  background: #020f1d;
  padding-top: ${spacings[4]};
  padding-bottom: ${spacings[4]};
  padding-left: 5.2rem;

  p {
    color: white;
    font-size: ${psize.m};
  }
`

export const EmailLink = styled.a`
  font-size: ${psize.l};
  letter-spacing: 0.5px;

  color: ${colors.white};
`
