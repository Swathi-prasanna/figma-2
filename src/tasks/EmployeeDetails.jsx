import React, { useState } from "react";

function EmployeeDetails() {
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    Phonenumber: "",
    city:''
  });
  return (
    <div>
      <h1>EmployeeDetails</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
      /><br/><br></br>
      <input
        type="number"
        placeholder="Enter Age"
        value={employee.age}
        onChange={(e) => setEmployee({ ...employee, age: e.target.value })}
      /><br/><br></br>
      <input type="tel" placeholder="Enter Phone Number"
      value={employee.Phonenumber}
        onChange={(e) => setEmployee({ ...employee, Phonenumber: e.target.value })} /><br/><br></br>
        <input
        type="text"
        placeholder="Enter City"
        value={employee.city}
        onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
      />
      <h3>I am {employee.name} and I'm From {employee.city}.</h3><br/>
      <h4>I am {employee.age} old and my mobile number is {employee.Phonenumber}.</h4>
    </div>
  );
}

export default EmployeeDetails;