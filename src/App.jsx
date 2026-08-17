import { Navigate, Route, Routes } from 'react-router-dom'

import CartDrawer from './components/CartDrawer'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const App = () => (
  <CartProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Restaurant />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <CartDrawer />
  </CartProvider>
)

export default App
