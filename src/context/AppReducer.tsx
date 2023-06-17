
const AppReducer = (state: { transactions: any[] }, action: { type: string, payload: any[] }) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return state
  
    default:
      return state
  }
}

export default AppReducer