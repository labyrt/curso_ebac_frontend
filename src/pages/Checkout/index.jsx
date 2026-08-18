import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'
import { submitCheckout } from '../../services/api'
import {
  clearCart,
  selectCartItems,
  selectCartTotal
} from '../../store/reducers/cart'
import { Container } from '../../styles/shared'

const Main = styled.main`
  padding: 56px 0 40px;
`

const CheckoutContainer = styled(Container)`
  max-width: 760px;
`

const Card = styled.section`
  padding: 32px;
  background: #e66767;
  color: #ffebd9;

  @media (max-width: 600px) {
    padding: 24px 16px;
  }
`

const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 29px;
  font-weight: 900;
`

const Subtitle = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 22px;
`

const Form = styled.form`
  display: grid;
  gap: 16px;
`

const Field = styled.label`
  display: grid;
  gap: 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;

  input {
    width: 100%;
    min-height: 40px;
    border: 2px solid transparent;
    padding: 8px;
    background: #ffebd9;
    color: #4b4b4b;
    font: inherit;
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

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const Actions = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 8px;
`

const Button = styled.button`
  width: 100%;
  min-height: 40px;
  border: 0;
  padding: 8px 12px;
  background: #ffebd9;
  color: #e66767;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    cursor: wait;
    opacity: 0.7;
  }
`

const BackButton = styled.button`
  width: 100%;
  min-height: 40px;
  border: 1px solid #ffebd9;
  padding: 8px 12px;
  background: transparent;
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`

const CartLink = styled(Link)`
  display: block;
  width: 100%;
  min-height: 40px;
  padding: 10px 12px;
  border: 1px solid #ffebd9;
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 235, 217, 0.55);
  font-size: 16px;
  font-weight: 900;
`

const ErrorMessage = styled.p`
  padding: 12px;
  background: #ffebd9;
  color: #9d2222;
  font-size: 14px;
  line-height: 20px;
`

const Empty = styled.section`
  padding: 48px 24px;
  border: 1px solid #e66767;
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

const onlyDigits = (value) => value.replace(/\D/g, '')

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const [step, setStep] = useState('delivery')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [delivery, setDelivery] = useState({
    receiver: '',
    description: '',
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

  const updateDelivery = (event) => {
    const { name, value } = event.target
    setDelivery((current) => ({ ...current, [name]: value }))
  }

  const updatePayment = (event) => {
    const { name, value } = event.target
    setPayment((current) => ({ ...current, [name]: value }))
  }

  const goToPayment = (event) => {
    event.preventDefault()
    setError('')
    setStep('payment')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const finishOrder = async (event) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    const products = items.flatMap((item) =>
      Array.from({ length: Math.max(1, Number(item.quantity) || 1) }, () => ({
        id: Number(item.id),
        price: Number(item.preco)
      }))
    )

    const payload = {
      products,
      delivery: {
        receiver: delivery.receiver.trim(),
        address: {
          description: delivery.description.trim(),
          city: delivery.city.trim(),
          zipCode: onlyDigits(delivery.zipCode),
          number: Number(delivery.number),
          ...(delivery.complement.trim()
            ? { complement: delivery.complement.trim() }
            : {})
        }
      },
      payment: {
        card: {
          name: payment.cardName.trim(),
          number: onlyDigits(payment.cardNumber),
          code: Number(onlyDigits(payment.cvv)),
          expires: {
            month: Number(payment.month),
            year: Number(payment.year)
          }
        }
      }
    }

    try {
      const response = await submitCheckout(payload)
      dispatch(clearCart())
      navigate('/pedido-confirmado', {
        replace: true,
        state: { orderId: response.orderId }
      })
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível concluir o pedido.')
      setIsSubmitting(false)
    }
  }

  if (items.length === 0 && !isSubmitting) {
    return (
      <>
        <RestaurantHeader />
        <Main>
          <CheckoutContainer>
            <Empty>
              <p>Seu carrinho está vazio. Adicione produtos antes de finalizar o pedido.</p>
              <Link to="/">Voltar para os restaurantes</Link>
            </Empty>
          </CheckoutContainer>
        </Main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <RestaurantHeader />
      <Main>
        <CheckoutContainer>
          <Card>
            <Total>
              <span>Valor do pedido</span>
              <span>{formatPrice(total)}</span>
            </Total>

            {step === 'delivery' ? (
              <>
                <Title>Entrega</Title>
                <Subtitle>Preencha os dados de quem irá receber o pedido.</Subtitle>
                <Form onSubmit={goToPayment}>
                  <Field>
                    Quem irá receber
                    <input
                      name="receiver"
                      value={delivery.receiver}
                      onChange={updateDelivery}
                      autoComplete="name"
                      required
                    />
                  </Field>
                  <Field>
                    Endereço
                    <input
                      name="description"
                      value={delivery.description}
                      onChange={updateDelivery}
                      autoComplete="street-address"
                      required
                    />
                  </Field>
                  <Field>
                    Cidade
                    <input
                      name="city"
                      value={delivery.city}
                      onChange={updateDelivery}
                      autoComplete="address-level2"
                      required
                    />
                  </Field>
                  <Row>
                    <Field>
                      CEP
                      <input
                        name="zipCode"
                        value={delivery.zipCode}
                        onChange={updateDelivery}
                        inputMode="numeric"
                        autoComplete="postal-code"
                        minLength={8}
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
                        min="1"
                        required
                      />
                    </Field>
                  </Row>
                  <Field>
                    Complemento (opcional)
                    <input
                      name="complement"
                      value={delivery.complement}
                      onChange={updateDelivery}
                    />
                  </Field>
                  <Actions>
                    <Button type="submit">Continuar com o pagamento</Button>
                    <CartLink to="/carrinho">Voltar para o carrinho</CartLink>
                  </Actions>
                </Form>
              </>
            ) : (
              <>
                <Title>Pagamento</Title>
                <Subtitle>Informe os dados do cartão para concluir o pedido.</Subtitle>
                <Form onSubmit={finishOrder}>
                  <Field>
                    Nome no cartão
                    <input
                      name="cardName"
                      value={payment.cardName}
                      onChange={updatePayment}
                      autoComplete="cc-name"
                      required
                    />
                  </Field>
                  <Field>
                    Número do cartão
                    <input
                      name="cardNumber"
                      value={payment.cardNumber}
                      onChange={updatePayment}
                      inputMode="numeric"
                      autoComplete="cc-number"
                      minLength={13}
                      maxLength={19}
                      required
                    />
                  </Field>
                  <Row $columns="1fr 1fr 1fr">
                    <Field>
                      CVV
                      <input
                        name="cvv"
                        value={payment.cvv}
                        onChange={updatePayment}
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        minLength={3}
                        maxLength={4}
                        required
                      />
                    </Field>
                    <Field>
                      Mês
                      <input
                        name="month"
                        value={payment.month}
                        onChange={updatePayment}
                        type="number"
                        min="1"
                        max="12"
                        autoComplete="cc-exp-month"
                        required
                      />
                    </Field>
                    <Field>
                      Ano
                      <input
                        name="year"
                        value={payment.year}
                        onChange={updatePayment}
                        type="number"
                        min="2026"
                        max="2100"
                        autoComplete="cc-exp-year"
                        required
                      />
                    </Field>
                  </Row>

                  {error ? <ErrorMessage role="alert">{error}</ErrorMessage> : null}

                  <Actions>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Enviando pedido...' : 'Concluir pedido'}
                    </Button>
                    <BackButton
                      type="button"
                      onClick={() => {
                        setError('')
                        setStep('delivery')
                      }}
                      disabled={isSubmitting}
                    >
                      Voltar para a entrega
                    </BackButton>
                  </Actions>
                </Form>
              </>
            )}
          </Card>
        </CheckoutContainer>
      </Main>
      <Footer />
    </>
  )
}

export default Checkout
