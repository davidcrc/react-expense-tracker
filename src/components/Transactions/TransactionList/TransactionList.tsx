"use client";

import React from "react";
import { useGlobalState } from "@/context/GlobalState";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions } = useGlobalState();

  return (
    <div>
      <h3 className="text-slate-300 text-xl font-bold block">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
