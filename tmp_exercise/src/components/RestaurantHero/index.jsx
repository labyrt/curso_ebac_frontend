import styled from 'styled-components'

import { Container } from '../../styles/shared'

const Hero = styled.section`
  position: relative;
  min-height: 280px;
  display: flex;
  align-items: stretch;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  color: #fff;
`

const Content = styled(Container)`
  min-height: 280px;
  padding: 24px 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Category = styled.p`
  font-size: 32px;
  line-height: 1.2;
  font-weight: 100;

  @media (max-width: 640px) {
    font-size: 24px;
  }
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;

  @media (max-width: 640px) {
    font-size: 26px;
  }
`

const RestaurantHero = ({ restaurant }) => (
  <Hero $image={restaurant.image}>
    <Content>
      <Category>{restaurant.category}</Category>
      <Title>{restaurant.name}</Title>
    </Content>
  </Hero>
)

export default RestaurantHero
