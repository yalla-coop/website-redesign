import React from 'react'

import {
  FooterWrapper,
  HeadingSection,
  SitemapSection,
  ContactSection,
  EmailLink,
  AddressesBlock,
} from './styles'
import { H1, H4, CapsHeadingSmall, XSP } from '../../elements'

const Footer = () => (
  <FooterWrapper>
    <HeadingSection>
      <H1>Get in touch!</H1>
    </HeadingSection>
    <SitemapSection>
      <CapsHeadingSmall>sitemap</CapsHeadingSmall>
      <H4>
        <span>1.0</span>Our Approach + Services
      </H4>
      <H4>
        <span>2.0</span>Our Work + Case Studies
      </H4>
      <H4>
        <span>3.0</span>Our Story + Team
      </H4>
      <H4>
        <span>4.0</span>Get in touch
      </H4>
    </SitemapSection>
    <ContactSection>
      <CapsHeadingSmall>contact</CapsHeadingSmall>
      <EmailLink>hello@yallacooperative.com</EmailLink>
      <AddressesBlock>
        <div>
          <CapsHeadingSmall>london</CapsHeadingSmall>
          <XSP>
            149 Fonthill Rd <br /> Finsbury Park <br /> London <br /> N4 3HF
          </XSP>
        </div>
        <div>
          <CapsHeadingSmall>germany</CapsHeadingSmall>
          <XSP>
            149 Fonthill Rd <br /> Finsbury Park <br /> London <br /> N4 3HF
          </XSP>
        </div>
        <div>
          <CapsHeadingSmall>gaza</CapsHeadingSmall>
          <XSP>
            149 Fonthill Rd <br /> Finsbury Park <br /> London <br /> N4 3HF
          </XSP>
        </div>
      </AddressesBlock>
    </ContactSection>
  </FooterWrapper>
)

export default Footer