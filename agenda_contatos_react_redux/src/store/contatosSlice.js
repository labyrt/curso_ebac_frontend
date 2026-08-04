import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  itens: [
    {
      id: nanoid(),
      nome: 'Marina Costa',
      email: 'marina.costa@email.com',
      telefone: '(11) 99876-5432',
    },
    {
      id: nanoid(),
      nome: 'Rafael Lima',
      email: 'rafael.lima@email.com',
      telefone: '(21) 98765-4321',
    },
  ],
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: {
      reducer: (state, action) => {
        state.itens.push(action.payload)
      },
      prepare: ({ nome, email, telefone }) => ({
        payload: {
          id: nanoid(),
          nome,
          email,
          telefone,
        },
      }),
    },
    editarContato: (state, action) => {
      const indice = state.itens.findIndex((contato) => contato.id === action.payload.id)

      if (indice !== -1) {
        state.itens[indice] = action.payload
      }
    },
    removerContato: (state, action) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
  },
})

export const { adicionarContato, editarContato, removerContato } = contatosSlice.actions
export default contatosSlice.reducer
