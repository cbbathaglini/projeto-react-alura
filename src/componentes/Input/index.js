import styled from 'styled-components'
import {useEffect, useState} from 'react'
import { getLivros } from '../../services/livros'

function Input() {
  const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetchLivros()
  },[])

  async function fetchLivros(){
    const listLivros =  await getLivros()
    console.log("ahere: " + JSON.stringify(listLivros))
    setLivros(listLivros)
  }

  return (
    <div>
    <InputType
        placeholder='Escreva sua próxima leitura'
        onBlur={evento => {
            const textoDigitado = evento.target.value
            const resultadoPesquisa = livros.filter(livro => 
                livro.nome.includes(textoDigitado) 
            )
            setLivrosPesquisados(resultadoPesquisa)
            console.log(livrosPesquisados);
            console.log(resultadoPesquisa);
        }}
    />
    
    {livrosPesquisados.map( (livro) => (
        <Resultado>
            <p>{livro.nome}</p>
            <img src={livro.src}/>
        </Resultado>
    ) )}
    </div>
  );
}

export default Input;
const InputType = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
            color: #FFF;
            font-size: 16px;
    }
`


const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`