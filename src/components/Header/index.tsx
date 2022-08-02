import { Container, Content, Logo } from './styles'
import { CurrencyDollar } from 'phosphor-react'

interface IHeaderProps {
  handleNewTransactionModal: () => void
}

export function Header({ handleNewTransactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <CurrencyDollar size={40} weight="bold" color="var(--shape)" />
          <span>Cash Flow</span>
        </Logo>
        <button type="button" onClick={handleNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
