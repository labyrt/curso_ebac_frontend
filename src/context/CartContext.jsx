import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (item) => {
    setItems((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id)
      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...current, { ...item, quantity: 1 }]
    })
    setIsOpen(true)
  }

  const removeItem = (id) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  const changeQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => setItems([])

  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce(
    (sum, item) => sum + Number(item.price || 0) * item.quantity,
    0
  )

  const value = useMemo(
    () => ({
      items,
      count,
      total,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      removeItem,
      changeQuantity,
      clearCart
    }),
    [items, count, total, isOpen]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart deve ser usado dentro de CartProvider')
  return context
}
