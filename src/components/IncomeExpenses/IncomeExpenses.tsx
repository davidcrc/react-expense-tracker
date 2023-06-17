"use client";

import React from "react";
import { useGlobalState } from "@/context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((t) => {
    return t.amount;
  });

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <div className="flex gap-4 justify-between my-2">
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div className="flex gap-4 justify-between my-2">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </>
  );
};

export default IncomeExpenses;
