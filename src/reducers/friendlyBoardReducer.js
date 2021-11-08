const shipLengths = [5, 4, 3, 3, 2];

const defaultState = [
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
];

function randomizeBoard(emptyArray, shipsArray) {
    let randomizedBoard = emptyArray.map(inner => inner.slice());

    for (let shipLength of shipsArray) {
        const tranposeBoard = Math.floor(Math.random() * 2);
        if (tranposeBoard === 1) {
            randomizedBoard = transpose(randomizedBoard);
        }
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        const BOUNDARY = 10;
        let boundaryFlag = 1;
        while (boundaryFlag === 1) {
            boundaryFlag = 0;
            for (let i = col; i < col + shipLength; i++) {
                if (i === BOUNDARY || randomizedBoard[row][i] === 'ship') {
                    boundaryFlag = 1;
                    break;
                }
            }
            if (boundaryFlag === 0) {
                break;
            }
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
        }

        randomizedBoard[row].fill('ship', col, col + shipLength);
    }
    return randomizedBoard;
}

function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

export default function friendlyBoardReducer(
    state = randomizeBoard(defaultState, shipLengths), action
) {
    if (action.type === 'friendlyBoardClick') {
        const value = state[action.x][action.y];
        if (value === 'empty') {
            state[action.x][action.y] = 'miss';
        } else if (value === 'ship') {
            state[action.x][action.y] = 'hit';
        }
        return [...state];
    }
    if (action.type === 'reset') {
        state = randomizeBoard(defaultState, shipLengths);
        return [...state];
    }
    return state;
}