
export const multiplyState = { multiplyCount: 1 };

export function MultiplyReducer(state, action){
    switch (action.type) {
        case 'multiply':
            return {...state, multiplyCount: state.multiplyCount * 2 };
        default:
          return state
    }
}
