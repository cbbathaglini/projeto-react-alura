import './estilo.css';
const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"]

function OpcoesHeader() {
  return (
    <ul className='opcoes'>
      {textoOpcoes.map( (opcao) => <li className='opcoes-item'><p>{opcao}</p></li>)}
    </ul>
  );
}

export default OpcoesHeader;
