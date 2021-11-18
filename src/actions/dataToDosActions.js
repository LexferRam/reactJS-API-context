export const loadData = async (dispatch) => {
    dispatch({type:'requets'})
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const res = await data.json()
    // console.log(res)
    dispatch({type:'loadData', payload:res})
}