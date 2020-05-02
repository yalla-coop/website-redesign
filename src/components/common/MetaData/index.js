import React from 'react'
import PropTypes from 'prop-types'

import { CapsHeadingSmall, SP } from '../../elements'
import { colors } from '../../../utils'

const MetaData = ({ title, text }) => (
  <div>
    <CapsHeadingSmall color={colors.gray3}>{title}</CapsHeadingSmall>
    <SP>{text}</SP>
  </div>
)

MetaData.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default MetaData
