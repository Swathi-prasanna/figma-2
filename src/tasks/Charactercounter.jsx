import React,{useState} from "react";

export default function Charactercounter() {
  const[char,setChar] = useState("");
  return (
    <div>
      <h1>Charactercounter</h1>
      <input type="text" placeholder="Enter Char" value={char} onChange={(e)=>setChar(e.target.value)} />
      <h2>current text: {char}</h2>
      <h2>characters:{char.length}</h2>
    </div>
  );
}
