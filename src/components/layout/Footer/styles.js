import styled from 'styled-components'
import { colors, breakpoints, spacings, size, psize } from '../../../utils'
import { TextContentWrapper } from '../../contentWrapper'

export const FooterWrapper = styled.footer`
  background: ${colors.primary};
  background: linear-gradient(
    90deg,
    rgba(183, 21, 64, 1) 0%,
    rgba(199, 62, 70, 1) 100%
  );
  background: #03182f;
  color: ${colors.white};
  padding-bottom: ${spacings[6]};

  ${breakpoints.mobileMedium} {
    padding-bottom: ${spacings[4]};
  }
  h3 {
    font-size: ${size.xxs};
  }

  h4 {
    font-size: ${size.xs};
  }

  ${breakpoints.mobileSmall} {
    h2 {
      font-size: ${size.md};
      padding-bottom: ${spacings[3]};
    }
  }

  ${breakpoints.tabletVertical} {
    padding: ${spacings[6]} 0;

    h4 {
      font-size: ${size.s};
    }
  }

  ${breakpoints.laptop} {
    padding: ${spacings[8]} 0;
  }

  ${breakpoints.laptopLarge} {
    h2 {
      font-size: ${size.lg};
    }
  }
`
export const ContentWrapper = styled(TextContentWrapper)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  ${breakpoints.tabletVertical} {
    flex-direction: row;
  }

  ${breakpoints.laptopLarge} {
    padding-top: ${spacings[7]};
    padding-bottom: ${spacings[7]};
  }
`

export const ContactSection = styled.div`
  flex: 3;

  h3 {
    margin-bottom: ${spacings[3]};
  }
`

export const FooterBox = styled.div`
  ${breakpoints.tabletVertical} {
    width: 80%;
  }

  ${breakpoints.laptop} {
    display: flex;
  }
`

export const SitemapSection = styled.div`
  flex: 2;
  h4 span {
    margin-right: 1rem;
    color: rgba(255, 255, 255, 0.2);
  }

  h3 {
    margin-bottom: ${spacings[3]};
  }

  h4 {
    margin-bottom: ${spacings[3]};
  }

  margin-bottom: ${spacings[6]};

  ${breakpoints.mobileMedium} {
    margin-bottom: ${spacings[4]};
  }
`

export const AddressesBlock = styled.address`
  display: flex;
  font-style: normal;
  div {
    width: 30%;
    p {
      color: ${colors.white};
    }
  }
`

export const HeadingSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: baseline;
  margin: ${spacings[5]} 0;

  h1 {
    font-size: ${size.md};
  }

  ${breakpoints.tabletVertical} {
    h1 {
      font-size: ${size.lg};
    }
    width: 20%;
    margin: 0 0;
    transform: rotate(-90deg) translateX(-69%);
  }

  ${breakpoints.laptop} {
    transform: rotate(-90deg) translateX(-40%);
  }

  ${breakpoints.laptopLarge} {
    transform: rotate(-90deg) translateX(-28%);
  }
`

export const EmailLink = styled.a`
  font-size: ${size.xs};
  letter-spacing: 0.5px;
  padding-left: 2.8rem;

  color: ${colors.white};

  ${breakpoints.tabletVertical} {
    display: inline-block;
    margin-bottom: ${spacings[6]};
    font-size: ${size.s};
  }

  ${breakpoints.laptopLarge} {
    font-size: ${size.s};
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
