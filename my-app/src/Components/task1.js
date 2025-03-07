import { useState } from "react";
import React from "react";

export function User() 
{
    const [name, setName] = useState("Tom");  // name="Tom"
    const [age, setAge] = React.useState(36);       // age=36
    const [penis,setPenis] = useState(1)     
    function handleNameChange(event) {    
      setName(event.target.value);  
   }
     
    function handleAgeChange(event) {    
      setAge(event.target.value);  
   }

   function penisChangew(e) {
    setPenis(e.target.value)
   }
    return (
      <div>
        <h3>Имя: {name}</h3>
        <h3>Возраст: {age}</h3>
        <h3>Размер Члена: {penis}</h3>
         
        <div>
          <p>Имя: <input type="text" onChange={handleNameChange} /></p>
          <p>Возраст: <input type="number" min="1" max="100" onChange={handleAgeChange} /></p>
          <p>PENIS: <input type="number" min="1" max="12" onChange={penisChangew} /></p>
        </div>
      </div>
    );
  }