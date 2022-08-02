import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { ArrowCircleUp, ArrowCircleDown, X } from 'phosphor-react'
import { useTransactionsContext } from '../../context/Transactions'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
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

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-close-modal"
      >
        <X size={24} weight="light" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
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
            isActive={type === 'deposit'}
            activeColor={'green'}
          >
            <ArrowCircleUp size={32} weight="light" color="var(--green)" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor={'red'}
          >
            <ArrowCircleDown size={32} weight="light" color="var(--red)" />
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
      </Container>
    </Modal>
  )
}
