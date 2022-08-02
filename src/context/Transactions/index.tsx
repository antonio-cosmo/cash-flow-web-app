import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import axios from 'axios'

interface ITransaction {
  id: string
  title: string
  type: string
  category: string
  amount: number
  createdAt: string
}

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransactionsProviderProps {
  children: ReactNode
}

interface ITransactionsContextData {
  transactions: ITransaction[]
  createTransaction: (transaction: ITransactionInput) => Promise<void>
  deleteTransaction: (id: string) => Promise<void>
}

const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData,
)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/transactions')
      setTransactions(res.data.transactions)
    })()
  }, [])

  const createTransaction = async (transactionInput: ITransactionInput) => {
    const res = await axios.post('/api/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = res.data

    setTransactions((prevTransactions) => [...prevTransactions, transaction])
  }

  const deleteTransaction = async (id: string) => {
    const res = await axios.delete(`/api/transactions/${id}`)
    const transactionResponse: ITransaction | null = res.data.transaction
    if (transactionResponse) {
      const updateTransactions = transactions.filter((transaction) => {
        return transaction.id !== transactionResponse.id
      })
      setTransactions(updateTransactions)
    }
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, deleteTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactionsContext() {
  const context = useContext(TransactionsContext)
  return context
}
