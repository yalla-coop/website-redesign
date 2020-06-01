import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import { CapsHeadingSmall, SP } from '../../elements'
import { colors } from '../../../utils'

const MetaData = ({ title, text }) => (
  <div
    css={css`
      margin-bottom: 2.4rem;
    `}
  >
    <CapsHeadingSmall color={colors.gray3}>{title}</CapsHeadingSmall>
    {text.map(word => (
      <SP>{word}</SP>
    ))}
  </div>
)

MetaData.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default MetaData
