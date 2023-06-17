"use client";

import React from "react";
import { useGlobalState } from "@/context/GlobalState";

const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((t) => t.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex gap-4 justify-between text-2xl font-bold" >
      <h1>Your Balance</h1>
      <h1>$ {total}</h1>
    </div>
  );
};

export default Balance;
