import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useTransactionsContext } from '../../../../context/Transactions'

const searchSchema = z.object({
  query: z.string()
})

type formData = z.infer<typeof searchSchema>


export function SearchForm() {
  const {fetchTransactions} = useTransactionsContext()
  const searchForm = useForm<formData>({resolver: zodResolver(searchSchema)})

  const {register, handleSubmit} = searchForm
  
  const handleSearchTransactions = (data: formData)=>{
    fetchTransactions(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transações" 
        {...register('query')}
      />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
