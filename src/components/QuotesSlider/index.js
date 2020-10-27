import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { Quote } from '../common'
import { colors } from '../../utils'

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

export default function App() {
  const [slide, setSlide] = useState(1)
  return (
    <div className="App">
      {slide === 1 && (
        <Quote
          headline="In my experience, Yalla are a creative, reliable and trusted partner to work with."
          person="LAURA JENNER"
          position="DIGITAL PROJECT MANAGER"
        >
          From start to fruition, Joe was available every step of the way –
          having time to chat through the development, and full transparency of
          the build through GitHub gave me and my stakeholders great confidence.
          <br />
          <br />
          Yalla worked flexibly with our budget and timescale for the Tech for
          Good project we’d asked them to help us with. Their strong team
          management also helped us feel we were able to give feedback quickly,
          and feel really involved in the process. As Joe and Simon are also
          Founders and Coders grads, I also felt they had a strong sense of
          product development from both a UX and technical point of view.
          <br />
          <br />
          Above all, Yalla held similar values to our organisation – an interest
          in social impact projects, and driven by value for users. I would not
          hesitate to work with them again.
          <br />
          <br />
        </Quote>
      )}
      {slide === 2 && (
        <Quote
          headline="In my experience, Yalla are a creative, reliable and trusted partner to work with."
          person="LAURA JENNER"
          position="DIGITAL PROJECT MANAGER"
        >
          Seconed From start to fruition, Joe was available every step of the
          way – having time to chat through the development, and full
          transparency of the build through GitHub gave me and my stakeholders
          great confidence.
          <br />
          <br />
          Yalla worked flexibly with our budget and timescale for the Tech for
          Good project we’d asked them to help us with. Their strong team
          management also helped us feel we were able to give feedback quickly,
          and feel really involved in the process. As Joe and Simon are also
          Founders and Coders grads, I also felt they had a strong sense of
          product development from both a UX and technical point of view.
          <br />
          <br />
          Above all, Yalla held similar values to our organisation – an interest
          in social impact projects, and driven by value for users. I would not
          hesitate to work with them again.
          <br />
          <br />
        </Quote>
      )}
      {slide === 3 && (
        <Quote
          headline="In my experience, Yalla are a creative, reliable and trusted partner to work with."
          person="LAURA JENNER"
          position="DIGITAL PROJECT MANAGER"
        >
          Third From start to fruition, Joe was available every step of the way
          – having time to chat through the development, and full transparency
          of the build through GitHub gave me and my stakeholders great
          confidence.
          <br />
          <br />
          Yalla worked flexibly with our budget and timescale for the Tech for
          Good project we’d asked them to help us with. Their strong team
          management also helped us feel we were able to give feedback quickly,
          and feel really involved in the process. As Joe and Simon are also
          Founders and Coders grads, I also felt they had a strong sense of
          product development from both a UX and technical point of view.
          <br />
          <br />
          Above all, Yalla held similar values to our organisation – an interest
          in social impact projects, and driven by value for users. I would not
          hesitate to work with them again.
          <br />
          <br />
        </Quote>
      )}
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
        <StyledButton
          currnet={slide === 1}
          type="button"
          onClick={() => setSlide(1)}
        />
        <StyledButton
          currnet={slide === 2}
          type="button"
          onClick={() => setSlide(2)}
        />
        <StyledButton
          currnet={slide === 3}
          type="button"
          onClick={() => setSlide(3)}
        />
      </div>
    </div>
  )
}
