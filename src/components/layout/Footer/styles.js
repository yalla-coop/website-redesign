import styled from 'styled-components'
import { colors, breakpoints, spacings, size, psize } from '../../../utils'
import { TextContentWrapper } from '../../contentWrapper'

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background: ${colors.primary};
  background: linear-gradient(
    90deg,
    rgba(183, 21, 64, 1) 0%,
    rgba(199, 62, 70, 1) 100%
  );
  background: #03182f;
  color: ${colors.white};

  ${breakpoints.mobileSmall} {
    h2 {
      font-size: ${size.md};
      padding-bottom: ${spacings[3]};
    }
  }

  ${breakpoints.laptopLarge} {
    h2 {
      font-size: ${size.lg};
    }
  }
`
export const ContentWrapper = styled(TextContentWrapper)`
  margin: 0;

  ${breakpoints.laptopLarge} {
    padding-top: ${spacings[7]};
    padding-bottom: ${spacings[7]};
  }
`

export const Copyright = styled(TextContentWrapper)`
  background: #020f1d;
  padding-top: ${spacings[4]};
  padding-bottom: ${spacings[4]};

  p {
    color: white;
    font-size: ${psize.m};
  }
}
`

export const EmailLink = styled.a`
  font-size: ${psize.l};
  letter-spacing: 0.5px;
  padding-left: 2.8rem;

  color: ${colors.white};

  ${breakpoints.laptopLarge} {
    margin-top: ${spacings[4]};
    font-size: ${size.sm};
  }
`
