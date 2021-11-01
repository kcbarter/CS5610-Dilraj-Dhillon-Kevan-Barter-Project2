import Square from "./Square"
import './Board.css'
import { useSelector } from 'react-redux';

export default function Board() {
    const boardState = useSelector((state) => state.game)
    const countState = useSelector((state) => state.counter)

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square clicked={boardState[i][j]} x={i} y={j} />))
        }
    }

    return (
        <div>
            <h1>Counter {countState}</h1>
            <div class="board">
                {boardComponent}
            </div>
        </div>
    )
}