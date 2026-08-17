import styled from 'styled-components'

import { useCart } from '../../context/CartContext'

const Card = styled.article`
  min-height: 338px;
  padding: 8px;
  background: #e66767;
  color: #ffebd9;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

const Name = styled.h3`
  margin: 8px 0;
  font-size: 16px;
  line-height: 19px;
  font-weight: 900;
`

const Description = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 22px;
`

const AddButton = styled.button`
  width: 100%;
  min-height: 24px;
  margin-top: auto;
  border: 0;
  padding: 4px 8px;
  background: #ffebd9;
  color: #e66767;
  font-size: 14px;
  line-height: 16px;
  font-weight: 900;
  cursor: pointer;
`

const FigmaMenuCard = ({ item }) => {
  const { addItem } = useCart()
  const name = item.name || item.title

  return (
    <Card>
      <Image src={item.image} alt={name} />
      <Name>{name}</Name>
      <Description>{item.description}</Description>
      <AddButton type="button" onClick={() => addItem(item)}>
        Adicionar ao carrinho
      </AddButton>
    </Card>
  )
}

export default FigmaMenuCard
