import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
interface ITransaction{
  id: string,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string
}
export function TransactionsTable() {
 
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  
  useEffect(() => {
    (async ()=>{
      const res = await api.get('transactions')
      setTransactions(res.data.transactions)
      console.log(res.data)
    })();
  }, [])


  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}