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
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, description, amount }, index) => {
            return (
              <tr key={index}>
                <td className="min-w-[100px]">{description}</td>
                <td className="min-w-[50px]">{amount}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleRemoveTransaction(id)}
                    className="bg-red-500 text-white p-1"
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
