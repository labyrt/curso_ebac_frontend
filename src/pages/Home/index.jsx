import styled from 'styled-components'

import FigmaRestaurantCard from '../../components/FigmaRestaurantCard'
import Footer from '../../components/Footer'
import HomeHero from '../../components/HomeHero'
import { restaurants } from '../../data/restaurants'
import { Container } from '../../styles/shared'

const RestaurantSection = styled.main`
  padding-top: 80px;
`

const RestaurantGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 80px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const Home = () => (
  <>
    <HomeHero />
    <RestaurantSection>
      <RestaurantGrid>
        {restaurants.map((restaurant) => (
          <FigmaRestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </RestaurantGrid>
    </RestaurantSection>
    <Footer />
  </>
)

export default Home
