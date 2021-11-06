import '../css/GameOver.css'
import ResetButton from './ResetButton'

export default function PlayerWins() {
    return (
        <div class='endGameHeader'>
            <h1>GAME OVER PLAYER WINS!!!!!!</h1>
            <ResetButton />
        </div>
    )
}