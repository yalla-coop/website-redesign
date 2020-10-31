import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { ExtraSmall as Accent } from '../elements/Accent'

import { CapsHeadingMedium, MP } from '../elements/typography'
import { breakpoints } from '../../utils'

const AlternateContainer = styled.div`
  ${breakpoints.mobileSmall} {
    padding: 0;
  }

  ${breakpoints.laptopLarge} {
    margin-top: 3rem;
    position: relative;
    padding: 5rem 9rem;
    background: rgba(247, 247, 247, 0.7);
  }
`

const PragraphContainer = styled.div`
  width: 90%;
`
// const AccentContainer = styled.div`
//   position: absolute;
//   top: -2.1rem;
//   left: 6rem;
// `
const SubtitleAlternate = ({ title, content }) => (
  <AlternateContainer>
    <CapsHeadingMedium> {title}</CapsHeadingMedium>
    <PragraphContainer>
      <MP>{content}</MP>
    </PragraphContainer>
    {/* <AccentContainer>
      <Accent />
    </AccentContainer> */}
  </AlternateContainer>
)
SubtitleAlternate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default SubtitleAlternate
