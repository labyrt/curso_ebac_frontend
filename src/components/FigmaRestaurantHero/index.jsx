import styled from 'styled-components'

import { Container } from '../../styles/shared'

const Hero = styled.section`
  position: relative;
  height: 280px;
  background: ${({ $image }) => `url(${$image}) center/cover no-repeat`};
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`

const Content = styled(Container)`
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 25px 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Category = styled.p`
  font-size: 32px;
  line-height: 38px;
  font-weight: 100;
  text-transform: capitalize;
`

const Title = styled.h1`
  font-size: 32px;
  line-height: 38px;
  font-weight: 900;
`

const FigmaRestaurantHero = ({ restaurant }) => (
  <Hero $image={restaurant.capa}>
    <Content>
      <Category>{restaurant.tipo}</Category>
      <Title>{restaurant.titulo}</Title>
    </Content>
  </Hero>
)

export default FigmaRestaurantHero
