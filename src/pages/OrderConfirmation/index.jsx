import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'
import { Container } from '../../styles/shared'

const Main = styled.main`
  padding: 56px 0 40px;
`

const ConfirmationContainer = styled(Container)`
  max-width: 760px;
`

const Card = styled.section`
  padding: 40px 32px;
  background: #e66767;
  color: #ffebd9;

  @media (max-width: 600px) {
    padding: 32px 20px;
  }
`

const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 29px;
  font-weight: 900;
`

const OrderId = styled.p`
  margin-bottom: 24px;
  padding: 16px;
  background: #ffebd9;
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
`

const Text = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
`

const HomeLink = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  padding: 10px 16px;
  background: #ffebd9;
  color: #e66767;
  font-size: 14px;
  font-weight: 900;
`

const OrderConfirmation = () => {
  const { state } = useLocation()
  const orderId = state?.orderId

  return (
    <>
      <RestaurantHeader />
      <Main>
        <ConfirmationContainer>
          <Card>
            {orderId ? (
              <>
                <Title>Pedido realizado - {orderId}</Title>
                <OrderId>Número do pedido: {orderId}</OrderId>
                <Text>
                  Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve,
                  será entregue no endereço informado.
                </Text>
                <Text>
                  Nossos entregadores não estão autorizados a realizar cobranças extras. Caso ocorra alguma
                  situação diferente, entre em contato conosco.
                </Text>
                <Text>
                  Agradecemos pela preferência e desejamos uma ótima experiência gastronômica.
                </Text>
              </>
            ) : (
              <>
                <Title>Pedido não encontrado</Title>
                <Text>
                  Esta página exibe a confirmação logo depois que a API conclui um pedido. Faça uma nova
                  compra para receber um número de pedido.
                </Text>
              </>
            )}
            <HomeLink to="/">Voltar para restaurantes</HomeLink>
          </Card>
        </ConfirmationContainer>
      </Main>
      <Footer />
    </>
  )
}

export default OrderConfirmation
