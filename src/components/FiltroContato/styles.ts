import styled from 'styled-components'

// 3 importa a prop
// import { Props } from '.'

//Omitir Propriedades que não usaremos

// type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda' | 'criterio'>

type Props = {
  ativo: boolean
}

//4 concede acesso a Prop
export const FiltroCard = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: block;
`

export const Label = styled.div`
  font-size: 12px;
`
