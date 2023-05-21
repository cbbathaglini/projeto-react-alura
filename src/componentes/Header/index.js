import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import OpcoesIconesHeader from '../OpcoesIconesHeader';
import styled from 'styled-components'


function Header() {
  return (
      <HeaderContainer>
        <Logo />
        <OpcoesHeader/>
        <OpcoesIconesHeader />
     </HeaderContainer>
  );
}

export default Header;


const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`