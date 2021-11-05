import React from "react";

function Input({onChange}) {
    return (
          <input 
            onChange={(e) => onChange(e.target.value)}    
            type="text" 
            id="input" 
            placeholder="Search for a country…"
            />  );
}

export default Input;