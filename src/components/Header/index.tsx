import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NewTransactionButton,
} from './styles'
import { CurrencyDollar } from 'phosphor-react'

interface IHeaderProps {
  handleNewTransactionModal: () => void
}

export function Header({ handleNewTransactionModal }: IHeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <CurrencyDollar size={40} weight="bold" color="white" />
          <span>Cash Flow</span>
        </Logo>
        <NewTransactionButton type="button" onClick={handleNewTransactionModal}>
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
