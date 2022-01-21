import React, {useState} from 'react';
import "./index.css";
import Button from "../Button";

export default function OperatorButtonsContainer(props) {
    // const operators = ["+", "-", "x", "/"]

    const operators = [
        {
            operator: "+",
            name: "add"
        },
        {
            operator: "-",
            name: "subtract"
        },
        {
            operator: "x",
            name: "multiply"
        },
        {
            operator: "/",
            name: "divide"
        }
    ]

    const onClick=props.onClick;

    return (
        <section id="operator-buttons-container">
        <div id="operator-buttons-wrapper">
            {operators.map(e => {
                return <Button text={e.operator} id={e.name} value={e.operator} onClick={onClick} key={e.operator} />
            })}
            </div>
            <div id="equals-wrapper">
                <Button text="=" id="equals" value="=" onClick={onClick}/>
            </div>
        </section>
    )
   
}