import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './contatosSlice'

const STORAGE_KEY = 'agenda-contatos-react-redux'

const carregarEstado = () => {
  try {
    const estadoSalvo = localStorage.getItem(STORAGE_KEY)
    return estadoSalvo ? JSON.parse(estadoSalvo) : undefined
  } catch {
    return undefined
  }
}

export const store = configureStore({
  reducer: {
    contatos: contatosReducer,
  },
  preloadedState: carregarEstado(),
})

store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()))
  } catch {
    // A aplicação continua funcionando mesmo se o armazenamento não estiver disponível.
  }
})
