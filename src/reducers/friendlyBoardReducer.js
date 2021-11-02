const defaultState = [
    ['empty', 'empty'],
    ['empty', 'ship'],
];

export default function friendlyBoardReducer(
    state = defaultState, action
) {
    if (action.type === 'friendlyBoardClick') {
        const value = state[action.x][action.y];
        if (value === 'empty') {
            state[action.x][action.y] = 'miss'; // Empty to miss
        } else if (value === 'ship') {
            state[action.x][action.y] = 'hit'; // Ship location to hit
        }
        return [...state];
    }
    return state;
}