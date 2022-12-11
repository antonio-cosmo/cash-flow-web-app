import { Trash } from 'phosphor-react'
import {
  TransactionsContainer,
  ButtonDelete,
  TransactionsTable,
  PriceHighLight,
} from './styles'
import { useTransactionsContext } from '../../context/Transactions'
import { Summary } from '../../components/Summary'
import { Header } from '../../components/Header'
import { SearchForm } from './components/SearchForm'
import { formatDate, formatPrice } from '../../util/format'
export function Transactions() {
  const { transactions, deleteTransaction } = useTransactionsContext()
  
  return (
    <div>
      <Header/>
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td>
                  <PriceHighLight
                    variant={ transaction.type}
                  >
                    {transaction.type === 'outcome' && '- '}{formatPrice.format(transaction.amount)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>
                  {formatDate.format(new Date(transaction.createdAt))}
                </td>
                <td>
                  <ButtonDelete
                    type="button"
                    onClick={() => {
                      deleteTransaction(transaction.id)
                    }}
                  >
                    <Trash size={24} color="#f75a68"/>
                  </ButtonDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
