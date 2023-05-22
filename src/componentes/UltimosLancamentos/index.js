import styled from 'styled-components'
import { livros } from '../UltimosLancamentos/dadosUltimosLancamentos'
import { Titulo } from '../Titulo'

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
