"use client";

import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "@/context/GlobalState";

const ExpenseChart = () => {
  const { transactions } = useGlobalState();

  const total = transactions.reduce(
    (acc, transaction) => (acc += transaction.amount),
    0
  );

  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round(
    (totalExpenses / totalIncome) * 100
  );
  const totalIncomesPercentage = 100 - totalExpensesPercentage;

  return (
    <div className="flex flex-col justify-center items-center max-w-md w-full">
      <VictoryPie
        colorScale={["#EB5757", "#27AE60"]}
        data={[
          { x: "Expenses", y: totalExpensesPercentage },
          { x: "Incomes", y: totalIncomesPercentage },
        ]}
        animate={{
          duration: 200,
        }}
        categories={{ x: ["Expenses", "Incomes"] }}
        labels={({ datum }) => `${datum.y} %`}
        labelComponent={<VictoryLabel angle={0} style={{ fill: "white" }} />}
      />
      <div>Expenses vs Incomes</div>
    </div>
  );
};

export default ExpenseChart;
