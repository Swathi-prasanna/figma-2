import React from "react";

let name = "Devi";
let age = 22;

export default function DynamicComponents() {
  return (
    <div>
      <h1>Dynamic Components</h1>
      <h3>
        I am {name} and am {age} years old
      </h3>
    </div>
  );
}
