import React, { useState } from 'react';
import './App.css';
import ButtonsSection from '../ButtonsSection';
import Display from '../Display';

function App() {
const [display, updateDisplay] = useState(0);

function handleNumberClick(e) {
if (e.target.value === "C") {
  updateDisplay(0);
  console.log("New display state:", display)
  return;
}

if (e.target.value === `0` && display === `0`) {
  updateDisplay(0);
  return;
}

if (e.target.value === ".") {
  const arrOfDecimalPoint = display.split("").filter(char => char === ".")
  if (arrOfDecimalPoint.length) {
    return
  }
}

if (e.target.value === "+") {
  const arrOfDecimalPoint = display.split("").filter(char => char === "+")
  if (arrOfDecimalPoint.length) {
    return
  }
}

if (e.target.value === "x") {
  const arrOfDecimalPoint = display.split("").filter(char => char === "x")
  if (arrOfDecimalPoint.length) {
    return
  }
}

if (e.target.value === "/") {
  const arrOfDecimalPoint = display.split("").filter(char => char === "/")
  if (arrOfDecimalPoint.length) {
    return
  }
}


if (e.target.value === "=") {
const operators = ["+", "-", "x", "/"];
// console.log("Type of display:", typeof display);
const searchOperator = operators.filter(o => display.indexOf(o) > -1);
const operationArr = display.split(searchOperator[0]);
if (searchOperator.length > 1) {
  const num = `${operationArr.pop()}`;
  console.log("current num:", num);
  operationArr.push(+num);
  console.log("This is the operation arr", operationArr);
  // operationArr.forEach(e => {console.log(typeof e)})
}
console.log("Searchoperator",searchOperator )
console.log("operationArr", operationArr)
let operationResult = 0;
switch(searchOperator[0]) {
  case "x":
    operationResult = operationArr[0] * operationArr[1];
    break;
  case "+":
    operationResult = +operationArr[0] + +operationArr[1];
    break;
  case "-":
    operationResult = operationArr[0] - operationArr[1];
    break;
  case "/":
    operationResult = operationArr[0] / operationArr[1];
    break;
    default:
      return;
}

// operationResult = +operationResult.toFixed(4);
console.log("Result:", operationResult)
updateDisplay(operationResult);
return
}


if (display === 0) {
  updateDisplay(e.target.value)
  console.log("New display state:", display)
} else if (display) {
updateDisplay(display + e.target.value)
console.log("New display state:", display)
}

}





  return (
    <div className="App">
    <section id="calculator-container">
    <Display value={display} />
    <ButtonsSection onClick={(e) => handleNumberClick(e)}/>
    </section>
    </div>
  );
}

export default App;
