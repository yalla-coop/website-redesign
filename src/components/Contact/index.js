import React from 'react'
import { css } from 'styled-components'
import { H3, Button } from '../elements'
import Image from '../image'
import { colors } from '../../utils'

const Contact = () => (
  <div
    css={css`
      background-color: ${colors.gray7};
      padding: 7rem 0;
      height: 276px;
      display: flex;
    `}
  >
    <div
      css={css`
        flex: 1;
      `}
    >
      <H3
        css={css`
          color: ${colors.primary} !important;
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
        flex: 2;
      `}
    >
      <Image fileName="logo-contact" altText="Yalla logo" />
    </div>
  </div>
)

export default Contact
