import { Navigate, Route, Routes } from 'react-router-dom'

import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import OrderConfirmation from './pages/OrderConfirmation'
import Restaurant from './pages/Restaurant'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Restaurant />} />
    <Route path="/carrinho" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/pedido-confirmado" element={<OrderConfirmation />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default App
