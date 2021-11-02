import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export default function EnemySquare(props) {
    const squareState = props.squareState;

    let backgroundColor = 'blue';
    if (squareState === 'ship') {
        backgroundColor = 'blue'; // Invisible ship
    } else if (squareState === 'miss') {
        backgroundColor = 'green';
    } else if (squareState === 'hit') {
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
                squareStateOfClicked: squareState,
            }
        );
    }
    } class={`square ${backgroundColor}`} ></div >);
}