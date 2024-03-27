import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  // Pegar termo da filtragem
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    // If para caso o termo não exista
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'categoria') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.categoria === valor
        )
      }
    }
    return tarefasFiltradas
  }

  const contatos = filtraTarefas()

  return (
    <>
      <MainContainer>
        <p>
          {contatos.length} contatos marcados como: &quot;
          {`${criterio}=${valor}`}
          &ldquo;
        </p>

        <ul>
          {contatos.map((c) => (
            <li key={c.nome}>
              <Contato
                id={c.id}
                email={c.email}
                telefone={c.telefone}
                nome={c.nome}
                categoria={c.categoria}
              />
            </li>
          ))}
        </ul>
      </MainContainer>
    </>
  )
}

export default ListaDeContatos
