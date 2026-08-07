import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.article`
  position: relative;
  background: #fff;
  border: 1px solid var(--cor-principal);
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const Picture = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

const Tag = styled.span`
  background: var(--cor-principal);
  color: #fff;
  padding: 6px 8px;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
`

const Body = styled.div`
  flex: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const Name = styled.h2`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
`

const Rating = styled.span`
  white-space: nowrap;
  font-size: 18px;
  font-weight: 700;

  &::after {
    content: ' ★';
  }
`

const Description = styled.p`
  margin: 16px 0;
  color: var(--cor-principal);
  font-size: 14px;
  line-height: 22px;
`

const More = styled(Link)`
  width: fit-content;
  margin-top: auto;
  display: inline-flex;
  background: var(--cor-principal);
  color: #fff;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 700;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.94);
  }
`

const RestaurantCard = ({ restaurant }) => (
  <Card>
    <Picture src={restaurant.image} alt={`Prato do restaurante ${restaurant.name}`} />
    <Tags>
      {restaurant.featured && <Tag>Destaque da semana</Tag>}
      <Tag>{restaurant.category}</Tag>
    </Tags>

    <Body>
      <Heading>
        <Name>{restaurant.name}</Name>
        <Rating aria-label={`Nota ${restaurant.rating}`}>{restaurant.rating}</Rating>
      </Heading>
      <Description>{restaurant.description}</Description>
      <More to={`/restaurante/${restaurant.id}`}>Saiba mais</More>
    </Body>
  </Card>
)

export default RestaurantCard
