import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/Contato/styles'

const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style: none;
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #6c7a89;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const Box = styled.div`
  width: 60%;
  height: 80%;
  background-color: #fff;
`
export const MainContainer = styled.section`
  padding: 0 8px;
  height: 70%;
  overflow-y: scroll;
`

export const Campo = styled.input`
  width: 100%;
  padding: 4px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
