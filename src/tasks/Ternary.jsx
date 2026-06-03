import React, { useState } from 'react'

export default function Ternary() {
    const[isOn, setState] = useState(true)
  return (
    <div>
        <h1>Light ON/OFF</h1>
        <p>{isOn ? 'ON' : 'OFF'}</p>
        <button onClick={()=>setState(!isOn)} > {isOn ? 'Turn OFF':'Turn ON' }</button>
    </div>
  )
}
