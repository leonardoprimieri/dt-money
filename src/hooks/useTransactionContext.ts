import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useTransactionContext() {
  const context = useContext(TransactionsContext);
  return context;
}
