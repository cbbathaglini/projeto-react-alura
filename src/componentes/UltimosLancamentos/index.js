import styled from 'styled-components'
import { livros } from '../UltimosLancamentos/dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomendacoes from '../CardRecomendacoes';
import imagemLivro from '../../imagens/livro2.png'

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
        <Titulo 
          cor="#EB9B00" >
            ÚLTIMOS LANÇAMENTOS
        </Titulo>
        <NovosLivrosContainer>
        {livros.map( (livro) => (
            <img src={livro.src}/>
          ))}
        </NovosLivrosContainer>
       <CardRecomendacoes 
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação integrada com a pltaforma Google"
        imagem={imagemLivro}
       />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
