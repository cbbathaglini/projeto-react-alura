import styled from 'styled-components'
import {useState} from 'react'
import { livros } from '../Pesquisa/dadosPesquisa'

function Input() {
  const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
  return (
    <InputType
        placeholder='Escreva sua próxima leitura'
        onBlur={evento => {
            const textoDigitado = evento.target.value
            const resultadoPesquisa = livros.filter(livro => 
                livro.nome.includes(textoDigitado) 
            )
            setLivrosPesquisados(resultadoPesquisa)
        }}
    />
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


