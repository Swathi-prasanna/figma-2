import React from 'react'
import { useData } from './Context'

function FirstName() {
  const {surprise}=useData()
  return (
    <div>
      <h1>FirstName</h1>
      <h2>The context in firstname is {surprise}</h2>
    </div>
  )
}

export default FirstName