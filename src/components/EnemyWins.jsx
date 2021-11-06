import '../css/GameOver.css'
import ResetButton from './ResetButton'

export default function EnemyWins() {
    return (
        <div class='endGameHeader'>
            <h1>GAME OVER ENEMY WINS!!!!!!</h1>
            <ResetButton />
        </div>
    )
}