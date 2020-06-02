import React, { useReducer } from 'react'
import { css } from 'styled-components'
import { Button } from '../../components/elements'
import Input from '../../components/Input'
import Layout from '../../components/layout'
import Subtitle from '../../components/Subtitle'
import {
  FlexDiv,
  FlexDivWrap,
  SidePanel,
  H1Inverted,
  HeadingSection,
} from './styles'

const CHANGE = 'CHANGE'

const fields = [
  { name: 'name', label: 'Full name' },
  { name: 'organization', label: 'Company or organisation' },
  { name: 'email', type: 'email', label: 'Email address' },
  { name: 'phone-number', type: 'tel', label: 'Phone number' },
]

const reducer = (s, action) => {
  switch (action.type) {
    case CHANGE: {
      const { key, value } = action
      return { ...s, [key]: value }
    }
    default:
      return s
  }
}
const Form = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    org: '',
    email: '',
    phone: '',
  })

  return (
    <form
      method="post"
      name="contact-us"
      action="/contact-us/success"
      netlify
      netlify-honeypot="bot-field"
    >
      <FlexDivWrap>
        <label htmlFor="bot-field" hidden>
          Don’t fill this out if you&apos;re human:
          <input name="bot-field" id="bot-field" />
        </label>
        <input type="hidden" name="form-name" value="contact" />
        {fields.map(({ name, label, type }) => (
          <Input
            key={name}
            type={type}
            label={label}
            name={name}
            value={state[name]}
            onChange={({ target: { value } }) =>
              dispatch({ type: CHANGE, key: name, value })
            }
          />
        ))}
      </FlexDivWrap>
      <Input
        textarea
        name="project"
        label="message"
        placeholder="Let us know your project details"
        value={state.message}
        onChange={({ target: { value } }) =>
          dispatch({ type: CHANGE, key: 'message', value })
        }
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        title="Send message"
        hasArrow
        capitalize
        type="submit"
        onClick={() => {}}
      />
    </form>
  )
}
const ContactUs = () => (
  <Layout noFooter>
    <FlexDiv>
      <div
        css={css`
          padding: 7.5rem;
          width: 100%;
        `}
      >
        <Subtitle title="Interested in working with us?" size="large" />
        <div
          css={css`
            padding: 7.5rem 2rem 7.5rem 3.5rem;
            width: 65%;
          `}
        >
          <Form />
        </div>
      </div>

      <SidePanel>
        <HeadingSection>
          <H1Inverted>Get in touch!</H1Inverted>
        </HeadingSection>
      </SidePanel>
    </FlexDiv>
  </Layout>
)

export default ContactUs
