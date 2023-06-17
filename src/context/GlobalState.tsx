"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
import { ReducerTransaction } from "./reducer-types";

type GlobalProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  transactions: [], //ReducerTransaction
};

type GlobalContextProps = {
  transactions: ReducerTransaction[];
  addTransaction: (trasaction: ReducerTransaction) => void;
  deleteTransaction: (id: string) => void;
};

export const GlobalContext = createContext<GlobalContextProps | null>(null);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localdata = localStorage.getItem("transactions");
    return localdata ? JSON.parse(localdata) : initialState;
  });

  const addTransaction = (trasaction: ReducerTransaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: trasaction,
    });
  };

  const deleteTransaction = (id: string) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);

  if (context === null) {
    throw new Error("Global context consumer was used outside of a provider");
  }

  return context;
};
