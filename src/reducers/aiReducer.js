const aiChoiceStack = [];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        aiChoiceStack.push([i, j]);
    }
}

const defaultState = aiChoiceStack.pop();

export default function aiReducer(
    state = defaultState, action
) {
    if (action.type === 'aiNextChoice') {
        state = aiChoiceStack.pop();
        return state;
    }
    return state;
}
