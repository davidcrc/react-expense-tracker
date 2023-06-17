"use client";

import React from "react";
import { useGlobalState } from "@/context/GlobalState";

const Balance = () => {
  const { transactions } = useGlobalState();

  return <div>Transactions: {JSON.stringify(transactions)}</div>;
};

export default Balance;
