
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(1);

  const increaseCount=()=>{
    setCount(count+1);

    let span = document.getElementById("number");
    span.innerHTML = count;
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked <span id="number">0</span> times</p>
        <button id="btn" onClick={increaseCount}>CLick Me</button>
    </div>
  )
}

export default App
