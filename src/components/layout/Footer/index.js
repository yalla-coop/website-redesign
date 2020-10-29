import React from 'react'

import { FooterWrapper, ContentWrapper, EmailLink, Copyright } from './styles'
import { H2 } from '../../elements'

const Footer = () => (
  <>
    <FooterWrapper>
      <ContentWrapper>
        <H2>Get in touch!</H2>
        <EmailLink
          href="mailto:hello@yallacooperative.com?Subject=Hello%20again"
          target="_top"
        >
          hello@yallacooperative.com
        </EmailLink>
      </ContentWrapper>
    </FooterWrapper>
    <Copyright>
      <p>© 2020 Yalla Cooperative</p>
    </Copyright>
  </>
)

export default Footer
