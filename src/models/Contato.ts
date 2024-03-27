import { NomeContato } from '../components/Contato/styles'
import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  nome: string
  categoria: enums.Categoria
  telefone: string
  email: string
  id: number

  constructor(
    nome: string,
    categoria: enums.Categoria,
    telefone: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.categoria = categoria
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Tarefa
