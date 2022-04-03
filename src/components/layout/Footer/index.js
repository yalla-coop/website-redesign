import React from 'react'
import { useMediaQuery } from 'react-responsive'
import {
  FooterWrapper,
  HeadingSection,
  SitemapSection,
  ContactSection,
  EmailLink,
  AddressesBlock,
  ContentWrapper,
  Copyright,
  FooterBox,
  StyledLink,
} from './styles'
import { H1, H4, CapsHeadingSmall, XSP } from '../../elements'

const Footer = () => {
  const isIpadOrBigger = useMediaQuery({
    minWidth: 680,
  })
  return (
    <>
      <FooterWrapper>
        <ContentWrapper>
          <HeadingSection>
            <H1>Get in touch!</H1>
          </HeadingSection>
          <FooterBox>
            <SitemapSection>
              {/* TODO: make the sitemap items as Gatsby links */}
              <CapsHeadingSmall>sitemap</CapsHeadingSmall>
              <H4>
                <StyledLink to="/our-approach">
                  <span>1.0</span>Our Approach + Services
                </StyledLink>
              </H4>
              <H4>
                <StyledLink to="/#case-studies">
                  <span>2.0</span>Our Work + Case Studies
                </StyledLink>
              </H4>
              <H4>
                <StyledLink to="/our-story">
                  <span>3.0</span>Our Story + Team
                </StyledLink>
              </H4>
              <H4>
                <StyledLink to="/contact-us">
                  <span>4.0</span>Get in touch
                </StyledLink>
              </H4>
              <H4>
                <StyledLink to="/policies">
                  <span>5.0</span>Our policies
                </StyledLink>
              </H4>
            </SitemapSection>
            <ContactSection>
              <CapsHeadingSmall>contact</CapsHeadingSmall>
              <EmailLink
                href="mailto:hello@yallacooperative.com?Subject=Hello%20again"
                target="_top"
              >
                hello@yallacooperative.com
              </EmailLink>
              {isIpadOrBigger && (
                <AddressesBlock>
                  <div>
                    <CapsHeadingSmall>london</CapsHeadingSmall>
                    <XSP>
                      149 Fonthill Rd <br /> Finsbury Park <br /> London <br />{' '}
                      N4 3HF
                    </XSP>
                  </div>
                  <div>
                    <CapsHeadingSmall>germany</CapsHeadingSmall>
                    <XSP>Remote locations</XSP>
                  </div>
                  <div>
                    <CapsHeadingSmall>gaza</CapsHeadingSmall>
                    <XSP>
                      Capital Mall <br /> Omar Almokhtar <br /> Alrimal
                    </XSP>
                  </div>
                </AddressesBlock>
              )}
            </ContactSection>
          </FooterBox>
        </ContentWrapper>
      </FooterWrapper>
      <Copyright>
        <p>© 2022 Yalla Cooperative</p>
      </Copyright>
    </>
  )
}

export default Footer
