import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from '../Logo'
import { Container } from '../../styles/shared'

const HeaderBar = styled.header`
  min-height: 186px;
  background-color: var(--cor-secundaria);
  background-image:
    radial-gradient(circle at 20% 40%, rgba(230, 103, 103, 0.07) 0 5px, transparent 6px),
    linear-gradient(45deg, transparent 48%, rgba(230, 103, 103, 0.035) 49% 51%, transparent 52%);
  background-size: 80px 80px, 160px 160px;
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
  font-weight: 900;

  &:last-child {
    justify-self: end;
  }

  @media (max-width: 640px) {
    font-size: 13px;
  }
`

const RestaurantHeader = () => (
  <HeaderBar>
    <HeaderContent>
      <NavLink to="/">Restaurantes</NavLink>
      <Logo />
      <NavLink to="#" onClick={(event) => event.preventDefault()}>
        0 produto(s) no carrinho
      </NavLink>
    </HeaderContent>
  </HeaderBar>
)

export default RestaurantHeader
