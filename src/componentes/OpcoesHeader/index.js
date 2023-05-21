import styled from 'styled-components'

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"]


function OpcoesHeader() {
  return (
    <ListaOpcoesContainer>
      {textoOpcoes.map( (opcao) => <OpcaoContainer><p>{opcao}</p></OpcaoContainer>)}
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