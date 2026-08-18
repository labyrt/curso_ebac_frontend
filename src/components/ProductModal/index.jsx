import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { addItem } from '../../store/reducers/cart'

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.8);
`

const Dialog = styled.div`
  position: relative;
  width: min(100%, 1024px);
  min-height: 344px;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  padding: 32px;
  background: #e66767;
  color: #fff;

  @media (max-width: 700px) {
    max-height: calc(100vh - 48px);
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
`

const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 700px) {
    width: 100%;
    height: 220px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h2`
  margin: 0 40px 16px 0;
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
`

const Description = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
`

const Portion = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
`

const AddButton = styled.button`
  min-height: 24px;
  border: 0;
  padding: 4px 8px;
  background: #ffebd9;
  color: #e66767;
  font-size: 14px;
  line-height: 16px;
  font-weight: 900;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 15px;
    width: 2px;
    height: 24px;
    background: currentColor;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:focus-visible {
    outline: 3px solid #ffebd9;
  }
`

const formatPrice = (value) =>
  Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

const ProductModal = ({ product, onClose }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!product) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [product, onClose])

  if (!product) return null

  const addToCart = () => {
    dispatch(
      addItem({
        ...product,
        cartId: `${product.restaurantId}-${product.id}`
      })
    )
    onClose()
    navigate('/carrinho')
  }

  return (
    <Backdrop onMouseDown={onClose}>
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <Image src={product.foto} alt={product.nome} />
        <Content>
          <Title id="product-modal-title">{product.nome}</Title>
          <Description>{product.descricao}</Description>
          <Portion>Serve: {product.porcao}</Portion>
          <AddButton type="button" onClick={addToCart}>
            Adicionar ao carrinho - {formatPrice(product.preco)}
          </AddButton>
        </Content>
        <CloseButton
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        />
      </Dialog>
    </Backdrop>
  )
}

export default ProductModal
