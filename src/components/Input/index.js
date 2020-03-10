import React from 'react'
import styled from 'styled-components'
import { letterSpacing, colors, size } from '../../utils'

const { black, gray3 } = colors

const Input = styled.input`
  width: 100%;
  padding: 16px;
  border: 1px solid rgba(224, 224, 224, 0.5);
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

const InputContainer = styled.div`
  width: 45%;
`

const CustomInput = () => (
  <InputContainer>
    <Label htmlFor="name">
      full name
      <Input
        placeholder="add your name"
        id="name"
        name="name"
        onChange={() => console.log('asd')}
        required
      />
    </Label>
  </InputContainer>
)

export default CustomInput
