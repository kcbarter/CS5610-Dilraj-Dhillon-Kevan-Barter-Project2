import React from 'react';
import '../css/Square.css';

export default function FriendlySquare(props) {
    const squareState = props.squareState;

    return (<div class={`square ${squareState}`} ></div >);
}