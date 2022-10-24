import * as Dialog from '@radix-ui/react-dialog'

import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NewTransactionButton,
} from './styles'

import { CurrencyDollar } from 'phosphor-react'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'


export function Header() {
  const [openModal, setOpenModal] = useState(false)

  const handlCloseModal = ()=>{
    setOpenModal(!openModal)
  }
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <CurrencyDollar size={40} weight="bold" color="white" />
          <span>Cash Flow</span>
        </Logo>

        <Dialog.Root open={openModal} onOpenChange={handlCloseModal}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal handlCloseModal= {handlCloseModal}/>
        </Dialog.Root>        
      </HeaderContent>
    </HeaderContainer>
  )
}
