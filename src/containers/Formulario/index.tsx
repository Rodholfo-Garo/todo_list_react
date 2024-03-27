import React, { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Tarefa'
import { BotaoSalvar, MainContainer } from '../../styles'
import { Campo } from '../../styles'
import { Opcoes, Form } from './styles'
import Tarefa from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const [categoria, setCategoria] = useState(enums.Categoria.FAMILIA)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const telefoneNumber = parseFloat(telefone) // Converte para número
    if (!isNaN(telefoneNumber)) {
      // Verifica se a conversão foi bem-sucedida
      const contatoParaAdicionar = new Tarefa(
        nome,
        categoria,
        enums.Categoria.TODOS,
        email,
        telefoneNumber
      )
      dispatch(cadastrar(contatoParaAdicionar))
    } else {
      console.error(
        'Telefone inválido. Certifique-se de que seja um número válido.'
      )
    }
  }

  return (
    <MainContainer>
      <h3>Adicionar Novo Contato</h3>
      <Form onSubmit={cadastrarContato}>
        {/* Campos de entrada (Nome, E-mail, Telefone) */}
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="text"
          placeholder="Telefone"
        />
        {/* Seleção de categoria (Família, Amigo, Trabalho) */}
        <Opcoes>
          <p>Categoria</p>
          <input
            value={enums.Categoria.FAMILIA}
            name="categoria"
            type="radio"
            id="familia"
            onChange={(evento) =>
              setCategoria(evento.target.value as enums.Categoria)
            }
            defaultChecked={categoria === enums.Categoria.FAMILIA}
          />
          <label htmlFor="familia">Família</label>
          <input
            value={enums.Categoria.AMIGOS}
            name="categoria"
            type="radio"
            id="amigo"
            onChange={(evento) =>
              setCategoria(evento.target.value as enums.Categoria)
            }
          />
          <label htmlFor="amigo">Amigo</label>
          <input
            value={enums.Categoria.TRABALHO}
            name="categoria"
            type="radio"
            id="trabalho"
            onChange={(evento) =>
              setCategoria(evento.target.value as enums.Categoria)
            }
          />
          <label htmlFor="trabalho">Trabalho</label>
        </Opcoes>
        {/* Botões de salvar e voltar */}
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        <BotaoSalvar type="button">Voltar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
