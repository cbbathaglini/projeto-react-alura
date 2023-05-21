import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const iconesHeader = [perfil, sacola]

function OpcoesIconesHeader() {
  return (
    <ListaIcones>
      {iconesHeader.map( (opcao) => <Icone><img src={opcao}></img></Icone>)}
    </ListaIcones>
  );
}

export default OpcoesIconesHeader;
const ListaIcones = styled.ul`
  display: flex;
  align-items: center;
`

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`
