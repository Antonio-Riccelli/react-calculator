import React, {useState} from 'react';
import './index.css';

export default function Button(props) {

const text = props.text;
const id = props.id;
const value = props.value;
const onClick = props.onClick;

    return (
        <button id={id} value={value} onClick={onClick}>{text}</button>
    )
}