export default function playerTurnReducer(
    state = 1, action) {
    if (action.type === 'updatePlayerTurn') {
        state = state === 1 ? 0 : 1;
    }
    return state;
}