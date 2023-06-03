import styled from 'styled-components'
import {Link} from 'react-router-dom'

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"]


function OpcoesHeader() {
  return (
    <ListaOpcoesContainer>
      {textoOpcoes.map( (opcao) => 
          <Link to={`/${opcao.toLowerCase()}`}>
            <OpcaoContainer><p>{opcao}</p></OpcaoContainer>
          </Link>)}
    </ListaOpcoesContainer>
  );
}

export default OpcoesHeader;
const ListaOpcoesContainer = styled.ul`
  display: flex;
`
const OpcaoContainer = styled.li`
  font-size: 16px;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor:pointer;
`