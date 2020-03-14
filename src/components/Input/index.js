import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { letterSpacing, colors, size } from '../../utils'

const { black, gray3 } = colors

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(224, 224, 224, 0.5);
  background: rgba(196, 196, 196, 0.05);
  outline: none;
  font-weight: 500;
  font-size: ${size.xxs};
  letter-spacing: ${letterSpacing.small};
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
  font-weight: 500;
  font-size: ${size.xxs};
  letter-spacing: ${letterSpacing.small};
  color: ${gray3};
`
const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 1.6rem;
  border: 1px solid rgba(224, 224, 224, 0.5);
  resize: none;
  background: rgba(196, 196, 196, 0.05);
  outline: none;
  font-weight: 500;
  font-size: ${size.xxs};
  letter-spacing: ${letterSpacing.small};
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
  margin: 1rem 0;
`
const TextareaContainer = styled.div`
  width: 100%;
  height: 23rem;
  margin: 1rem 0;
  @media (max-width: 800px) {
    height: 18rem;
  }
`

const CustomInput = ({ textarea, name, label, placeholder, handleChange }) => {
  const placeholderText = placeholder || label
  return !textarea ? (
    <InputContainer>
      <Label htmlFor={name}>
        {label}
        <Input
          placeholder={`${placeholderText}...`}
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
          placeholder={`${placeholderText}...`}
          onChange={handleChange}
        />
      </Label>
    </TextareaContainer>
  )
}

CustomInput.defaultProps = {
  textarea: false,
}
CustomInput.propTypes = {
  textarea: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default CustomInput
