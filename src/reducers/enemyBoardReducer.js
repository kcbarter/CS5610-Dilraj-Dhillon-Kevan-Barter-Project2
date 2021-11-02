const defaultState = [
    ['ship', 'empty'],
    ['empty', 'empty'],
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
    return state;
}