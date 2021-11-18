
export const dataToDosState = {
    data:[],
    loader:false
};

export function dataToDosReducer(state, action){
    switch (action.type) {

        case 'requets':
            return {...state, dataToDosState: [], loader:true};
        case 'loadData':
            return {...state, dataToDosState: action.payload,loader:false };
        default:
          return state
    }
}
