import { Box } from '../../styles'
import FiltroDeContatos from '../../containers/FiltroDeContatos'
import ListaDeContatos from '../../containers/ListaDeContatos'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => {
  return (
    <>
      <Box>
        <FiltroDeContatos />
        <ListaDeContatos />
        <BotaoAdicionar />
      </Box>
    </>
  )
}

export default Home
