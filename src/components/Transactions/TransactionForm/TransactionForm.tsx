"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TransactionFormType } from "./hookforms.interfaces";
import { useGlobalState } from "@/context/GlobalState";

const TransactionForm = () => {
  const { addTransaction } = useGlobalState();
  const { control, handleSubmit, reset } = useForm<TransactionFormType>({
    mode: "all",
    defaultValues: {
      description: "",
      amount: 0,
    },
  });

  const onSubmitTransactionForm = (formData: TransactionFormType) => {
    const { description, amount } = formData
    
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount
    });

    reset({})
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(onSubmitTransactionForm)();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 w-96">
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Enter a description"
              className="text-black"
            />
          )}
        />

        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              step="0.01"
              placeholder="0.00"
              className="text-black"
            />
          )}
        />

        <button>Add Transaction</button>
      </div>
    </form>
  );
};

export default TransactionForm;
