import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface ITransaction{
  id: string,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string
};

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

interface ITransactionsProviderProps{
  children:ReactNode,
};

interface ITransactionsContextData{
  transactions: ITransaction[];
  createTransaction: (transaction: ITransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<ITransactionsContextData>({} as ITransactionsContextData)

export function TransactionsProvider({children}:ITransactionsProviderProps){

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  
  useEffect(() => {
    (async ()=>{
      const res = await api.get('transactions')
      setTransactions(res.data.transactions)
    })();

  }, []);

  const createTransaction = async (transactionInput: ITransactionInput) => {
    const res = await api.post('/transactions', {...transactionInput, createdAt: new Date});
    const {transaction} = res.data

    setTransactions(prevTransactions => [...prevTransactions, transaction]);
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransaction(){
  const context = useContext(TransactionsContext);
  return context
}