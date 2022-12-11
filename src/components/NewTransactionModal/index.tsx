import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { ArrowCircleUp, ArrowCircleDown, X } from 'phosphor-react'
import { useTransactionsContext } from '../../context/Transactions'
import { Content, Overlay, Close,TransactionTypeContainer, RadioBox } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface INewTransactionModalProps {
  handlCloseModal: () => void
}

const transactionSchema = z.object({
  title: z.string(),
  amount: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type transactionFormaData = z.infer<typeof transactionSchema>

export function NewTransactionModal({handlCloseModal}:INewTransactionModalProps) {
  
  const { createTransaction } = useTransactionsContext()

  const transactionForm = useForm<transactionFormaData>({
    resolver: zodResolver(transactionSchema),
    defaultValues:{
      type: 'income'
    }
  })

  const {control ,register, handleSubmit, reset, watch} = transactionForm
  const watchInputs = watch()

  const handleCreateNewTransaction = async (data: transactionFormaData) => {
    const {title, category, amount, type} = data
    await createTransaction({
      title,
      category,
      amount,
      type
    })
    reset()
    handlCloseModal()


  }

  return (

    <Dialog.Portal>
        <Overlay/>
        <Content>
            <Dialog.Title> Cadastrar transação</Dialog.Title>
            <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                <input
                type="text"
                placeholder="Titulo"
                {...register('title')}
                />

                <input
                type="number"
                placeholder="Valor"
                {...register('amount',{valueAsNumber: true, min:0})}

                />
                <Controller
                  control={control}
                  name='type'
                  render={({field}) => {
                    return (
                      <TransactionTypeContainer 
                        onValueChange={field.onChange} 
                        value={field.value}>
                        <RadioBox
                            type="button"
                            variant = 'income'
                            value='income'
                        >
                            <ArrowCircleUp size={32} weight="light"  />
                            <span>Entrada</span>
                        </RadioBox>

                        <RadioBox
                            type="button"
                            variant='outcome'
                            value='outcome'
                        >
                            <ArrowCircleDown size={32} weight="light" />
                            <span>Saida</span>
                        </RadioBox>
                      </TransactionTypeContainer>
                    )
                  }}
                />
                

                <input
                type="text"
                placeholder="Categoria"
                {...register('category')}

                />
                <button type="submit">Cadastrar</button>
            </form>
            
            <Close> <X size={24} weight="light" /></Close>
        </Content>
    </Dialog.Portal>
      
  )
}
