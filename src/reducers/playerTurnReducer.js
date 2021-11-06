export default function playerTurnReducer(
    state = 1, action) {
    if (action.type === 'updatePlayerTurn') {
        const value = action.squareStateOfClicked;
        if (value === 'empty' || value === 'ship') {
            state = state === 1 ? 0 : 1;
        }
    }
    if(action.type === 'reset'){
        state = 1;
    }
    return state;
}