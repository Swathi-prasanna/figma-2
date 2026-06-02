import React from 'react'

let student = {
    name : "Devi",
    Age : 22,
    City: "Guntur",
};

function Objects() {
  return (
    <div>
        <h4>I am "{student.name}" and I am from "{student.City}"</h4>
    </div>
  )
}

export default Objects;

