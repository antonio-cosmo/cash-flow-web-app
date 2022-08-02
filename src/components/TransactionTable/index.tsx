import { Trash } from 'phosphor-react'
import { useTransactionsContext } from '../../context/Transactions'
import { Container, Actions } from './styles'

export function TransactionsTable() {
  const { transactions, deleteTransaction } = useTransactionsContext()
  return (
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
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt),
                )}
              </td>
              <td>
                <Actions>
                  <button
                    type="button"
                    onClick={() => {
                      deleteTransaction(transaction.id)
                    }}
                  >
                    <Trash size={24} />
                  </button>

                  {/* <button type='button'>
                    <Pencil size={24}/>
                  </button> */}
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
