import React from 'react'
import { MP, Button } from '../elements'

const data = {
  1: {
    headline:
      'As well as their obvious technical expertise, Yalla’s strong social focus made them a natural fit for organisations like ours.',
    person: 'JOHN WOOD',
    position: 'DIGITAL MANAGER',
    content: (
      <>
        <MP>
          We’ve really enjoyed working with Yalla in a discovery process for
          trade unions working in the finance sector. Beth, Joe and Jemila were
          all great facilitators, and we really quickly went from exploring
          broad challenges to defining some key problems and opportunities to
          make a real difference for activists and members.
        </MP>

        <MP>
          Their inclusive approach to the design process has also helped us
          learn from the experience and build our own capacity. Helpful
          takeaways throughout and tailored materials will mean we start our
          next digital change projects from a much stronger place.
        </MP>
        <Button
          title="read more"
          textColor="#020F1D"
          backgroundColor="transparent"
          capitalize
          buttonType="link"
          target="_blank"
          href="https://digital.tuc.org.uk/user-research-with-union-reps/"
          iconProps={{ width: 16 }}
          style={{ width: 155 }}
          hasArrow
        />
      </>
    ),
  },
  2: {
    headline:
      'In my experience, Yalla are a creative, reliable and trusted partner to work with.',
    person: 'LAURA JENNER',
    position: 'DIGITAL PROJECT MANAGER',
    content: (
      <>
        <MP>
          From start to fruition, Joe was available every step of the way –
          having time to chat through the development, and full transparency of
          the build through GitHub gave me and my stakeholders great confidence.
        </MP>

        <MP>
          Yalla worked flexibly with our budget and timescale for the Tech for
          Good project we’d asked them to help us with. Their strong team
          management also helped us feel we were able to give feedback quickly,
          and feel really involved in the process. As Joe and Simon are also
          Founders and Coders grads, I also felt they had a strong sense of
          product development from both a UX and technical point of view.
        </MP>
        <MP>
          Above all, Yalla held similar values to our organisation – an interest
          in social impact projects, and driven by value for users. I would not
          hesitate to work with them again.
        </MP>
      </>
    ),
  },
  3: {
    headline:
      'Yalla have been central to the successful development of online Time Credits, which was a significant investment in digital transformation by Tempo.',
    person: 'JUDE LUCKETT',
    position: 'DIGITAL PRODUCT MANAGER',
    content: (
      <>
        <MP>
          Working with Yalla has been absolutely brilliant – they are
          insightful, creative, energetic and very hard working, always going
          the extra mile to ensure success.
        </MP>

        <MP>
          They have helped us build in-house skills and capacity and worked in
          partnership with us – we’ve really felt like one team.
        </MP>

        <MP>I wholeheartedly recommend working with them!</MP>
      </>
    ),
  },

  4: {
    headline:
      'The team at Yalla were fantastic, they really took the time to understand the outcomes we wanted to achieve and to understand how we work - in particular working directly with volunteers on the project team.',
    person: 'RACHEL WILKINSON',
    position: 'PRODUCT MANAGER, THE SCOUTS',
    content: (
      <>
        <MP>
          Simon, Joe and Jem were flexible and supportive, taking the lead on
          the UX design, development and project management.
        </MP>
        <MP>
          They came up with creative solutions to the challenges and created a
          brilliant ALPHA product for our digital skills tool which is now ready
          for user testing.
        </MP>
        <MP>
          The timescales – due to funding restrictions – were really tight and
          they worked flat out to hit the deadline! Thanks Yalla!
        </MP>
      </>
    ),
  },
  5: {
    headline:
      'Yalla demonstrated high quality levels of attention and application to produce a product which exactly serves my project’s needs.',
    person: 'ELYSABETH WILLIAMS',
    position: 'FOUNDER, CONNECT 5',
    content: (
      <>
        <MP>
          It is a project that is highly complex; with different levels of
          users, different sessions and complex data collection pathways.
        </MP>
        <MP>
          The team, listened closely to me (who has no knowledge of app
          building) and asked questions that got beneath the skin of what was
          needed.
        </MP>
        <MP>
          I felt they really understood my product and my needs. The time I
          spent with the team and the interactions always felt productive as
          well as being a pleasure
        </MP>
      </>
    ),
  },
}

export default data
