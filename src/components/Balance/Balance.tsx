"use client";

import React from "react";
import { useGlobalState } from "@/context/GlobalState";

const Balance = () => {
  const { transactions } = useGlobalState();

  return <div>Transactions: </div>;
};

export default Balance;
