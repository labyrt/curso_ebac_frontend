import styled from 'styled-components'

import BrandLogo from '../BrandLogo'
import { Container } from '../../styles/shared'

const Hero = styled.header`
  min-height: 384px;
  background-color: #ffebd9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='%23e66767' fill-opacity='.075'%3E%3Cpath d='M18 7h4v20h4V7h4v20h4V7h4v24c0 7-4 11-10 12v34h-8V43c-6-1-10-5-10-12V7h4v20h4V7z'/%3E%3Cpath d='M72 7c8 4 13 12 13 22v22h-8v27h-8V15c0-4 1-6 3-8z'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 120px 120px;
`

const HeroContent = styled(Container)`
  min-height: 384px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h1`
  max-width: 539px;
  margin: 0;
  text-align: center;
  color: #e66767;
  font-size: 36px;
  line-height: 42px;
  font-weight: 900;

  @media (max-width: 640px) {
    max-width: 90%;
    font-size: 28px;
    line-height: 34px;
  }
`

const HomeHero = () => (
  <Hero>
    <HeroContent>
      <BrandLogo />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeroContent>
  </Hero>
)

export default HomeHero
