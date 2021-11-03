import React from 'react';
import { useDispatch } from 'react-redux';
import '../css/Square.css';
import { GiCrossMark, GiCheckMark } from "react-icons/gi";

export default function EnemySquare(props) {
    const squareState = props.squareState;

    let icon;
    if (squareState === 'hit') {
        icon = <GiCheckMark />;
    } else if (squareState === 'miss') {
        icon = <GiCrossMark />;
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
    } class={`square ${squareState}Enemy`} >{icon}</div >);
}