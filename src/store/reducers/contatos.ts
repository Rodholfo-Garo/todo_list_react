import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Contato'
import * as enums from '../../utils/enums/Tarefa'

type ContatosState = {
  itens: Tarefa[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Rodholfo',
      categoria: enums.Categoria.AMIGOS,
      telefone: '1188332878',
      email: 'ro.garo87@gmail.com'
    },
    {
      id: 2,
      nome: 'Michelle',
      categoria: enums.Categoria.FAMILIA,
      telefone: '1188332878',
      email: 'ro.garo87@gmail.com'
    },
    {
      id: 3,
      nome: 'Joaquim',
      categoria: enums.Categoria.TRABALHO,
      telefone: '1188332878',
      email: 'ro.garo87@gmail.com'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Contato ja Existe')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer
