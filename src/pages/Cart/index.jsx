import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  selectCartItems,
  selectCartTotal
} from '../../store/reducers/cart'
import { Container } from '../../styles/shared'

const Main = styled.main`
  padding: 56px 0 24px;
`

const Title = styled.h1`
  margin-bottom: 32px;
  color: #e66767;
  font-size: 32px;
  line-height: 38px;
  font-weight: 900;
`

const CartLayout = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 32px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Items = styled.ul`
  display: grid;
  gap: 16px;
`

const Item = styled.li`
  display: grid;
  grid-template-columns: 160px 1fr auto;
  gap: 16px;
  min-height: 144px;
  padding: 16px;
  background: #e66767;
  color: #ffebd9;

  @media (max-width: 600px) {
    grid-template-columns: 96px 1fr;
  }
`

const Image = styled.img`
  width: 160px;
  height: 112px;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 96px;
    height: 96px;
  }
`

const ProductName = styled.h2`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
`

const Price = styled.p`
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 22px;
`

const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const QuantityButton = styled.button`
  width: 28px;
  height: 28px;
  border: 0;
  background: #ffebd9;
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`

const RemoveButton = styled.button`
  align-self: start;
  border: 1px solid #ffebd9;
  padding: 6px 10px;
  background: transparent;
  color: #ffebd9;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 600px) {
    grid-column: 1 / -1;
    width: 100%;
  }
`

const Summary = styled.aside`
  height: fit-content;
  padding: 24px;
  background: #e66767;
  color: #ffebd9;
`

const SummaryTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 900;
`

const Total = styled.p`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 900;
`

const ContinueLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 8px;
  background: #ffebd9;
  color: #e66767;
  font-size: 14px;
  font-weight: 900;
  text-align: center;
`

const Empty = styled.div`
  grid-column: 1 / -1;
  padding: 48px 24px;
  border: 1px solid #e66767;
  background: #fff;
  color: #e66767;
  text-align: center;

  p {
    margin-bottom: 24px;
  }
`

const formatPrice = (value) =>
  Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  return (
    <>
      <RestaurantHeader />
      <Main>
        <CartLayout>
          <div>
            <Title>Seu carrinho</Title>
            {items.length === 0 ? (
              <Empty>
                <p>Seu carrinho está vazio.</p>
                <ContinueLink to="/">Escolher um restaurante</ContinueLink>
              </Empty>
            ) : (
              <Items aria-label="Produtos no carrinho">
                {items.map((item) => (
                  <Item key={item.cartId}>
                    <Image src={item.foto} alt={item.nome} />
                    <div>
                      <ProductName>{item.nome}</ProductName>
                      <Price>{formatPrice(item.preco * item.quantity)}</Price>
                      <Quantity>
                        <QuantityButton
                          type="button"
                          onClick={() => dispatch(decreaseQuantity(item.cartId))}
                          aria-label={`Diminuir quantidade de ${item.nome}`}
                        >
                          −
                        </QuantityButton>
                        <span aria-label={`Quantidade: ${item.quantity}`}>{item.quantity}</span>
                        <QuantityButton
                          type="button"
                          onClick={() => dispatch(increaseQuantity(item.cartId))}
                          aria-label={`Aumentar quantidade de ${item.nome}`}
                        >
                          +
                        </QuantityButton>
                      </Quantity>
                    </div>
                    <RemoveButton
                      type="button"
                      onClick={() => dispatch(removeItem(item.cartId))}
                    >
                      Remover
                    </RemoveButton>
                  </Item>
                ))}
              </Items>
            )}
          </div>
          {items.length > 0 ? (
            <Summary aria-label="Resumo da compra">
              <SummaryTitle>Resumo do pedido</SummaryTitle>
              <Total>
                <span>Valor total</span>
                <span>{formatPrice(total)}</span>
              </Total>
              <ContinueLink to="/">Adicionar mais produtos</ContinueLink>
            </Summary>
          ) : null}
        </CartLayout>
      </Main>
      <Footer />
    </>
  )
}

export default Cart
