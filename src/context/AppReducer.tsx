import { ReducerTransaction } from "./reducer-types"

const AppReducer = (state: { transactions: ReducerTransaction[] }, action: { type: string, payload: ReducerTransaction }) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
  
    default:
      return state
  }
}

export default AppReducer