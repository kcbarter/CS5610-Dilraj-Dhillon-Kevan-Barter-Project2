import '../css/Board.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FriendlyBoard from "./FriendlyBoard";
import EnemyBoard from './EnemyBoard';
import PlayerWins from './PlayerWins';
import EnemyWins from './EnemyWins'

export default function TwoPlayerBoard() {
    const playerTurnState = useSelector((state) => state.playerTurn);
    const friendlyBoardState = useSelector((state) => state.friendlyBoard);
    const enemyBoardState = useSelector((state) => state.enemyBoard);
    const aiChoice = useSelector((state) => state.aiChoice);
    const dispatch = useDispatch();

    // End game logic
    let friendlyFlag = 0;
    for (let i = 0; i < friendlyBoardState.length; i++) {
        let row = friendlyBoardState[i];
        for (let j = 0; j < row.length; j++) {
            if (friendlyBoardState[i][j] === 'ship') {
                friendlyFlag = 1;
            }
        }
    }
    if (friendlyFlag === 0) {
        return (
            <EnemyWins />
        )
    }
    let enemyFlag = 0;
    for (let i = 0; i < enemyBoardState.length; i++) {
        let row = enemyBoardState[i];
        for (let j = 0; j < row.length; j++) {
            if (enemyBoardState[i][j] === 'ship') {
                enemyFlag = 1;
            }
        }
    }
    if (enemyFlag === 0) {
        return (
            <PlayerWins />
        )
    }

    // AI logic
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
                <div class='space'></div>
                <FriendlyBoard />
            </div>
        </div>
    )
}