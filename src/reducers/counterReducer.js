export default function counterReducer(
    state = 0, action) {
    if (action.type === 'updateCounter') {
        if (action.clicked === 1) {
            state -= 1;
        } else {
            state += 1;
        }
    }
    return state;
}