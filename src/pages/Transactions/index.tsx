import { Trash } from 'phosphor-react'
import {
  TransactionsContainer,
  ButtonDelete,
  TransactionsTable,
  PriceHighLight,
} from './styles'
import { NewTransactionModal } from '../../components/NewTransactionModal'
import { useTransactionsContext } from '../../context/Transactions'
import { Summary } from '../../components/Summary'
import { Header } from '../../components/Header'
import { useState } from 'react'
export function Transactions() {
  const { transactions, deleteTransaction } = useTransactionsContext()
  const [transactionModal, setTransactionModal] = useState(false)

  const newTransactionModal = () => {
    setTransactionModal(true)
  }

  const closeNewTransactionModal = () => {
    setTransactionModal(false)
  }
  return (
    <div>
      <Header handleNewTransactionModal={newTransactionModal} />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td>
                  <PriceHighLight
                    variant={
                      transaction.type === 'deposit' ? 'income' : 'outcome'
                    }
                  >
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(transaction.amount)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt),
                  )}
                </td>
                <td>
                  <ButtonDelete
                    type="button"
                    onClick={() => {
                      deleteTransaction(transaction.id)
                    }}
                  >
                    <Trash size={24} />
                  </ButtonDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

      <NewTransactionModal
        isOpen={transactionModal}
        onRequestClose={closeNewTransactionModal}
      />
    </div>
  )
}
