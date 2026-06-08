import React from 'react'
import { useData } from './Context'

function SecondPage() {
    const {surprise}=useData()
  return (
    <div>
        <h1>SecondPage</h1>
        <h2>The context in secondpage is {surprise}</h2>
    </div>
  )
}

export default SecondPage