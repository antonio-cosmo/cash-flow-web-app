// import { useState } from 'react'
import Modal from 'react-modal'
import { defaultTheme } from './styles/themes/default'
import { mockApi } from './services/api'
import { TransactionsProvider } from './context/Transactions'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'

mockApi()

Modal.setAppElement('#root')

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
