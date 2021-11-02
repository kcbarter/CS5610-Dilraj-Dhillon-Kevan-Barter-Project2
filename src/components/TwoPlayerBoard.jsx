import './Board.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FriendlyBoard from "./FriendlyBoard";
import EnemyBoard from './EnemyBoard';

export default function TwoPlayerBoard() {
    const playerTurnState = useSelector((state) => state.playerTurn);

    // AI logic
    const dispatch = useDispatch();
    if (playerTurnState === 0) {
        dispatch(
            {
                type: 'friendlyBoardClick',
                x: 1,
                y: 1,
            }
        );
        dispatch(
            {
                type: 'updatePlayerTurn',
            }
        );
    }

    return (
        <div>
            <h1>Turn: {playerTurnState}</h1>
            <div class='container'>
                <EnemyBoard />
                <FriendlyBoard />
            </div>
        </div>
    )
}