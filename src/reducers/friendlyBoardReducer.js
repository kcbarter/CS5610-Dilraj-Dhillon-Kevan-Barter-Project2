const defaultState = [
    [0, 0],
    [0, 1],
];

export default function friendlyBoardReducer(
    state = defaultState, action
) {
    if (action.type === 'friendlyBoardClick') {
        const value = state[action.x][action.y];
        // 0 -> 2 empty to miss, 1 -> 3 ship location to hit
        if (value === 0) {
            state[action.x][action.y] = 2;
        } else if (value === 1) {
            state[action.x][action.y] = 3;
        }
        return [...state];
    }
    return state;
}