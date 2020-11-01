import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { ExtraSmall, Small } from '../elements/Accent'

import { CapsHeadingMedium, H2 } from '../elements/typography'

const SubtitleContainer = styled.div`
  box-sizing: border-box;
  /* margin-top: 3rem; */
  position: relative;
  background: transparent;
  /* padding-left: 2.8rem; */
  width: 100%;
`
// const AccentContainer = styled.div`
//   position: absolute;
//   top: -3rem;
//   left: 0px;
// `
const Subtitle = ({ title, size }) =>
  size === 'large' ? (
    <SubtitleContainer>
      <H2>{title}</H2>
      {/* <AccentContainer>
        <Small />
      </AccentContainer> */}
    </SubtitleContainer>
  ) : (
    <SubtitleContainer>
      <CapsHeadingMedium>{title}</CapsHeadingMedium>
      {/* <AccentContainer>
        <ExtraSmall />
      </AccentContainer> */}
    </SubtitleContainer>
  )

Subtitle.defaultProps = {
  size: 'small',
}
Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default Subtitle
