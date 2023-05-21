import './estilo.css';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import OpcoesIconesHeader from '../OpcoesIconesHeader';

function Header() {
  return (
      <header className="App-header">
        <Logo />
        <OpcoesHeader/>
        <OpcoesIconesHeader />
     </header>
  );
}

export default Header;
