import React from 'react'
import { css } from 'styled-components'
import Layout from './layout'
import Subtitle from './Subtitle'
import {
  FlexDiv,
  SidePanel,
  H1Inverted,
  HeadingSection,
} from '../styles/contactUs'
import { H3 } from './elements'

export default () => (
  <Layout noFooter>
    <FlexDiv>
      <div
        css={css`
          padding: 7.5rem;
          width: 100%;
        `}
      >
        <Subtitle title="Thank you for reaching out to us!" size="large" />
        <div
          css={css`
            padding: 7.5rem 2rem 7.5rem 3.5rem;
            width: 65%;
          `}
        >
          <H3>We will contact you soon!</H3>
        </div>
      </div>

      <SidePanel>
        <HeadingSection>
          <H1Inverted>Thank you!</H1Inverted>
        </HeadingSection>
      </SidePanel>
    </FlexDiv>
  </Layout>
)
