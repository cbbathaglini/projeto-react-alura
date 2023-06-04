import Pesquisa from '../componentes/Pesquisa';
import styled from 'styled-components'

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
 
`