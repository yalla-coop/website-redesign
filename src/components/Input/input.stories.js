import React from 'react'
import { text } from '@storybook/addon-knobs'
import InputComponent from './index'

export default {
  title: 'Input',
}

export const Input = () => (
  <InputComponent
    name="username"
    label={text('label', 'Username')}
    placeholder={text('placeholder', 'Add your username')}
  />
)

export const TextArea = () => (
  <InputComponent
    textarea
    name="textarea"
    label={text('label', 'message')}
    placeholder={text('placeholder', 'let us know your idea')}
  />
)
