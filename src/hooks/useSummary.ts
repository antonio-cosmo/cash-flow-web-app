import { useTransactionsContext } from "../context/Transactions"

export function useSummary(){
    const { transactions } = useTransactionsContext()

    const summary = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.deposits += transaction.amount
          acc.total += transaction.amount
        } else {
          acc.withdraws -= transaction.amount
          acc.total -= transaction.amount
        }
  
        return acc
      },
      {
        deposits: 0,
        withdraws: 0,
        total: 0,
      },
    )

    return summary
}