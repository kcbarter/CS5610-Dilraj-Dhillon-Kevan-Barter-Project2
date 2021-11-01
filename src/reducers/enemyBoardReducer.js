const defaultState = [
    [0, 0],
    [0, 0],
];

export default function enemyBoardReducer(
    state = defaultState, action
) {
    if (action.type === 'enemyBoardClick') {
        const value = state[action.x][action.y];
        if (value === 1) {
            state[action.x][action.y] = 0;
        } else {
            state[action.x][action.y] = 1;
        }
        return [...state];
    }
    return state;
}