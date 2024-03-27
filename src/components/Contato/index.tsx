import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar } from '../../store/reducers/contatos'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import ContatoClass from '../../models/Contato'
import { BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({ categoria, email, telefone, nome, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [telefoneState, setTelefone] = useState(telefone)

  // Criar estado para o textarea
  // const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (telefone.length > 0) {
      setTelefone(telefone)
    }
  }, [telefone])

  function cancelarEdicao() {
    setEstaEditando(false)
    setTelefone(telefone)
  }

  return (
    <S.Card>
      <S.BarraAcoesNome>
        {/* nome */}
        <S.NomeContato> {nome}</S.NomeContato>
        {/* Categoria */}
        <S.Tag categoria={categoria}>{categoria}</S.Tag>
      </S.BarraAcoesNome>
      {/* textarea */}
      <S.DadosInseridos
        disabled={!estaEditando}
        value={telefoneState}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    categoria,
                    email,
                    telefone,
                    nome,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
