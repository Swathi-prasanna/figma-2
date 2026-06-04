import React, { useState } from "react";

export default function Login() {
  const [data, setData] = useState({ name: "", password: "" });
  const[details,setDetails] = useState(false)
  const showDetails = ()=>{
    setDetails(true)
  }
  return (
    <div>
      <h1>Login Form</h1>
      <label for="name">UserName:  </label>
      <input
        type="text"
        placeholder="Enter Name"
        value={data.name}   
        onChange={(e) => setData({ ...data, name: e.target.value })}
      ></input><br></br><br></br>
      <label for="password">Password: </label>
      <input
        type="password"
        placeholder="Enter Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      ></input><br></br><br></br>
      <button onClick={showDetails}>Show Details</button>
      {details && (
        <div>
            <h3>UserName: {data.name}</h3>
            <h3>Password: {data.password}</h3>
        </div>
      )}
    </div>
  );
}
