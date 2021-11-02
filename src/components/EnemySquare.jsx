import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export default function EnemySquare(props) {
    const squareState = props.squareState;

    let backgroundColor = 'blue';
    if (squareState === 1) {
        backgroundColor = 'blue'; // Invisible ship
    } else if (squareState === 2) {
        backgroundColor = 'green';
    } else if (squareState === 3) {
        backgroundColor = 'red';
    }

    const dispatch = useDispatch();

    return (<div onClick={() => {
        dispatch(
            {
                type: 'enemyBoardClick',
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