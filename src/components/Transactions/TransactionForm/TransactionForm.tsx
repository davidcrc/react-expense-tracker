"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TransactionFormType } from "./hookforms.interfaces";
import { useGlobalState } from "@/context/GlobalState";

const DEFAULT_FORM = {
  description: "",
  amount: 0,
};

const TransactionForm = () => {
  const { addTransaction } = useGlobalState();
  const { control, handleSubmit, reset } = useForm<TransactionFormType>({
    mode: "all",
    defaultValues: DEFAULT_FORM,
  });

  const onSubmitTransactionForm = (formData: TransactionFormType) => {
    const { description, amount } = formData;

    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });

    reset(DEFAULT_FORM);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(onSubmitTransactionForm)();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 w-full md:w-96">
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Enter a description"
              className="bg-zinc-600 text-gray-100 px-3 py-2 rounded-lg block mb-2 w-full"
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
              className="bg-zinc-600 text-gray-100 px-3 py-2 rounded-lg block mb-2 w-full"
            />
          )}
        />

        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
