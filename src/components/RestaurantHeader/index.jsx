import { Link } from 'react-router-dom'
import styled from 'styled-components'

import BrandLogo from '../BrandLogo'
import { useCart } from '../../context/CartContext'
import { Container } from '../../styles/shared'

const HeaderBar = styled.header`
  min-height: 186px;
  background-color: #ffebd9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='%23e66767' fill-opacity='.075'%3E%3Cpath d='M18 7h4v20h4V7h4v20h4V7h4v24c0 7-4 11-10 12v34h-8V43c-6-1-10-5-10-12V7h4v20h4V7z'/%3E%3Cpath d='M72 7c8 4 13 12 13 22v22h-8v27h-8V15c0-4 1-6 3-8z'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 120px 120px;
`

const HeaderContent = styled(Container)`
  min-height: 186px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
`

const NavLink = styled(Link)`
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
`

const CartButton = styled.button`
  justify-self: end;
  border: 0;
  padding: 0;
  background: transparent;
  color: #e66767;
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
  cursor: pointer;

  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 16px;
  }
`

const RestaurantHeader = () => {
  const { count, openCart } = useCart()

  return (
    <HeaderBar>
      <HeaderContent>
        <NavLink to="/">Restaurantes</NavLink>
        <BrandLogo />
        <CartButton type="button" onClick={openCart}>
          {count} produto(s) no carrinho
        </CartButton>
      </HeaderContent>
    </HeaderBar>
  )
}

export default RestaurantHeader
