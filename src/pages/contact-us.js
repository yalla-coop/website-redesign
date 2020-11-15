import React, { useReducer } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Button } from '../components/elements'
import Input from '../components/Input'
import Layout from '../components/layout'
import Subtitle from '../components/Subtitle'
import NavBar from '../components/layout/Header/Nav'
import {
  FlexDiv,
  FlexDivWrap,
  SidePanel,
  H1Inverted,
  HeadingSection,
  NavBackground,
} from '../styles/contactUs'

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
      action="/success"
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
const ContactUs = () => {
  const isLaptop = useMediaQuery({
    minWidth: 1280,
  })
  return (
    <Layout noFooter>
      <NavBackground>
        <NavBar menuColor="white" logoColor={isLaptop ? 'black' : 'white'} />
      </NavBackground>
      <FlexDiv>
        <div>
          <Subtitle title="Interested in working with us?" size="large" />
          <Form />
        </div>
        {isLaptop && (
          <SidePanel>
            <HeadingSection>
              <H1Inverted>Get in touch!</H1Inverted>
            </HeadingSection>
          </SidePanel>
        )}
      </FlexDiv>
    </Layout>
  )
}

export default ContactUs
