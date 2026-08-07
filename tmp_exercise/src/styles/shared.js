import styled from 'styled-components'

export const Container = styled.div`
  width: min(100% - 32px, var(--largura-container));
  margin: 0 auto;
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: var(--cor-principal);
  color: #fff;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.2s ease, transform 0.2s ease;

  &:hover {
    filter: brightness(0.94);
  }

  &:active {
    transform: translateY(1px);
  }
`
