const defaultState = [
    ['empty', 'empty', 'empty', 'ship', 'ship', 'ship', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'ship', 'ship', 'ship', 'ship', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'ship'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'ship'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'ship'],
    ['empty', 'ship', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'ship'],
    ['empty', 'ship', 'empty', 'empty', 'empty', 'ship', 'ship', 'ship', 'empty', 'ship'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
];

const initialState = [
    ['empty', 'empty', 'empty', 'ship', 'ship', 'ship', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'ship', 'ship', 'ship', 'ship', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'ship'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'ship'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'ship'],
    ['empty', 'ship', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'ship'],
    ['empty', 'ship', 'empty', 'empty', 'empty', 'ship', 'ship', 'ship', 'empty', 'ship'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
];

export default function friendlyBoardReducer(
    state = defaultState, action
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
    if (action.type === 'resetBoard') {
        let tmp = initialState.map(inner => inner.slice());
        state = tmp;
        return [...state];
    }
    return state;
}