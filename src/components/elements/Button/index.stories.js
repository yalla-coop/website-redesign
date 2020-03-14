import React from 'react'
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs'
import Button from './index'

export default {
  title: 'Button',
  decorators: [withKnobs],
}

export const PrimaryButton = () => (
  <Button primary title={text('title', 'GET IN TOUCH')} />
)

export const CustomButton = () => (
  <Button
    title={text('title', 'GET IN TOUCH')}
    hasArrow={boolean('hasArrow', true)}
    textColor={color('textColor')}
    backgroundColor={color('backgroundColor', 'rgba(0,0,0,1)')}
    capitalize={boolean('capitalize', true)}
  />
)
