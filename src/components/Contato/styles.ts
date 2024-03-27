import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefa'

type TagProps = {
  categoria?: enums.Categoria
}

function retornaCordeFundo(props: TagProps): string {
  if ('categoria' in props) {
    if (props.categoria === enums.Categoria.FAMILIA) return variaveis.verde
    if (props.categoria === enums.Categoria.AMIGOS) return variaveis.amarelo
    if (props.categoria === enums.Categoria.TRABALHO) return variaveis.vermelho
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: opx 4px 4px rgba(0, 0, 0, 0.25);
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 8px;
`
export const NomeContato = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCordeFundo(props)};
  border-radius: 5px;
  margin-right: 8px;
  display: inline-block;
  border: none;
`
export const DadosInseridos = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  margin-bottom: 8px;
  margin-top: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`
export const BarraAcoesNome = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 8px;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 8px;
  color: #fff;
  padding: 8px 8px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 5px;
  margin-right: 8px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
