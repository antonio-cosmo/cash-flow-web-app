import { useState } from 'react'
import Modal from 'react-modal'
import { mockApi } from './services/api'
import { TransactionsProvider } from './context/Transactions'
import { NewTransactionModal } from './components/NewTransactionModal'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from './styles/GlobalStyle'

mockApi()

Modal.setAppElement('#root')

export function App() {
  const [transactionModal, setTransactionModal] = useState(false)

  const newTransactionModal = () => {
    setTransactionModal(true)
  }

  const closeNewTransactionModal = () => {
    setTransactionModal(false)
  }

  return (
    <TransactionsProvider>
      <Header handleNewTransactionModal={newTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={transactionModal}
        onRequestClose={closeNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
