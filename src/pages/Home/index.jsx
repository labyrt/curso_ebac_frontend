import { useEffect, useState } from 'react'
import styled from 'styled-components'

import FigmaRestaurantCard from '../../components/FigmaRestaurantCard'
import Footer from '../../components/Footer'
import HomeHero from '../../components/HomeHero'
import { fetchRestaurants } from '../../services/api'
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

const Status = styled(Container)`
  min-height: 240px;
  display: grid;
  place-items: center;
  color: #e66767;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    fetchRestaurants(controller.signal)
      .then((data) => {
        setRestaurants(data)
        setStatus('success')
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setStatus('error')
      })

    return () => controller.abort()
  }, [])

  return (
    <>
      <HomeHero />
      <RestaurantSection>
        {status === 'loading' && <Status aria-live="polite">Carregando restaurantes...</Status>}
        {status === 'error' && (
          <Status role="alert">Não foi possível carregar os restaurantes. Tente novamente mais tarde.</Status>
        )}
        {status === 'success' && (
          <RestaurantGrid>
            {restaurants.map((restaurant) => (
              <FigmaRestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </RestaurantGrid>
        )}
      </RestaurantSection>
      <Footer />
    </>
  )
}

export default Home
