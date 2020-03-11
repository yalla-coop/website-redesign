import styled from 'styled-components'
import { colors } from '../../../utils'

export const FooterWrapper = styled.footer`
  max-width: 100%;
  height: 50.2rem;
  background: ${colors.primary};
  color: ${colors.white};
  display: flex;
  padding: 8rem 30rem 12rem 8rem;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 1024px) {
    padding: 4rem 8rem 4rem 4rem;
  }
`

export const HeadingSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: baseline;
  transform: rotate(-90deg) translateX(-30%);
`

export const SitemapSection = styled.div`
  flex: 2;

  h4 span {
    margin-right: 1rem;
    color: rgba(255, 255, 255, 0.2);
  }
`

export const ContactSection = styled.div`
  flex: 3;
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

export const EmailLink = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.white};
`
