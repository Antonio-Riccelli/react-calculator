import React, {useState} from 'react';
import './index.css';
import NumberButtonsContainer from "../NumberButtonsContainer";
import OperatorButtonsContainer from "../OperatorButtonsContainer";

export default function ButtonsSection (props) {

const onClick = props.onClick;
console.log("This is the buttonsection onclick", onClick)

    return (
        <section id="buttons-section">
            <NumberButtonsContainer onClick={onClick} />
            <OperatorButtonsContainer onClick={onClick} />
        </section>
    )
}