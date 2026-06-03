import React, { useState } from 'react'

export default function LiveNameDisplay() {
    const[name, setName]=useState("")

  return (
    <div>
        <h1>LiveNameDisplay</h1>
        <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <h3>Hello {name || "Guest"}</h3>
        </div>
  )
}
