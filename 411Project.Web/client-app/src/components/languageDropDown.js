import React from 'react'
import { Select } from 'semantic-ui-react'

const languageOptions = [
  { key: 1, value:1, text: "Java"},
  { key: 2, value:2, text: "Python"},
  { key: 3, value:3, text: "C"}
]

const langDrop = () => (
  <Select placeholder = "Java"  options={languageOptions} />
)

export default langDrop;
