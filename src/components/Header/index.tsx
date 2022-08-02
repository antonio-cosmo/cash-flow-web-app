import { Container, Content, Logo } from './styles'
import { CurrencyDollar } from 'phosphor-react'

interface IHeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <CurrencyDollar size={40} weight="bold" color="var(--shape)" />
          <span>Cash Flow</span>
        </Logo>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
