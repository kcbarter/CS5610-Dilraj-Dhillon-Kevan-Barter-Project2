import React from 'react';
import './Square.css';

export default function FriendlySquare(props) {
    const squareState = props.squareState;

    let backgroundColor = 'blue';
    if (squareState === 1) {
        backgroundColor = 'black'; // Visible ship
    } else if (squareState === 2) {
        backgroundColor = 'green';
    } else if (squareState === 3) {
        backgroundColor = 'red';
    }

    return (<div class={`square ${backgroundColor}`} ></div >);
}