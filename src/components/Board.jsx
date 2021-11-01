import Square from "./Square"
import './Board.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function Board() {
    const boardState = useSelector((state) => state.game);
    const countState = useSelector((state) => state.counter);
    const playerTurnState = useSelector((state) => state.playerTurn);

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square clicked={boardState[i][j]} x={i} y={j} />))
        }
    }

    const boardComponent2 = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent2.push((<Square clicked={boardState[i][j]} x={i} y={j} />))
        }
    }

    // const dispatch = useDispatch();
    // if (playerTurnState === 0) {
    //     dispatch(
    //         {
    //             type: 'boardClick',
    //             x: 0,
    //             y: 0,
    //         }
    //     );
    // }

    return (
        <div>
            <h1>Counter {countState}</h1>
            <h1>Turn: {playerTurnState}</h1>
            <div class="board">
                {boardComponent}
            </div>
            <div class="board">
                {boardComponent2}
            </div>
        </div>
    )
}