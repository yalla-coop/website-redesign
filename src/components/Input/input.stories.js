import React from 'react'
import Input from './index'

export default {
  title: 'Input',
}

export const CustomInput = () => (
  <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Input
        name="username"
        label="full name"
        placeholder="add you dull name"
        onChange={() => null}
      />
      <Input
        name="password"
        label="company"
        placeholder="add your company name"
        onChange={() => null}
      />
    </div>
    <Input
      big
      name="text area"
      label="message"
      placeholder="let is know your idea"
      onChange={() => null}
    />
  </>
)
