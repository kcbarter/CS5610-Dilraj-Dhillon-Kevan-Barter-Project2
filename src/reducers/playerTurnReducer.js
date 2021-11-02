export default function playerTurnReducer(
    state = 1, action) {
    if (action.type === 'updatePlayerTurn') {
        const value = action.squareStateOfClicked;
        if (value === 0 || value === 1) {
            state = state === 1 ? 0 : 1;
        }
    }
    return state;
}