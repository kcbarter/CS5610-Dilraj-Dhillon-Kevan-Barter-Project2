import React from 'react';
import '../css/Square.css';

export default function FriendlySquare(props) {
    const squareState = props.squareState;

    let backgroundColor = 'blue';
    if (squareState === 'ship') {
        backgroundColor = 'black'; // Visible ship
    } else if (squareState === 'miss') {
        backgroundColor = 'green';
    } else if (squareState === 'hit') {
        backgroundColor = 'red';
    }

    return (<div class={`square ${backgroundColor}`} ></div >);
}