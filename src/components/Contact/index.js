import React from 'react'
import { navigate } from 'gatsby'
import styled, { css } from 'styled-components'
import { H3, Button } from '../elements'
import { colors, breakpoints, spacings } from '../../utils'

const Wrapper = styled.div`
  background-color: ${colors.gray7};
  display: flex;
  background-image: url('../images/logo-contact.png') no-repeat;
`

const Content = styled.div`
  padding: ${spacings[5]} 0;
  margin: 0 ${spacings[4]};

  ${breakpoints.mobileMedium} {
    margin: 0 ${spacings[5]};
  }

  ${breakpoints.tabletVertical} {
    padding: ${spacings[7]} 0;
  }

  ${breakpoints.laptop} {
    width: 50%;
    margin: 0 ${spacings[9]};
    padding: ${spacings[8]} 0;
  }
`

const Contact = () => (
  <Wrapper>
    <Content>
      <H3
        css={css`
          margin-bottom: ${spacings[3]};
        `}
        color={colors.primary}
      >
        Interested in working with us?
      </H3>
      <Button
        title="get in touch"
        capitalize
        hasArrow
        backgroundColor={colors.accent}
        onClick={() => navigate('/contact-us')}
      />
    </Content>
  </Wrapper>
)

export default Contact
