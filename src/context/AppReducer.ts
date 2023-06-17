import { ReducerTransaction } from "./reducer-types"

const AppReducer = (state: { transactions: ReducerTransaction[] }, action: { type: "ADD_TRANSACTION" | "DELETE_TRANSACTION", payload: any }) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }

    case 'DELETE_TRANSACTION':

      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload)
      }

    default:
      return state
  }
}

export default AppReducer