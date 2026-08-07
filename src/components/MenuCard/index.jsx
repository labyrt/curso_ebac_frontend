import { useState } from 'react'
import styled from 'styled-components'

const Card = styled.article`
  background: var(--cor-principal);
  color: var(--cor-secundaria);
  padding: 8px;
`

const Picture = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

const Title = styled.h3`
  margin-top: 8px;
  color: var(--cor-secundaria);
  font-size: 16px;
  font-weight: 900;
`

const Description = styled.p`
  min-height: 66px;
  margin: 8px 0;
  color: var(--cor-secundaria);
  font-size: 14px;
  line-height: 22px;
`

const AddButton = styled.button`
  width: 100%;
  border: 0;
  padding: 6px 8px;
  background: var(--cor-secundaria);
  color: var(--cor-principal);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    filter: brightness(0.97);
  }
`

const MenuCard = ({ item }) => {
  const [added, setAdded] = useState(false)

  return (
    <Card>
      <Picture src={item.image} alt={item.name} />
      <Title>{item.name}</Title>
      <Description>{item.description}</Description>
      <AddButton type="button" onClick={() => setAdded((value) => !value)}>
        {added ? 'Adicionado ✓' : 'Adicionar ao carrinho'}
      </AddButton>
    </Card>
  )
}

export default MenuCard
