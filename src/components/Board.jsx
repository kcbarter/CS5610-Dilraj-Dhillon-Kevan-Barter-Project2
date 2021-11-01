import './Board.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FriendlyBoard from "./FriendlyBoard";

export default function Board() {
    const playerTurnState = useSelector((state) => state.playerTurn);

    // AI logic
    // const dispatch = useDispatch();
    // if (playerTurnState === 0) {
    //     dispatch(
    //         {
    //             type: 'boardClick',
    //             x: 0,
    //             y: 0,
    //         }
    //     );
    //     dispatch(
    //         {
    //             type: 'updatePlayerTurn',
    //         }
    //     );
    // }

    return (
        <div>
            <h1>Turn: {playerTurnState}</h1>
            <FriendlyBoard />
        </div>
    )
}