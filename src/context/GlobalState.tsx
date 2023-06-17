"use client";
import { createContext } from "react";

type GlobalProviderProps = {
  children: React.ReactNode;
};

export const Context = createContext<{ total?: number }>({});

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return <Context.Provider value={{ total: 100 }}>{children}</Context.Provider>;
};
