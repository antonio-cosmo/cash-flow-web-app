import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group';
import { darken, transparentize } from 'polished'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0,0,0,0.75);
`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${props => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      border-radius: 6px;
      border: 0;
      background: ${props => props.theme["gray-900"]};
      color: ${props => props.theme["gray-300"]};
      padding: 1rem;
      &::placeholder {
        color: ${props => props.theme["gray-500"]};
      }
    }

    button[type='submit'] {
      height: 50px;
      border: 0;
      background: ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.25rem;
      cursor: pointer;
      &:hover {
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
      }

      &:hover {
        transition: background-color 0.2s;
        background-color: ${(props) => props.theme['green-700']};
      }
    }
  }
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: none;
  right: 1.5rem;
  top: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme["gray-500"]};

`
export const TransactionTypeContainer = styled(RadioGroup.Root)`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  @media (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

interface IRadioBoxProps {
  variant: 'income' | 'outcome'
}

export const RadioBox = styled(RadioGroup.Item)<IRadioBoxProps>`
  background: ${props => props.theme["gray-700"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${props => props.theme["gray-300"]};
  svg {
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${props => props.theme["gray-600"]};
  }
  &[data-state='checked'] {
    color: ${props => props.theme.white};
    background: ${props => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]};
    svg {
      color: ${props => props.theme.white};
    }
  }
  
  @media (max-width: 480px) {
    img {
      width: 16px;
      height: 16px;
    }
    span {
      margin-left: 0.5rem;
    }
  }
`
