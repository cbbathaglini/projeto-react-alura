import './App.css';
import Logo from './componentes/logo/index';
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"]
const iconesHeader = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <ul className='opcoes'>
          {textoOpcoes.map( (opcao) => <li className='opcoes-item'><p>{opcao}</p></li>)}
        </ul>

        <ul className='opcoes-icones'>
          {iconesHeader.map( (opcao) => <li className='opcoes-icones-item'><img src={opcao}></img></li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
