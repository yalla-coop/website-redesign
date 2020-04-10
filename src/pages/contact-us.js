import React, { useReducer } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Input from '../components/Input'
import Subtitle from '../components/Subtitle'
import { colors } from '../utils'

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
`
const FlexDivWrap = styled(FlexDiv)`
  justify-content: space-between;
  flex-flow: wrap;
`
const SidePanel = styled.div`
  width: 17.5vw;
  background-color: ${colors.primary};
  height: 100vh;
`
const CHANGE = 'CHANGE'

const fields = [
  { name: 'name', label: 'Full name' },
  { name: 'org', label: 'Company or organisation' },
  { name: 'email', type: 'email', label: 'Email address' },
  { name: 'phone', type: 'tel', label: 'Phone number' },
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
  const [state, dispatch] = useReducer(reducer, {})

  return (
    <div>
      <Subtitle title="Interested in working with us?" size="large" />
      <div>
        <FlexDivWrap>
          {fields.map(({ name, label, type = 'text' }) => (
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
      </div>
    </div>
  )
}

const ContactUs = () => (
  <Layout noFooter>
    <FlexDiv>
      <Form />
      <SidePanel />
    </FlexDiv>
  </Layout>
)

export default ContactUs
