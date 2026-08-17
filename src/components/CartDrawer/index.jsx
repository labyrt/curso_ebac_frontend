import styled from 'styled-components'

import { useCart } from '../../context/CartContext'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease, visibility 0.2s ease;
`

const Drawer = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: min(360px, 100%);
  min-height: 100%;
  padding: 32px 8px;
  background: #e66767;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 0.25s ease;
`

const Item = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 8px;
  min-height: 100px;
  margin-bottom: 16px;
  padding: 8px;
  background: #ffebd9;
  color: #e66767;
`

const Thumb = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

const Name = styled.h3`
  margin: 0 28px 16px 0;
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
`

const Price = styled.p`
  font-size: 14px;
  line-height: 22px;
`

const Qty = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  font-size: 12px;
`

const QtyButton = styled.button`
  width: 22px;
  height: 22px;
  border: 1px solid #e66767;
  background: transparent;
  color: #e66767;
  cursor: pointer;
  font-weight: 900;
`

const Remove = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 18px;
  height: 18px;
  border: 0;
  background: transparent;
  color: #e66767;
  cursor: pointer;
  font-size: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 8px;
    top: 1px;
    width: 2px;
    height: 16px;
    background: currentColor;
  }
  &::before { transform: rotate(45deg); }
  &::after { transform: rotate(-45deg); }
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  color: #ffebd9;
  font-size: 14px;
  font-weight: 900;
`

const Action = styled.button`
  width: 100%;
  min-height: 24px;
  border: 0;
  padding: 4px 8px;
  background: #ffebd9;
  color: #e66767;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
`

const Empty = styled.p`
  padding: 24px 8px;
  color: #ffebd9;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`

const formatPrice = (value) =>
  Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

const CartDrawer = () => {
  const { items, total, isOpen, closeCart, removeItem, changeQuantity } = useCart()

  return (
    <Overlay $open={isOpen} onClick={closeCart} aria-hidden={!isOpen}>
      <Drawer $open={isOpen} onClick={(event) => event.stopPropagation()} aria-label="Carrinho">
        {items.length === 0 ? (
          <Empty>O carrinho está vazio. Adicione um prato para começar seu pedido.</Empty>
        ) : (
          <>
            {items.map((item) => (
              <Item key={item.id}>
                <Thumb src={item.image} alt="" />
                <div>
                  <Name>{item.name || item.title}</Name>
                  <Price>{formatPrice(item.price)}</Price>
                  <Qty>
                    <QtyButton type="button" onClick={() => changeQuantity(item.id, item.quantity - 1)} aria-label="Diminuir quantidade">−</QtyButton>
                    <span>{item.quantity}</span>
                    <QtyButton type="button" onClick={() => changeQuantity(item.id, item.quantity + 1)} aria-label="Aumentar quantidade">+</QtyButton>
                  </Qty>
                </div>
                <Remove type="button" onClick={() => removeItem(item.id)} aria-label={`Remover ${item.name || item.title}`} />
              </Item>
            ))}
            <Total>
              <span>Valor total</span>
              <span>{formatPrice(total)}</span>
            </Total>
            <Action type="button">Continuar com a entrega</Action>
          </>
        )}
      </Drawer>
    </Overlay>
  )
}

export default CartDrawer
