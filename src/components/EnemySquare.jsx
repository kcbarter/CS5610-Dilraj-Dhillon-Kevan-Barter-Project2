import React from 'react';
import { useDispatch } from 'react-redux';
import '../css/Square.css';

export default function EnemySquare(props) {
    const squareState = props.squareState;

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
    } class={`square ${squareState}Enemy`} ></div >);
}