import { decrementCount, incrementCount } from "./actions/CounterActions";
import { loadData } from "./actions/dataToDosActions";
import { multypliByTwo } from "./actions/MultiplyActions";
import { useContextData } from "./context/ContextProvider";


function App() { 

  const {
    state: {
      counter: { count },
      multiplyCounter: { multiplyCount },
      dataToDos:{dataToDosState, loader}
    },
    dispatch } = useContextData()

  console.log(loader)

  return (
    <>
      Count: {count}
      <button onClick={() => decrementCount(dispatch)}>-</button>
      <button onClick={() => incrementCount(dispatch)}>+</button>
      <hr />
      
      Count Multiply: {multiplyCount}
      <button onClick={() => multypliByTwo(dispatch)}>*</button>
      <hr />

      <button onClick={() => loadData(dispatch)}>Load Data</button>

      {
        loader ? ('Cargando...'):(
          dataToDosState?.map(item => (
            <h1 key={item.id}>{item.title}</h1>
          ))
        )
      }

    </>
  );
}

export default App;
