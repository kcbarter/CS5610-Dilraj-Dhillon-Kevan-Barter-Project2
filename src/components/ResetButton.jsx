import '../css/Button.css';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function ResetButton() {

    const dispatch = useDispatch();

    return (<button onClick={() => {
        dispatch(
            {
                type: 'reset',
            }
        );
    }
    } class='reset'>RESET</button >);
}