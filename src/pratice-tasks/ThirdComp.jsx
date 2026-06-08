import React from 'react'

const ThirdComp = (props) => {
    const {name, age, city} = props.name;
  return (
    <div>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>City : {city}</h2>
    </div>
  )
}

export default ThirdComp