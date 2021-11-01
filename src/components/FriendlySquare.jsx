import React from 'react';
import './Square.css';

export default function FriendlySquare(props) {
    const clicked = props.clicked;

    let backgroundColor = clicked === 0 ? 'white' : 'black';

    return (<div class={`square ${backgroundColor}`} ></div >);
}