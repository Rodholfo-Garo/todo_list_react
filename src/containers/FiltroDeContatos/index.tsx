import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroContato'
import * as S from './sytyles'
import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Tarefa'
import { Campo } from '../../styles'

const FiltroDeContatos = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Header>
      <div>
        <Campo
          type="text"
          placeholder="Buscar Contato"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtro>
          <FiltroCard
            valor={enums.Categoria.FAMILIA}
            criterio="categoria"
            legenda="Familia"
          />
          <FiltroCard
            valor={enums.Categoria.TRABALHO}
            criterio="categoria"
            legenda="Trabalho"
          />
          <FiltroCard
            valor={enums.Categoria.AMIGOS}
            criterio="categoria"
            legenda="Amigos"
          />
          <FiltroCard criterio="todos" legenda="Todos" />
        </S.Filtro>
      </div>
    </S.Header>
  )
}

export default FiltroDeContatos
