import logo from '../../imagens/logo.svg';
import styled from 'styled-components'

function Logo() {
  return (
        <LogoContainer>
          <Imagem
            src={logo} 
            alt="logo" 
          />
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
  );
}

export default Logo;
const LogoContainer = styled.div`

  display: flex;
  font-size: 30px;


.img-logo{
  margin-right: 10px;
}
`

const Imagem = styled.img`
  margin-right: 10px;
`