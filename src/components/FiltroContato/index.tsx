import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

// 1 cria a props
export type Props = {
  legenda: string
  criterio: 'categoria' | 'todos'
  valor?: enums.Categoria
}

// 2 Concede acesso as propriedades
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'categoria') {
      return contatos.itens.filter((item) => item.categoria === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarTarefas()
  const ativo = verificaEstaAtivo()
  return (
    <S.FiltroCard onClick={filtrar} ativo={ativo}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.FiltroCard>
  )
}

export default FiltroCard
