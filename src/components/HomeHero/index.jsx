import styled from 'styled-components'

import Logo from '../Logo'
import { Container } from '../../styles/shared'

const Hero = styled.header`
  min-height: 384px;
  background-color: var(--cor-secundaria);
  background-image:
    radial-gradient(circle at 15% 25%, rgba(230, 103, 103, 0.08) 0 5px, transparent 6px),
    radial-gradient(circle at 80% 70%, rgba(230, 103, 103, 0.08) 0 7px, transparent 8px),
    linear-gradient(135deg, transparent 48%, rgba(230, 103, 103, 0.04) 49% 51%, transparent 52%);
  background-size: 70px 70px, 100px 100px, 150px 150px;
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
  max-width: 540px;
  text-align: center;
  font-size: 36px;
  line-height: 1.15;
  font-weight: 900;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`

const HomeHero = () => (
  <Hero>
    <HeroContent>
      <Logo />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeroContent>
  </Hero>
)

export default HomeHero
