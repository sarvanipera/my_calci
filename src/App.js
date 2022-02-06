

import React, {useState} from "react";
import "./App.css"

function App(){
  const [result, setResult] = useState ("");
  
  function handleKeypad(e){
    setResult(result.concat(e.target.name));  
  }

  function backspace(){
    setResult(result.slice(0,-1))
  }

  function clear(){
    setResult("");
  }

  function calculate(){
    try{
      setResult(eval(result).toString());
    } catch(error){
      setResult("Error");
    }
  }

  return(
    <div className="calculator">
      <h1>CALCULATOR</h1>
      <form>
        <input type="text" value={result} ></input>
      </form>
      <div className="buttons">
        <button id="clear" onClick={clear}>AC</button>
        <button id="backspace" onClick={backspace}>CLR</button>
        <button name="+"onClick={handleKeypad}>+</button>
        <button name="7"onClick={handleKeypad}>7</button>
        <button name="8"onClick={handleKeypad}>8</button>
        <button name="9"onClick={handleKeypad}>9</button>
        <button name="-"onClick={handleKeypad}>-</button>        
        <button name="4"onClick={handleKeypad}>4</button>
        <button name="5"onClick={handleKeypad}>5</button> 
        <button name="6"onClick={handleKeypad}>6</button>
        <button name="*"onClick={handleKeypad}>*</button>
        <button name="1"onClick={handleKeypad}>1</button>
        <button name="2"onClick={handleKeypad}>2</button>
        <button name="3"onClick={handleKeypad}>3</button>
        <button name="/"onClick={handleKeypad}>/</button>
        <button name="0"onClick={handleKeypad}>0</button>
        <button name="00"onClick={handleKeypad}>00</button>
        <button name="."onClick={handleKeypad}>.</button>
        <button id="result" onClick={calculate}>=</button>
      </div>
    </div>
    
  )
}


export default App;
