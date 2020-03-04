import React from 'react'
import { LP, MP, P, SP, XLP, XSP, BoldMP, BoldXSP } from './index'

export default {
  title: 'Design System/Typography/Paragraphs',
}
const sample =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
export const Paragraph = () => <P>{sample}</P>
export const ExtraLargeParagraph = () => <XLP>{sample}</XLP>
export const LargeParagraph = () => <LP>{sample}</LP>
export const MediumParagraph = () => <MP>{sample}</MP>
export const MediumBoldParagraph = () => <BoldMP>{sample}</BoldMP>
export const SmallParagraph = () => <SP>{sample}</SP>
export const ExtraSmallParagraph = () => <XSP>{sample}</XSP>
export const ExtraSmallBoldParagraph = () => <BoldXSP>{sample}</BoldXSP>
