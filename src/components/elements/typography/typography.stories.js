import React from 'react'
import {
  H1,
  H2,
  H3,
  H4,
  CapsHeadingLarge,
  CapsHeadingMedium,
  CapsHeadingSmall,
  Link,
  P,
} from './typography'
import { size, letterSpacing } from '../../../utils'

export default {
  title: 'Design System/Typography',
}

export const h1 = () => <H1>Heading 1</H1>
export const h2 = () => <H2>Heading 2</H2>
export const h3 = () => <H3>Heading 3</H3>
export const h4 = () => <H4>Heading 4</H4>

export const CapsHeadingLargeExtraBold = () => (
  <CapsHeadingLarge w={800}>caps heading large</CapsHeadingLarge>
)

export const CapsHeadingLargeBold = () => (
  <CapsHeadingLarge>caps heading large</CapsHeadingLarge>
)

export const CapsHeadingLargeMedium = () => (
  <CapsHeadingLarge w={500}>caps heading large</CapsHeadingLarge>
)

export const CapsHeadingMediumRegular = () => (
  <CapsHeadingMedium>caps heading medium</CapsHeadingMedium>
)

export const CapsHeadingSmallRegular = () => (
  <CapsHeadingSmall>caps heading small</CapsHeadingSmall>
)

export const CapsHeadingSmallLetterSpacing = () => (
  <CapsHeadingSmall l={letterSpacing.huge}>caps heading small</CapsHeadingSmall>
)

export const link = () => <Link to="/">Click Here</Link>

export const paragraph = () => <P s={size.xs}>This is a paragraph</P>
