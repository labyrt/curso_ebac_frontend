import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Footer from '../../components/Footer'
import MenuCard from '../../components/MenuCard'
import RestaurantHeader from '../../components/RestaurantHeader'
import RestaurantHero from '../../components/RestaurantHero'
import { menuItems, restaurants } from '../../data/restaurants'
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

const Restaurant = () => {
  const { id } = useParams()
  const restaurant = restaurants.find((item) => item.id === Number(id)) || restaurants[1]

  return (
    <>
      <RestaurantHeader />
      <RestaurantHero restaurant={restaurant} />
      <MenuSection>
        <MenuGrid>
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </MenuGrid>
      </MenuSection>
      <Footer />
    </>
  )
}

export default Restaurant
