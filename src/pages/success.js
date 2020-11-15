import React from 'react'
import { css } from 'styled-components'
import Layout from '../components/layout'
import NavBar from '../components/layout/Header/Nav'
import { size, breakpoints, spacings } from '../utils'

export default () => (
  <Layout noFooter>
    <NavBar menuColor="white" logoColor="black" />
    <div
      css={css`
        width: 100%;
        position: relative;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <p
        css={css`
          font-size: ${size.sm};
          padding: 0 ${spacings[4]};
          text-align: center;

          ${breakpoints.mobileMedium} {
            font-size: ${size.md};
          }

          ${breakpoints.tabletVertical} {
            font-size: ${size.lg};
          }
        `}
      >
        Thank You! for reaching out. We will get back to you ASAP!
      </p>
    </div>
  </Layout>
)
