import { Navigate, Route, Routes } from 'react-router-dom'

import Cart from './pages/Cart'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Restaurant />} />
    <Route path="/carrinho" element={<Cart />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default App
