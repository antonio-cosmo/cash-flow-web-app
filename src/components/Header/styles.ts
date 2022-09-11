import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 1rem;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    transition: background-color 0.2s;

    background-color: ${(props) => props.theme['green-700']};
  }
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  svg {
    background: ${(props) => props.theme['green-500']};
    padding: 8px;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }
`
