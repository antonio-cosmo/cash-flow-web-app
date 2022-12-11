import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { formatPrice } from '../../util/format'
import { SummaryContainer, SummaryCard } from './styles'

export function Summary() {

  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={36} weight="light" color="#00b17e" />
        </header>
        <strong>
          {formatPrice.format(summary.deposits)}
        </strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={36} weight="light" color="#f75a68" />
        </header>
        <strong>
          {formatPrice.format(summary.withdraws)}
        </strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={36} weight="light" color="#00b17e" />
        </header>
        <strong>
          {formatPrice.format(summary.total)}
        </strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
