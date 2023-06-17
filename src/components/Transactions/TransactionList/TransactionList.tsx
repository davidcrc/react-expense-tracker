"use client";

import React from "react";
import { useGlobalState } from "@/context/GlobalState";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();

  const handleRemoveTransaction = (id: string) => {
    deleteTransaction(id);
  };

  return (
    <div>
      {transactions.map(({ id, description, amount }, index) => {
        return (
          <div key={index} className="flex gap-4 align-center">
            <p>
              {description}: {amount}
            </p>
            <button
              onClick={() => handleRemoveTransaction(id)}
              className="bg-red-500 text-white p-1"
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
