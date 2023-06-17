"use client";
import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

type GlobalProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext<{ transactions?: any }>({});

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
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
