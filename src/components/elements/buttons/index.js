import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Arrow from '../../../../static/svg/arrow'
import { font, size, letterSpacing, colors } from '../../../utils'

const StyledButton = styled.button`
  height: 5rem;
  ${font};
  font-size: ${size.xxs};
  font-weight: 500;
  letter-spacing: ${letterSpacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  /* props */
  color: ${({ textColor }) => textColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-transform: ${({ capitalize }) => (capitalize ? 'uppercase' : 'none')};
`
const StyledArrow = styled(Arrow)`
  display: flex;
  margin-left: 1rem;
  path {
    fill: ${({ color }) => color};
  }
`
const Button = ({
  title,
  hasArrow,
  textColor,
  backgroundColor,
  onClick,
  capitalize,
  primary,
}) => {
  const bgColor = (primary && colors.primary) || backgroundColor
  return (
    <StyledButton
      textColor={textColor}
      backgroundColor={bgColor}
      onClick={onClick}
      capitalize={primary || capitalize}
    >
      {title}
      {primary || hasArrow ? (
        <StyledArrow width={25} height={16} color={textColor} />
      ) : null}
    </StyledButton>
  )
}
Button.propTypes = {
  backgroundColor: PropTypes.string,
  hasArrow: PropTypes.bool,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
  title: PropTypes.string,
  capitalize: PropTypes.bool,
  primary: PropTypes.bool,
}

Button.defaultProps = {
  backgroundColor: colors.primary,
  hasArrow: false,
  capitalize: false,
  primary: false,
  onClick: () => {},
  textColor: colors.lightestGray,
  title: 'Click me',
}

export default Button
