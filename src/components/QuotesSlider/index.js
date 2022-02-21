import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { Quote } from '../common'
import { MP } from '../elements'
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

export default function App() {
  const [slide, setSlide] = useState(1)
  return (
    <div>
      {slide === 1 && (
        <QuoteWrapper>
          <Quote
            headline="In my experience, Yalla are a creative, reliable and trusted partner to work with."
            person="LAURA JENNER"
            position="DIGITAL PROJECT MANAGER"
          >
            <MP>
              From start to fruition, Joe was available every step of the way –
              having time to chat through the development, and full transparency
              of the build through GitHub gave me and my stakeholders great
              confidence.
            </MP>

            <MP>
              Yalla worked flexibly with our budget and timescale for the Tech
              for Good project we’d asked them to help us with. Their strong
              team management also helped us feel we were able to give feedback
              quickly, and feel really involved in the process. As Joe and Simon
              are also Founders and Coders grads, I also felt they had a strong
              sense of product development from both a UX and technical point of
              view.
            </MP>
            <MP>
              Above all, Yalla held similar values to our organisation – an
              interest in social impact projects, and driven by value for users.
              I would not hesitate to work with them again.
            </MP>
          </Quote>
        </QuoteWrapper>
      )}
      {slide === 2 && (
        <QuoteWrapper>
          <Quote
            headline="Yalla have been central to the successful development of online Time Credits, which was a significant investment in digital transformation by Tempo."
            person="JUDE LUCKETT"
            position="DIGITAL PRODUCT MANAGER"
          >
            <MP>
              Working with Yalla has been absolutely brilliant – they are
              insightful, creative, energetic and very hard working, always
              going the extra mile to ensure success.
            </MP>

            <MP>
              They have helped us build in-house skills and capacity and worked
              in partnership with us – we’ve really felt like one team.
            </MP>

            <MP>I wholeheartedly recommend working with them!</MP>
          </Quote>
        </QuoteWrapper>
      )}
      {slide === 3 && (
        <QuoteWrapper>
          <Quote
            headline="The team at Yalla were fantastic, they really took the time to understand the outcomes we wanted to achieve and to understand how we work - in particular working directly with volunteers on the project team."
            person="Rachel Wilkinson"
            position="Product Manager, The Scouts"
          >
            <MP>
              Simon, Joe and Jem were flexible and supportive, taking the lead
              on the UX design, development and project management.
            </MP>
            <MP>
              They came up with creative solutions to the challenges and created
              a brilliant ALPHA product for our digital skills tool which is now
              ready for user testing.
            </MP>
            <MP>
              The timescales – due to funding restrictions – were really tight
              and they worked flat out to hit the deadline! Thanks Yalla!
            </MP>
          </Quote>
        </QuoteWrapper>
      )}
      {slide === 4 && (
        <QuoteWrapper>
          <Quote
            headline="Yalla demonstrated high quality levels of attention and application to produce a product which exactly serves my project’s needs."
            person="Elysabeth Williams"
            position="Founder, Connect 5"
          >
            <MP>
              It is a project that is highly complex; with different levels of
              users, different sessions and complex data collection pathways.
            </MP>
            <MP>
              The team, listened closely to me (who has no knowledge of app
              building) and asked questions that got beneath the skin of what
              was needed.
            </MP>
            <MP>
              I felt they really understood my product and my needs. The time I
              spent with the team and the interactions always felt productive as
              well as being a pleasure
            </MP>
          </Quote>
        </QuoteWrapper>
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
        <StyledButton
          currnet={slide === 4}
          type="button"
          onClick={() => setSlide(4)}
        />
      </div>
    </div>
  )
}
