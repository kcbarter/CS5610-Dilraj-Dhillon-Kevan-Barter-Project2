import '../css/Board.css'
import { useSelector } from 'react-redux';
import EnemyBoard from './EnemyBoard';
import PlayerWins from './PlayerWins';
import ResetButton from './ResetButton';

export default function OnePlayerBoard() {
    const enemyBoardState = useSelector((state) => state.enemyBoard);

    // End game logic
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

    return (
        <div class='view'>
            <div class='buttonContainer'><ResetButton /></div>
            <div class='container'>
                <EnemyBoard />
            </div>
        </div>
    )
}