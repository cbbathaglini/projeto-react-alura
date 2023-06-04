import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { getLivrosFavoritos } from '../services/livros_favoritos';
import livroImg from '../imagens/livro.png'

function Favoritos() {

  const [livrosFavoritos, setLivrosFavoritos] = useState([])


  useEffect(() => {
    fetchLivrosFavoritos()
  },[])

  async function fetchLivrosFavoritos(){
    const listLivrosFavoritosAPI =  await getLivrosFavoritos()
    setLivrosFavoritos(listLivrosFavoritosAPI)
  }

 
  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            livrosFavoritos.length !== 0 ? livrosFavoritos.map(favorito => (
              <Resultado>
                <p>{favorito.nome}</p>
                <img src={livroImg}/>
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;



const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`
