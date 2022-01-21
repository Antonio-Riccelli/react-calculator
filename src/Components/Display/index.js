import React, {useState} from 'react';
import './index.css';

export default function Display(props) {
    return (
        <section id="display-container">
            <p id="display">{props.value}</p>
        </section>
    )
}