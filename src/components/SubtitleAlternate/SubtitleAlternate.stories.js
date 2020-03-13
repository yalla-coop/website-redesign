import React from 'react'
import SubtitleAlternate from './index'

export default {
  title: 'subtitle alternate',
}

const sample =
  ' earwig asked us to create a brand new reviews-based platform from scratch for them to do this. It would need to enable workers to share experiences and information, but importantly protect their identity while ensuring all input was verified. Working in partnership with their in-house resources, we took the product from a design prototype through to full implementation.'

export const Subtitle = () => (
  <SubtitleAlternate title="hi from SubtitleAlternate" content={sample} />
)
