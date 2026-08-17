import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.article`
  background: #fff;
  border: 1px solid #e66767;
  color: #e66767;
`

const ImageWrap = styled.div`
  position: relative;
  height: 217px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

const Tag = styled.span`
  padding: 6px 4px;
  background: #e66767;
  color: #ffebd9;
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
`

const Content = styled.div`
  padding: 8px;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`

const Title = styled.h2`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
`

const Rating = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;

  &::after {
    content: '★';
    color: #ffb930;
    font-size: 21px;
  }
`

const Description = styled.p`
  min-height: 88px;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
`

const More = styled(Link)`
  display: inline-block;
  padding: 4px 6px;
  background: #e66767;
  color: #ffebd9;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`

const FigmaRestaurantCard = ({ restaurant }) => {
  const title = restaurant.title || restaurant.name
  const featured = restaurant.featured || restaurant.highlighted || restaurant.isFeatured

  return (
    <Card>
      <ImageWrap>
        <Image src={restaurant.image} alt={title} />
        <Tags>
          {featured && <Tag>Destaque da semana</Tag>}
          {restaurant.category && <Tag>{restaurant.category}</Tag>}
        </Tags>
      </ImageWrap>
      <Content>
        <Heading>
          <Title>{title}</Title>
          <Rating>{restaurant.rating}</Rating>
        </Heading>
        <Description>{restaurant.description}</Description>
        <More to={`/restaurante/${restaurant.id}`}>Saiba mais</More>
      </Content>
    </Card>
  )
}

export default FigmaRestaurantCard
