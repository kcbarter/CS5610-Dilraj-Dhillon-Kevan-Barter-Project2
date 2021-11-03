import React from 'react';
import '../css/Square.css';
import { GiCrossMark, GiCheckMark } from "react-icons/gi";

export default function FriendlySquare(props) {
    const squareState = props.squareState;

    let icon;
    if (squareState === 'hit') {
        icon = <GiCheckMark />;
    } else if (squareState === 'miss') {
        icon = <GiCrossMark />;
    }

    return (<div class={`square ${squareState}`} >{icon}</div >);
}