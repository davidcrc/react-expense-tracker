import React from "react";
import { useGlobalState } from "@/context/GlobalState";
import { ReducerTransaction } from "@/context/reducer-types";

type TransactionItemProps = {
  transaction: ReducerTransaction;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const { deleteTransaction } = useGlobalState();

  const handleRemoveTransaction = (id: string) => {
    deleteTransaction(id);
  };

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center gap-2">
      <p>{transaction.description}</p>
      <div className="flex gap-4 items-center">
        <p>$ {transaction.amount}</p>

        <button
          type="button"
          onClick={() => handleRemoveTransaction(transaction.id)}
          className="bg-red-500 text-white px-1 text-xs rounded-lg"
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
