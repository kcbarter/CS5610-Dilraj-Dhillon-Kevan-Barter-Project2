import React from 'react';
import './Square.css';

export default function FriendlySquare(props) {
    const squareState = props.squareState;

    let backgroundColor = squareState === 0 ? 'white' : 'black';

    return (<div class={`square ${backgroundColor}`} ></div >);
}