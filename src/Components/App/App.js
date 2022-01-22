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
const displayArr = display.split("");
let nOfDots = displayArr.filter(char => char === ".").length;
console.log("dots length", nOfDots);

// eslint-disable-next-line array-callback-return
let nOfOps = displayArr.filter((char) => {
  if (char === "+" || char === "-" || char === "x" || char === "/") {
    return true;
  }}
).length;
console.log("ops length", nOfOps);
if (nOfDots === 2) {return}
if (nOfDots >= 1 && !nOfOps) {return}
if (nOfDots === 2 && !nOfOps) {return}

if (nOfDots && !nOfOps) {return};
}

if (e.target.value === "+") {

  console.log("Current display value", display)
  const arrOfDecimalPoint = String(display).split("").filter(char => char === "+")
  if (arrOfDecimalPoint.length) {
    return
  }
}

if (e.target.value === "x") {
  
  console.log("Current display value", display)
  const arrOfDecimalPoint = String(display).split("").filter(char => char === "x")
  if (arrOfDecimalPoint.length) {
    return
  }
}

if (e.target.value === "/") {
  console.log("Current display value", display)
  const arrOfDecimalPoint = String(display).split("").filter(char => char === "/")
  if (arrOfDecimalPoint.length) {
    return
  }
}

if (e.target.value === "-") {
  console.log("Current display value", display)
  const arrOfDecimalPoint = String(display).split("").filter(char => char === "-")
  if (arrOfDecimalPoint.length > 1) {
    return
  }
}


if (e.target.value === "=") {
const operators = ["+", "-", "x", "/"];
const searchOperator = operators.filter(o => display.indexOf(o) > -1);
const operationArr = display.split(searchOperator[0]);
if (searchOperator.length > 1) {
  const num = `${operationArr.pop()}`;
  console.log("current num:", num);
  operationArr.push(+num);
  console.log("This is the operation arr", operationArr);
  
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

console.log("Result:", operationResult)
if (/\./.test(operationResult)) {operationResult = operationResult.toFixed(4)}
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

if (/[+-x\/]/.test(e.target.value)) {
  if (display === 0) {
    updateDisplay(`${display}${e.target.value}`);
  }
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
