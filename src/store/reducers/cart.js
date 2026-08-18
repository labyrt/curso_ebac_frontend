import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload
      const existingItem = state.items.find((item) => item.cartId === product.cartId)

      if (existingItem) {
        existingItem.quantity += 1
        return
      }

      state.items.push({ ...product, quantity: 1 })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.cartId !== action.payload)
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((product) => product.cartId === action.payload)
      if (item) item.quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((product) => product.cartId === action.payload)
      if (!item) return

      if (item.quantity === 1) {
        state.items = state.items.filter((product) => product.cartId !== action.payload)
        return
      }

      item.quantity -= 1
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectCartCount = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
)

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + Number(item.preco) * item.quantity, 0)
)

export default cartSlice.reducer
