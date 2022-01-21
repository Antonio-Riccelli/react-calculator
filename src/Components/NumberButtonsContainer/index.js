import React, {useState} from "react";
import "./index.css";
import Button from "../Button";

export default function NumberButtonsContainer(props) {

    const onClick = props.onClick;

// const values = [9,8,7,6,5,4,3,2,1,0,".", "C"];

const values = [
    {
        num: 9,
        name: "nine"
    },
    {
        num: 8,
        name: "eight"
    },
    {
        num: 7,
        name: "seven"
    },
    {
        num: 6,
        name: "six",
    },
    {
        num: 5,
        name: "five"
    },
    {
        num: 4,
        name: "four"
    },
    {
        num: 3,
        name: "three"
    },
    {
        num: 2,
        name: "two"
    },
    {
        num: 1,
        name: "one"
    },
    {
        num: 0,
        name: "zero"
    },
    {
        num: ".",
        name: "decimal"
    },
    {
        num: "C",
        name: "clear"
    }
]

    return (
        <section id="number-buttons-container">
            {values.map(e => {
                return <Button text={e.num} onClick={onClick} key={e.name} value={e.num} id={e.name}/>
            })}
        </section>
    )
    
}