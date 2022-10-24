import * as Dialog from '@radix-ui/react-dialog'
import { FormEvent, useState } from 'react'
import { ArrowCircleUp, ArrowCircleDown, X } from 'phosphor-react'
import { useTransactionsContext } from '../../context/Transactions'
import { Content, Overlay, Close,TransactionTypeContainer, RadioBox } from './styles'

interface INewTransactionModalProps {
  handlCloseModal: () => void
}


export function NewTransactionModal({handlCloseModal}:INewTransactionModalProps) {
  const { createTransaction } = useTransactionsContext()
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()
    await createTransaction({
      title,
      amount,
      category,
      type,
    })
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    handlCloseModal()

  }

  return (

    <Dialog.Portal>
        <Overlay/>
        <Content>
            <Dialog.Title> Cadastrar transação</Dialog.Title>
            <form onSubmit={handleCreateNewTransaction}>
                <input
                type="text"
                placeholder="Titulo"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                />

                <input
                type="number"
                placeholder="Valor"
                value={amount}
                min={0}
                onChange={(event) => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                  <RadioBox
                      type="button"
                      onClick={() => setType('deposit')}
                      variant = 'income'
                      value='income'
                  >
                      <ArrowCircleUp size={32} weight="light"  />
                      <span>Entrada</span>
                  </RadioBox>

                  <RadioBox
                      type="button"
                      onClick={() => setType('withdraw')}
                      variant='outcome'
                      value='outcome'
                  >
                      <ArrowCircleDown size={32} weight="light" />
                      <span>Saida</span>
                  </RadioBox>
                </TransactionTypeContainer>

                <input
                type="text"
                placeholder="Categoria"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
            
            <Close> <X size={24} weight="light" /></Close>
        </Content>
    </Dialog.Portal>
      
  )
}
