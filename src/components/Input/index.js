import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { letterSpacing, colors, size, font, breakpoints } from '../../utils'

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
  ${font};
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
  ${font};
  font-weight: 500;
  font-size: ${size.xxs};
  letter-spacing: ${letterSpacing.small};
  color: ${gray3};
  margin-bottom: 1rem;
  input,
  textarea {
    margin-top: 0.6rem;
  }
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
  ${font};
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
  ${breakpoints.tabletVertical} {
    width: 45%;
  }
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

const CustomInput = ({
  textarea,
  name,
  label,
  placeholder,
  value,
  required,
  type,
  onChange = () => {},
}) => {
  const placeholderText = placeholder || label
  return !textarea ? (
    <InputContainer>
      <Label htmlFor={name}>
        {label}
        <Input
          placeholder={placeholderText}
          id={name}
          name={name}
          required={required}
          type={type}
          value={value}
          onChange={onChange}
        />
      </Label>
    </InputContainer>
  ) : (
    <TextareaContainer>
      <Label htmlFor={name}>
        {label}
        <Textarea id={name} placeholder={placeholderText} onChange={onChange} />
      </Label>
    </TextareaContainer>
  )
}

CustomInput.defaultProps = {
  textarea: false,
  required: true,
  type: 'text',
  value: '',
  placeholder: '',
}
CustomInput.propTypes = {
  textarea: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
}

export default CustomInput
