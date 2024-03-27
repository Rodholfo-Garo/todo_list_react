import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import filtroReducer from './reducers/filtro'

// Função que recebe um objeto
const store = configureStore({
  reducer: {
    filtro: filtroReducer,
    contatos: contatosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
