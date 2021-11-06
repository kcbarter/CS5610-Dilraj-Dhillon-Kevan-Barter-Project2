const aiChoiceStack = [];
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        aiChoiceStack.push([i, j]);
    }
}

const defaultState = aiChoiceStack.pop();

export default function aiReducer(
    state = defaultState, action
) {
    if (action.type === 'aiNextChoice') {
        state = aiChoiceStack.pop();
        return state !== undefined ? state : null;
    }
    return state !== undefined ? state : null;
}
