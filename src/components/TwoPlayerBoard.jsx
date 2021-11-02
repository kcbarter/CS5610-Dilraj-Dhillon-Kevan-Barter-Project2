import './Board.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FriendlyBoard from "./FriendlyBoard";
import EnemyBoard from './EnemyBoard';

export default function TwoPlayerBoard() {
    const playerTurnState = useSelector((state) => state.playerTurn);
    const friendlyBoardState = useSelector((state) => state.friendlyBoard); // End game logic
    const enemyBoardState = useSelector((state) => state.enemyBoard);
    const aiChoice = useSelector((state) => state.aiChoice);

    // AI logic
    const dispatch = useDispatch();
    if (playerTurnState === 0) {
        dispatch(
            {
                type: 'friendlyBoardClick',
                x: aiChoice[0],
                y: aiChoice[1],
            }
        );
        dispatch(
            {
                type: 'aiNextChoice',
            }
        );
        dispatch(
            {
                type: 'updatePlayerTurn',
                squareStateOfClicked: 'empty', // Hacky to prevent infinite loop
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