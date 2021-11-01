import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export default function EnemySquare(props) {
    const clicked = props.clicked;

    let backgroundColor = clicked === 0 ? 'white' : 'black';

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