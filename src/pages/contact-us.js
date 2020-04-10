import React, { useReducer } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Input from '../components/Input'
import Subtitle from '../components/Subtitle'

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-flow: wrap;
`
const CHANGE = 'CHANGE'
const Form = () => {
  const [state, dispatch] = useReducer((s, action) => {
    switch (action.type) {
      case CHANGE: {
        const { key, value } = action
        return { ...s, [key]: value }
      }
      default:
        return s
    }
  }, {})

  return (
    <div>
      <Subtitle title="Interested in working with us?" size="large" />
      <div>
        <FlexDiv>
          {[
            { name: 'name', label: 'Full name' },
            { name: 'org', label: 'Company or organisation' },
            { name: 'email', type: 'email', label: 'Email address' },
            { name: 'phone', type: 'tel', label: 'Phone number' },
          ].map(({ name, label, type = 'text' }) => (
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
        </FlexDiv>
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
      </div>
    </div>
  )
}

const ContactUs = () => (
  <Layout>
    <Form />
  </Layout>
)

export default ContactUs
