const defaultState = [
    [0, 0],
    [0, 1],
];

export default function friendlyBoardReducer(
    state = defaultState, action
) {
    if (action.type === 'friendlyBoardClick') {
        const value = state[action.x][action.y];
        if (value === 0) {
            state[action.x][action.y] = 2; // Empty to miss
        } else if (value === 1) {
            state[action.x][action.y] = 3; // Ship location to hit
        }
        return [...state];
    }
    return state;
}