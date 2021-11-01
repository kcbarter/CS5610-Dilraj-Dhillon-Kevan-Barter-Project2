import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export default function FriendlySquare(props) {
    const clicked = props.clicked;

    let backgroundColor = clicked === 0 ? 'white' : 'black';

    const dispatch = useDispatch();

    return (<div onClick={() => {
        dispatch(
            {
                type: 'friendlyBoardClick',
                x: props.x,
                y: props.y,
            }
        );
        dispatch(
            {
                type: 'updatePlayerTurn',
            }
        );
    }
    } class={`square ${backgroundColor}`} ></div >);
}