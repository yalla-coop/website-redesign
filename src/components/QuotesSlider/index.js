import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { Quote } from '../common'
import { colors } from '../../utils'
import data from './data'

const StyledButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;

  border: 2px solid ${colors.accent};
  background: ${({ currnet }) => (currnet ? colors.accent : 'transparent')};
`

const fadeInLeft = keyframes`
  0% {
    opacity: 0.2;
    transform: translateX(200px);
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const QuoteWrapper = styled.div`
  animation: 1.5s ${fadeInLeft} ease-out;
`

export default function QuotesSlider() {
  const [slide, setSlide] = useState('1')

  return (
    <div>
      <QuoteWrapper key={data[slide].headline}>
        <Quote
          headline={data[slide].headline}
          person={data[slide].person}
          position={data[slide].position}
        >
          {data[slide].content}
        </Quote>
      </QuoteWrapper>

      <div
        css={css`
          margin-top: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;

          button {
            margin-right: 1rem;
          }
        `}
      >
        {Object.keys(data).map(key => (
          <StyledButton
            currnet={slide === key}
            type="button"
            onClick={() => setSlide(key)}
          />
        ))}
      </div>
    </div>
  )
}
