import { createContext, useReducer, useContext } from 'react'
import { initialStateCombined, reducerCombined } from './store'

const DataContext = createContext()
export const useContextData = () => useContext(DataContext)

export const ContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(reducerCombined, initialStateCombined)

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}

