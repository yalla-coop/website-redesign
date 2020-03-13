import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { letterSpacing, colors, size } from '../../utils'

const { black, gray3 } = colors

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid rgba(224, 224, 224, 0.5);
  background: rgba(196, 196, 196, 0.05);
  outline: none;
  font-weight: 700;
  font-size: ${size.xxs};
  letter-spacing: ${letterSpacing.medium};
  font-family: Karu;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${black};
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
  }
`
const Label = styled.label`
  width: 100%;
  text-transform: uppercase;
  font-family: Karu;
  font-weight: 550;
  font-size: ${size.xxs};
  letter-spacing: ${letterSpacing.medium};
  color: ${gray3};
`
const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid rgba(224, 224, 224, 0.5);
  resize: none;
  background: rgba(196, 196, 196, 0.05);
  outline: none;
  font-weight: 550;
  font-size: ${size.xxs};
  letter-spacing: ${letterSpacing.medium};
  font-family: Karu;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${black};
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
  }
`

const InputContainer = styled.div`
  width: 45%;
  margin: 10px 0;
`
const TextareaContainer = styled.div`
  width: 100%;
  height: 230px;
  margin: 10px 0;
  @media (max-width: 800px) {
    height: 180px;
  }
`

const CustomInput = ({ big, name, label, placeholder, handleChange }) =>
  !big ? (
    <InputContainer>
      <Label htmlFor={name}>
        {label}
        <Input
          placeholder={`${placeholder}...`}
          id={name}
          name={name}
          onChange={handleChange}
          required
        />
      </Label>
    </InputContainer>
  ) : (
    <TextareaContainer>
      <Label htmlFor={name}>
        {label}
        <Textarea
          id={name}
          placeholder={`${placeholder}...`}
          onChange={handleChange}
        />
      </Label>
    </TextareaContainer>
  )

CustomInput.defaultProps = {
  big: false,
}
CustomInput.propTypes = {
  big: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default CustomInput
