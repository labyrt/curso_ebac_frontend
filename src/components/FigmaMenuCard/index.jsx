import styled from 'styled-components'

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
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 14px;
  line-height: 22px;
`

const BuyButton = styled.button`
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

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 2px;
  }
`

const FigmaMenuCard = ({ item, onSelect }) => (
  <Card>
    <Image src={item.foto} alt={item.nome} loading="lazy" />
    <Name>{item.nome}</Name>
    <Description>{item.descricao}</Description>
    <BuyButton type="button" onClick={() => onSelect(item)}>
      Comprar o produto
    </BuyButton>
  </Card>
)

export default FigmaMenuCard
