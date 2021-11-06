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

for (let shipLength of shipLengths) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    const BOUNDARY = 10;
    let boundaryFlag = 1;
    while (boundaryFlag === 1) {
        boundaryFlag = 0;
        for (let i = col; i < col + shipLength; i++) {
            if (i === BOUNDARY || defaultState[row][i] === 'ship') {
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

    defaultState[row].fill('ship', col, col + shipLength);
}

// TO DO: deep copy
const initialState = [
    ['empty', 'ship', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'ship', 'ship'],
    ['empty', 'ship', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'ship', 'empty', 'empty', 'ship', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'ship', 'empty', 'empty', 'ship', 'empty', 'ship', 'empty', 'empty', 'empty'],
    ['empty', 'ship', 'empty', 'empty', 'ship', 'empty', 'ship', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'ship', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'ship', 'ship', 'ship', 'ship', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
];

export default function enemyBoardReducer(
    state = defaultState, action
) {
    if (action.type === 'enemyBoardClick') {
        const value = state[action.x][action.y];
        if (value === 'empty') {
            state[action.x][action.y] = 'miss';
        } else if (value === 'ship') {
            state[action.x][action.y] = 'hit';
        }
        return [...state];
    }
    if (action.type === 'reset') {
        let tmp = initialState.map(inner => inner.slice());
        state = tmp;
        return [...state];
    }
    return state;
}