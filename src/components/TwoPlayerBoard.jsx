import './Board.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FriendlyBoard from "./FriendlyBoard";
import EnemyBoard from './EnemyBoard';

export default function TwoPlayerBoard() {
    const playerTurnState = useSelector((state) => state.playerTurn);
    const friendlyBoardState = useSelector((state) => state.friendlyBoard);
    const enemyBoardState = useSelector((state) => state.enemyBoard);
    const aiChoice = useSelector((state) => state.aiChoice);

    // End game logic
    let flag = 0;
    for (let i = 0; i < friendlyBoardState.length; i++) {
        let row = friendlyBoardState[i];
        for (let j = 0; j < row.length; j++) {
            if (friendlyBoardState[i][j] === 'ship') {
                flag = 1;
            }
        }
    }

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

    if (flag === 0) {
        return (
            <div>GAME OVER</div>
        )
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