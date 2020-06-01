import React from 'react'
import { css } from 'styled-components'
import { H3, Button } from '../elements'
import Image from '../image'
import { colors } from '../../utils'

const Contact = () => (
  <div
    css={css`
      background-color: ${colors.gray7};
      display: flex;
    `}
  >
    <div
      css={css`
        width: 50%;
        margin-left: 18rem;
        padding: 7rem 0;
      `}
    >
      <H3
        css={css`
          color: ${colors.primary} !important;
          margin-bottom: 4rem;
        `}
      >
        Interested in working with us?
      </H3>
      <Button
        title="get in touch"
        capitalize
        hasArrow
        backgroundColor={colors.accent}
      />
    </div>
    <div
      css={css`
        width: 50%;

        opacity: 0.1;
      `}
    >
      <Image fileName="logo-contact" altText="Yalla logo" />
    </div>
  </div>
)

export default Contact
