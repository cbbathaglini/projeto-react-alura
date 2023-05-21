import './estilo.css';
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'


const iconesHeader = [perfil, sacola]

function OpcoesIconesHeader() {
  return (
    <ul className='opcoes-icones'>
      {iconesHeader.map( (opcao) => <li className='opcoes-icones-item'><img src={opcao}></img></li>)}
    </ul>
  );
}

export default OpcoesIconesHeader;
