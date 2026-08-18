import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import FigmaMenuCard from '../../components/FigmaMenuCard'
import FigmaRestaurantHero from '../../components/FigmaRestaurantHero'
import Footer from '../../components/Footer'
import ProductModal from '../../components/ProductModal'
import RestaurantHeader from '../../components/RestaurantHeader'
import { fetchRestaurants } from '../../services/api'
import { Container } from '../../styles/shared'

const MenuSection = styled.main`
  padding-top: 56px;
`

const MenuGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Status = styled(Container)`
  min-height: 360px;
  display: grid;
  place-items: center;
  color: #e66767;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`

const Restaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [status, setStatus] = useState('loading')
  const closeModal = useCallback(() => setSelectedProduct(null), [])

  useEffect(() => {
    const controller = new AbortController()

    fetchRestaurants(controller.signal)
      .then((data) => {
        const currentRestaurant = data.find((item) => item.id === Number(id))
        setRestaurant(currentRestaurant || null)
        setStatus(currentRestaurant ? 'success' : 'not-found')
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setStatus('error')
      })

    return () => controller.abort()
  }, [id])

  if (status === 'loading') {
    return (
      <>
        <RestaurantHeader />
        <Status aria-live="polite">Carregando cardápio...</Status>
        <Footer />
      </>
    )
  }

  if (status !== 'success') {
    return (
      <>
        <RestaurantHeader />
        <Status role="alert">
          {status === 'not-found'
            ? 'Restaurante não encontrado.'
            : 'Não foi possível carregar o cardápio. Tente novamente mais tarde.'}
        </Status>
        <Footer />
      </>
    )
  }

  const selectProduct = (item) => {
    setSelectedProduct({ ...item, restaurantId: restaurant.id })
  }

  return (
    <>
      <RestaurantHeader />
      <FigmaRestaurantHero restaurant={restaurant} />
      <MenuSection>
        <MenuGrid>
          {restaurant.cardapio.map((item) => (
            <FigmaMenuCard key={item.id} item={item} onSelect={selectProduct} />
          ))}
        </MenuGrid>
      </MenuSection>
      <Footer />
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </>
  )
}

export default Restaurant
