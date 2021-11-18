export const counterState = { count: 0 };

export function counterReducer(state, action) {
    console.log(action);

    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + 1 };
        case 'decrement':
            return { ...state,count: state.count - 1 };
        default:
            return state
    }
}