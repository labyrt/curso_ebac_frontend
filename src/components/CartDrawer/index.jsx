import { useEffect, useState } from 'react'
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
  overflow-y: auto;
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

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
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
  margin-top: 8px;
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

const Heading = styled.h2`
  margin-bottom: 16px;
  color: #ffebd9;
  font-size: 16px;
  line-height: 19px;
  font-weight: 900;
`

const Form = styled.form`
  color: #ffebd9;
`

const Field = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;

  input {
    width: 100%;
    height: 32px;
    margin-top: 8px;
    border: 2px solid transparent;
    padding: 0 8px;
    background: #ffebd9;
    color: #4b4b4b;
    font-size: 14px;
    outline: none;
  }

  input:focus {
    border-color: #fff;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns || '1fr 1fr'};
  gap: 16px;
`

const SuccessText = styled.p`
  margin-bottom: 24px;
  color: #ffebd9;
  font-size: 14px;
  line-height: 22px;
`

const formatPrice = (value) =>
  Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

const CartDrawer = () => {
  const {
    items,
    total,
    isOpen,
    closeCart,
    removeItem,
    changeQuantity,
    clearCart
  } = useCart()

  const [step, setStep] = useState('cart')
  const [orderId, setOrderId] = useState('')
  const [delivery, setDelivery] = useState({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  })
  const [payment, setPayment] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    month: '',
    year: ''
  })

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (!isOpen && step !== 'success') setStep('cart')

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, step])

  const updateDelivery = (event) => {
    const { name, value } = event.target
    setDelivery((current) => ({ ...current, [name]: value }))
  }

  const updatePayment = (event) => {
    const { name, value } = event.target
    setPayment((current) => ({ ...current, [name]: value }))
  }

  const finishOrder = (event) => {
    event.preventDefault()
    setOrderId(`EFOOD-${String(Date.now()).slice(-6)}`)
    clearCart()
    setStep('success')
  }

  const finishAndClose = () => {
    setStep('cart')
    setOrderId('')
    setDelivery({ receiver: '', address: '', city: '', zipCode: '', number: '', complement: '' })
    setPayment({ cardName: '', cardNumber: '', cvv: '', month: '', year: '' })
    closeCart()
  }

  return (
    <Overlay
      $open={isOpen}
      onClick={closeCart}
      aria-hidden={!isOpen}
    >
      <Drawer
        $open={isOpen}
        onClick={(event) => event.stopPropagation()}
        aria-label="Carrinho e finalização do pedido"
      >
        {step === 'cart' && (
          <>
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
                        <QtyButton
                          type="button"
                          onClick={() => changeQuantity(item.id, item.quantity - 1)}
                          aria-label="Diminuir quantidade"
                        >
                          −
                        </QtyButton>
                        <span>{item.quantity}</span>
                        <QtyButton
                          type="button"
                          onClick={() => changeQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar quantidade"
                        >
                          +
                        </QtyButton>
                      </Qty>
                    </div>
                    <Remove
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remover ${item.name || item.title}`}
                    />
                  </Item>
                ))}
                <Total>
                  <span>Valor total</span>
                  <span>{formatPrice(total)}</span>
                </Total>
                <Action type="button" onClick={() => setStep('delivery')}>
                  Continuar com a entrega
                </Action>
              </>
            )}
          </>
        )}

        {step === 'delivery' && (
          <Form
            onSubmit={(event) => {
              event.preventDefault()
              setStep('payment')
            }}
          >
            <Heading>Entrega</Heading>
            <Field>
              Quem irá receber
              <input name="receiver" value={delivery.receiver} onChange={updateDelivery} required />
            </Field>
            <Field>
              Endereço
              <input name="address" value={delivery.address} onChange={updateDelivery} required />
            </Field>
            <Field>
              Cidade
              <input name="city" value={delivery.city} onChange={updateDelivery} required />
            </Field>
            <Row>
              <Field>
                CEP
                <input
                  name="zipCode"
                  value={delivery.zipCode}
                  onChange={updateDelivery}
                  inputMode="numeric"
                  required
                />
              </Field>
              <Field>
                Número
                <input
                  name="number"
                  value={delivery.number}
                  onChange={updateDelivery}
                  inputMode="numeric"
                  required
                />
              </Field>
            </Row>
            <Field>
              Complemento (opcional)
              <input name="complement" value={delivery.complement} onChange={updateDelivery} />
            </Field>
            <Action type="submit">Continuar com o pagamento</Action>
            <Action type="button" onClick={() => setStep('cart')}>
              Voltar para o carrinho
            </Action>
          </Form>
        )}

        {step === 'payment' && (
          <Form onSubmit={finishOrder}>
            <Heading>Pagamento - Valor a pagar {formatPrice(total)}</Heading>
            <Field>
              Nome no cartão
              <input name="cardName" value={payment.cardName} onChange={updatePayment} required />
            </Field>
            <Row $columns="2fr 1fr">
              <Field>
                Número do cartão
                <input
                  name="cardNumber"
                  value={payment.cardNumber}
                  onChange={updatePayment}
                  inputMode="numeric"
                  required
                />
              </Field>
              <Field>
                CVV
                <input
                  name="cvv"
                  value={payment.cvv}
                  onChange={updatePayment}
                  inputMode="numeric"
                  maxLength={4}
                  required
                />
              </Field>
            </Row>
            <Row>
              <Field>
                Mês de vencimento
                <input
                  name="month"
                  value={payment.month}
                  onChange={updatePayment}
                  inputMode="numeric"
                  maxLength={2}
                  required
                />
              </Field>
              <Field>
                Ano de vencimento
                <input
                  name="year"
                  value={payment.year}
                  onChange={updatePayment}
                  inputMode="numeric"
                  maxLength={4}
                  required
                />
              </Field>
            </Row>
            <Action type="submit">Finalizar pagamento</Action>
            <Action type="button" onClick={() => setStep('delivery')}>
              Voltar para a edição de endereço
            </Action>
          </Form>
        )}

        {step === 'success' && (
          <>
            <Heading>Pedido realizado - {orderId}</Heading>
            <SuccessText>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve,
              será entregue no endereço informado.
            </SuccessText>
            <SuccessText>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças
              extras. Caso ocorra alguma situação diferente, entre em contato conosco.
            </SuccessText>
            <SuccessText>
              Agradecemos pela preferência e desejamos uma ótima experiência gastronômica.
            </SuccessText>
            <Action type="button" onClick={finishAndClose}>
              Concluir
            </Action>
          </>
        )}
      </Drawer>
    </Overlay>
  )
}

export default CartDrawer
