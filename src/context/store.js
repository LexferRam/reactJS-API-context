import combineReducers from 'react-combine-reducers';
import { counterReducer, counterState } from '../reducers/CounterReducer';
import { dataToDosReducer, dataToDosState } from '../reducers/DataTodoReducer';
import { MultiplyReducer, multiplyState } from '../reducers/MultiplyReducer';

export const [reducerCombined, initialStateCombined] = combineReducers({
  counter: [counterReducer, counterState],
  multiplyCounter: [MultiplyReducer, multiplyState],
  dataToDos : [dataToDosReducer, dataToDosState]
  // ...
});



