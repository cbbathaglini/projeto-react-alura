
# projeto-react-alura
https://cursos.alura.com.br/formacao-full-stack-react-node-js
https://create-react-app.dev/docs/getting-started/
https://nodejs.org/en/docs

# textos abaixo foram retirados do curso da alura
# Aula 01.02
## teoria / história do React

O React foi desenvolvido por Jordan Walke, um engenheiro do Facebook, e lançado em 2013. A ferramenta foi criada para facilitar a manutenção do site do Facebook.

O React é, em resumo, uma **biblioteca JavaScript**. Ou seja, um conjunto de ferramentas que utiliza o JavaScript como código. Código este que, inclusive, é **aberto**. O React é sustentado pela Meta, a empresa do Facebook.

Ele usa o **JSX** como linguagem, uma combinação de JavaScript e HTML. A reutilização de componentes da interface é uma das principais características do React que, além disso, ainda é extremamente fácil de usar.

Devemos aprender a utilizar esse tecnologia porque ela é a ferramenta de front-end mais utilizada e aceita pelo mercado em todo mundo. Consequentemente, existe uma grande demanda por ela no mercado da programação.

Segundo o Stack Overflow, que refaz essa pesquisa anualmente, o React é usado em 44% das demandas de desenvolvimento web do mercado.

<br><br>

# Aula 01.03
Para saber mais: JSX, a ''linguagem'' do React
PRÓXIMA ATIVIDADE

O React usa uma sintaxe diferente do HTML ou do JavaScript que estamos acostumados a utilizar quando não estamos trabalhando com React,. Essa sintaxe é conhecida como JSX... mas o que precisamos saber mais sobre isso?

Para entendermos melhor sobre essa novidade e, principalmente, sabermos o por que do uso desta ferramenta, sua importância e como ela auxilia o React a ser o que é hoje no mercado de trabalho, te convido a visitar um importante conteúdo que é referência para quem está conhecendo o React pela primeira vez.

Os criadores do React disponibilizaram uma introdução ao JSX para auxiliar desenvolvedores como você a compreender essa porta de entrada ao React.

https://pt-br.legacy.reactjs.org/docs/introducing-jsx.html

<br><br>


# Aula 01.04

Para este curso precisamos instalar algumas ferramentas. Caso você ainda não tenha feito isso anteriormente, vou deixar um passo a passo na sequência:

Visual Studio Code
Para fazer a instalação, devemos acessar o site do Visual Studio Code e fazer o download da versão de seu sistema operacional.

Node
Caso precise instalar, os links estão na página oficial do NodeJS. Este curso foi desenvolvido usando a versão 16.15.1.

<br><br>

# Aula 01.05
Vamos dar nosso primeiro passo em direção a nos tornarmos desenvolvedores React. Faremos isso criando nossa primeira aplicação.

Agora que já temos todas as dependências necessárias para trabalhar com React, vamos abrir a IDE de nossa preferência. O instrutor utiliza o VS Code.

Vamos criar um novo arquivo, pelo caminho "Arquivo > Abrir > Nova Pasta". O nome da pasta será "alura-books", que será o nome do nosso site de livros. Depois, clicaremos em "Criar" e a pasta aparecerá. Vamos abri-la.

Agora vamos acessar "Terminal > Novo Terminal", para começarmos a criar nossa aplicação.

Vamos executar o comando npx create-react-app ., que criará nossa aplicação React e, com o ., cria na pasta que está aberta. No caso, a pasta "alura-books":

npx create-react-app .COPIAR CÓDIGO
O projeto será criado com todas as dependências. Vamos aguardar até que esteja pronto.

Quando a instalação estiver completa, veremos a mensagem "Happy hacking!" no terminal. Logo acima dessa mensagem, encontraremos os comandos que usaremos para rodar nossa aplicação. O comando que nos servirá durante o treinamento é npm start, que é responsável por fazer nossa aplicação rodar.

No menu lateral à esquerda, veremos que alguns arquivos foram criados automaticamente. O que buscaremos entender agora é o "package.json". Ele guarda as configurações do nosso projeto, como o nome, versão e dependências.

Vamos acessar a pasta "src". Dentro dela, há dois artigos que nos interessam: "App.js", que guarda o código que vamos manipular, e "App.css", o CSS padrão que nos servirá de referência. Vamos modificar bastante esses dois arquivos durante o treinamento.

No próximo vídeo, rodaremos nossa primeira aplicação.



<br><br>

# Aula 01.06

Vamos rodar nosso primeiro projeto React.

Para fazer isso, basta voltar ao terminal de rodar o comando npm start, que dará início à nossa aplicação:

npm startCOPIAR CÓDIGO
Alguns logs acontecerão e, automaticamente, seremos redirecionados para nossa página no navegador. No terminal, você encontrará a informação "Local: http://localhost:300". É nesse link que encontraremos, sempre, nossa aplicação rodando.

No momento, nossa aplicação é padrão, com um símbolo e link para a documentação da ferramenta. Vamos acessar, agora, "src > App.js".

Vamos trocar o texto entre as chaves <p>, na linha 10, por "Alura":

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Alura
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Executando "Ctrl + S", salvamos e podemos atualizar o navegador. Quando fizermos isso, veremos "Alura" em exibição na tela da aplicação.

Isso se chama Hot Reload, um carregamento automático. Não precisamos, portanto, parar e reiniciar nossa aplicação para verificar as alterações. Elas acontecem em tempo real.

Dentro do código HTML, encontramos todos os elementos que estão sendo exibidos na tela da aplicação. É nessa parte do código que faremos as alterações.

No próximo vídeo, trabalharemos no cabeçalho do nosso site!


<br><br>

# Aula 02.03

Agora vamos começar a pensar na nossa aplicação, o site de livros. Começaremos pelo header, o menu superior na qual o usuário conseguirá navegar pelo site.

Vamos voltar à IDE e abrir o arquivo "App.js". Nossa primeira ação será excluir o código de<img src=[logo] className="App-logo" alt="logo" /> até </a>. Do conteúdo, só não apagaremos a tag <header>:

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Vamos executar "Ctrl + S" e salvar o arquivo. Alguns avisos aparecerão no nosso terminal, devido ao que apagamos há pouco, mas em breve eles sumirão.

Acessando o navegador, a tela estará vazia, exibindo uma cor diferente. Vamos acessar o arquivo "App.css" e apagar todo o código. Criaremos nosso arquivo CSS do zero.

Precisamos lembrar de salvar o arquivo com "Ctrl + S" (ou "Command + S", caso você esteja usando Mac). De volta à aplicação, veremos o fundo branco, que indica a navegação vazia.

De volta a "App.js", vamos começar a escrever código. A linha import logo from './logo.svg'; deve ser deletada, porque estava relacionada ao logo que não existe mais na aplicação:

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Já que não estamos mais usando a imagem logo.svg, vamos deletá-la do nosso projeto. Na estrutura de arquivos na lateral esquerda da IDE, vamos selecioná-la, pressionar "Delete" e confirmar s remoção.

Obs: Componentes React são funções que retornam HTMLs. Os imports existem para "puxar" informações de outros arquivos.

A primeira linha do código, import './App.css'; faz a importação do arquivo "App.css". Essa linha é responsável por inserir a estilo à aplicação.

Vamos deletar os className do código. O código vai ficar assim:

import './App.css';

function App() {
  return (
    <div>
      <header>

      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Na documentação do treinamento, você encontrará as imagens que utilizaremos agora para criar o header da aplicação. Vamos clicar sobre a pasta "src" com o botão direito do mouse e criar uma nova pasta, chamada "imagens".

Vamos selecionar as imagens e adicioná-las a essa pasta. As usaremos durante todo o nosso processo de desenvolvimento.

Vamos adicionar classes aos componentes, para que possamos executar CSS. Faremos isso adicionando className="" às tags <div>, que se chamará App, e <header>, que se chamará App-header:

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>

      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Agora vamos começar a criar o conteúdo do header, que consistirá em um logo e em algumas opções. Primeiro, criaremos uma <div>, com a classe logo:

import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div className='logo'>

        </div>
      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Depois, vamos inserir o logo. Faremos isso adicionando import logo from './imagens/logo.svg', logo abaixo de import '/App.css';. Abaixo de <div className='logo'>, vamos inserir <img src={logo}></img>, com um alt (texto alternativo). Isso fará com que o SRC seja igual à logo:

import './App.css';
import logo from './imagens/logo.svg';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div className='logo'>
          <img src={logo} alt='logo'></img>
        </div>
      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Vamos abrir uma tag <p> logo abaixo de <img> e escrever "Alura Books":

import './App.css';
import logo from './imagens/logo.svg';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div className='logo'>
          <img src={logo} alt='logo'></img>
          <p>Alura Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Vamos apertar "Ctrl + S" para salvar a aplicação. Fazendo a atualização do navegador, encontraremos a logo do nosso site, um triângulo laranja, e "Alura Books", o nome do site, logo abaixo, ainda sem estilização.

Vamos adicionar a tag <strong> dentro da tag <p>. Isso deixará o texto em negrito. Vamos adicionar, dentro delas, "Alura":

import './App.css';
import logo from './imagens/logo.svg';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div className='logo'>
          <img src={logo} alt='logo'></img>
          <p><strong>Alura</strong>Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Quando salvarmos e voltarmos à aplicação, veremos que "Alura" agora está em negrito.

Vamos acessar "App.css", para estilizar a logo. Queremos que ela fique disponível na horizonte. Vamos fazer isso inserindo .logo, abrindo chaves e passando display: flex:

.logo {
    display: flex;
}COPIAR CÓDIGO
Voltando ao navegador, teremos tido sucesso no nosso objetivo.

No próximo vídeo, vamos aprender a componentizar.


<br><br>

# Aula 02.04

E se quiséssemos inserir dois logos na página? Se estivéssemos trabalhando com HTML, precisaríamos copiar o conteúdo entre as chaves <div> que estão dentro do header.

Porém, isso deixaria nosso código maior. Por sorte, não precisamos fazer isso com React. Há uma maneira de tornar nosso código mais legível e reutilizável, evitando trechos duplicados. Basta usar componentes. Por exemplo, podemos definir que o seguinte trecho é um componente referente ao logotipo:

<div className='logo'>
    <img src={logo} alt='logo'></img>
    <p><strong>Alura</strong>Books</p>
</div>COPIAR CÓDIGO
A seguir, vamos aprender como criar componetes. Primeiramente, vamos criar uma pasta chamada "componentes", dentro da pasta "src".

Dentro de "src > componentes", criaremos uma pasta para cada componente. Como só estamos trabalhando com o logo, por enquanto, só criaremos a pasta "Logo" (com a letra L maiúscula). Dento dela, criaremos dois arquivos: "index.js" e "estilo.css".

Todo componente é uma função JavaScript que retorna um HTML. Então, no arquivo "index.js", vamos abrir uma função chamada "Logo", por enquanto sem parâmetros. O retorno deverá ser o conteúdo entre as chaves <div> que estão dentro do header do arquivo "App.js". Vamos recortar esse trecho de "App.js" e colá-lo em "index.js", que ficará assim:

function Logo () {
    return(
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}COPIAR CÓDIGO
Precisamos informar, agora, ao "App.js" que o novo código que acabamos de criar será utilizado. De volta a "App.js", vamos importar o componente Logo e indicar seu caminho. O código ficará assim, com mudanças na linha 2:

import './App.css';
import Logo from './componentes/Logo';

function App() {
  return (
    <div className="App">
      <header className='App-header'>

      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Após salvar essa alteração, tanto o console como a aplicação indicarão erro. Isso acontece porque também precisamos importar a imagem do logo no arquivo "index.js", na primeira linha:

import logo from '../../imagens/logo.svg'

function Logo () {
    return(
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}COPIAR CÓDIGO
Isso solucionará o erro. Agora vamos fazer o componente funcionar, inserindo-o dentro do header, como se fosse uma tag html, <Logo>:

import './App.css';
import Logo from './componentes/Logo'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
      </header>
    </div>
  );
}

export default App;COPIAR CÓDIGO
Porém, um novo erro acontecerá, porque não exportamos o componente! Em "index.js", vamos inserir export default Logo na última linha:

import logo from '../../imagens/logo.svg'

function Logo () {
    return(
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default LogoCOPIAR CÓDIGO
Depois que salvarmos com o "Ctrl + S", podemos acessar a aplicação. Lá, veremos que funcionou: o logo voltará a aparecer na tela.

Vamos acessar "App.css", selecionar seu código e clicar em "Ctrl + X". Vamos acessar "estilo.css" e colar o código do estilo do logo lá. Vamos acessar "index.js" e importar o arquivo de estilo na primeira linha:

import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo () {
    return(
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default LogoCOPIAR CÓDIGO
No próximo vídeo, vamos estilizar.


<br><br>

# Aula 02.08

Vamos adicionar novas informações ao nosso header. Serão opções de texto e ícones.

Para isso, voltaremos ao código. Abaixo de <Logo></Logo>, abriremos uma lista não ordenada, usando tags <ul>. Faremos isso porque criaremos três botões semelhantes, mas que nos redirecionarão a caminhos diversos.

Entre as tags <ul> e </ul>, abriremos <li> e <p>. Dentro disso, escreveremos "CATEGORIAS". Vamos copiar essa linha e colá-la, para que tenhamos três iguais. Alterando o nome das outras duas para "MINHA ESTANTE" e "FAVORITOS":

import './App.css';
import Logo from './componentes/Logo'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <ul>
          <li><p>CATEGORIAS</p></li>
          <li><p>MINHA ESTANTE</p></li>
          <li><p>FAVORITOS</p></li>
        </ul>
      </header>
    </div>
  );
}

export default AppCOPIAR CÓDIGO
Os novos elementos já serão exibidos na aplicação. Agora vamos estilizá-los, acessando "App.css". Lá vamos inserir li, sem o ponto, para que estejamos nos referindo a todos os elementos desse tipo.

Dentro disso, vamos passar list-style: none;, para remover o elemento visual que acompanhou as opções:

.App {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
}

.App-header {
  background-color: #FFF;
  display: flex;
}

li {
  list-style: none;
}COPIAR CÓDIGO
Agora vamos voltar a "App.js" e adicionar className='opcoes' à tag <ul>:

import './App.css';
import Logo from './componentes/Logo'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          <li><p>CATEGORIAS</p></li>
          <li><p>MINHA ESTANTE</p></li>
          <li><p>FAVORITOS</p></li>
        </ul>
      </header>
    </div>
  );
}

export default AppCOPIAR CÓDIGO
De volta a "App.css", acima de li {, criaremos .opcoes, com display: flex.

.App {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
}

.App-header {
  background-color: #FFF;
  display: flex;
}

.opcoes {
  display: flex;
}

li {
  list-style: none;
}COPIAR CÓDIGO
Agora, os elementos estarão dispostos horizontalmente. Vamos adicionar outras informações.

Vamos adicionar className='opcao' a cada uma das tags <li>:

import './App.css';
import Logo from './componentes/Logo'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          <li className='opcao'><p>CATEGORIAS</p></li>
          <li className='opcao'><p>MINHA ESTANTE</p></li>
          <li className='opcao'><p>FAVORITOS</p></li>
        </ul>
      </header>
    </div>
  );
}

export default AppCOPIAR CÓDIGO
Agora vamos modificar também "App.css", adicionando .opcao, com os estilos font-size, definido em 16px, display: flex, justify-content: center, align-items: center, text-align: center, height em 100%, padding: 0 5px, cursor: pointer e min-width, definido em 120px:

.App {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
}

.App-header {
  background-color: #FFF;
  display: flex;
}

.opcoes {
  display: flex;
}

.opcao {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
}

li {
  list-style: none;
}COPIAR CÓDIGO
Isso já melhorará bastante a aparência do nosso header. Agora vamos voltar ao arquivo "App.js".

Entre as linhas 10 e 12, notamos a repetição do mesmo elemento, com a mesma classe e o mesmo filho. Pode parecer pouco, e de fato é. Mas e se precisássemos de 10 elementos como esses? O código ficaria imenso e impraticável.

Vamos aprender a otimizar isso e escrever o código de maneira mais prática com o React. Logo após as importações, criaremos a constante textoOpcoes. Criaremos uma lista para guardar os textos: ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']:

import './App.css';
import Logo from './componentes/Logo'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

// código posterior omitidoCOPIAR CÓDIGO
Depois disso, poderemos remover todos os elementos representados pelas tags <li> No lugar deles, adicionaremos { textoOpcoes.map( (texto) => () ) }, que nos permitirá varrer as arrays e retornar uma nova array como resultado. Será preciso retornar um elemento HTML, <li className='opcao'><p>{texto}</p></li>:

import './App.css';
import Logo from './componentes/Logo'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Logo></Logo>
                <ul className='opcoes'>
                    { textoOpcoes.map ( (texto) => (
                        <li className='opcao'><p>{texto}</p></li>
                    ) ) }
                </ul>
      </header>
    </div>
  );
}

export default AppCOPIAR CÓDIGO
Depois de salvarmos, poderemos notar que, mesmo com a alteração do código, o cabeçalho continua igual. Nossas alterações funcionaram.

Agora vamos usar a mesma técnica para adicionar ícones aos elementos do header. Primeiro, vamos importar as imagens, abaixo da exportação do logo. As imagens se chamam "perfil" e "sacola":

import './App.css';
import Logo from './componentes/Logo'
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

// ...COPIAR CÓDIGO
Criaremos outra constante abaixo de textoOpcoes, chamada icones. Vamos colocar as imagens que acabamos de importar dentro da lista da constante, entre colchetes:

import './App.css';
import Logo from './componentes/Logo'
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]

// ...COPIAR CÓDIGO
Depois, criaremos outra lista, entre tags <ul> com a classe "icones". Dentro dela, vamos executar o .map novamente, com o parâmetro icone. A única diferença com relação ao processo anterior é o uso de tags <img> ao invés de <p>. É preciso usar src para passar o ícone:

import './App.css';
import Logo from './componentes/Logo'
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Logo></Logo>
                <ul className='opcoes'>
                    { textoOpcoes.map ( (texto) => (
                        <li className='opcao'><p>{texto}</p></li>
                    ) ) }
                </ul>

        <ul className='icones'>
            { icones.map( (icone) => (
              <li><img src={icone}></img></li>
            )) }
        </ul>
      </header>
    </div>
  );
}

export default AppCOPIAR CÓDIGO
Vamos salvar com "Ctrl + S". Atualizando a aplicação, veremos os ícones. Agora só precisaremos acessar "App.css", para colocá-los na horizontal.

Para isso, vamos adicionar uma classe à tag <li> dos ícones, chamada 'icone':

import './App.css';
import Logo from './componentes/Logo'
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Logo></Logo>
                <ul className='opcoes'>
                    { textoOpcoes.map ( (texto) => (
                        <li className='opcao'><p>{texto}</p></li>
                    ) ) }
                </ul>

        <ul className='icones'>
            { icones.map( (icone) => (
              <li className='icone'><img src={icone}></img></li>
            )) }
        </ul>
      </header>
    </div>
  );
}

export default AppCOPIAR CÓDIGO
Em App.css, acima de li {, vamos criar .icones. Nele, passaremos um display: flex e align-items: center:

/* Código anterior omitido */

.icones {
  display: flex;
  align-items: center;
}

li {
  list-style: none;
}COPIAR CÓDIGO
Criaremos, também, .icone {, com um margin-right de 40px e width de 25px:

/* ... */

.icones {
  display: flex;
  align-items: center;
}

.icone {
  margin-right: 40px;
  width: 25px;
}

li {
  list-style: none;
}COPIAR CÓDIGO
Agora, só precisamos centralizar os elementos do header. Faremos isso adicionando justify-content: center a .App-header {, no arquivo de estilização App.css:

.App {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
}

.App-header {
  background-color: #FFF;
  display: flex;
  justify-content: center;
}

.opcoes {
  display: flex;
}

.opcao {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
}

.icones {
  display: flex;
  align-items: center;
}

.icone {
  margin-right: 40px;
  width: 25px;
}

li {
  list-style: none;
}COPIAR CÓDIGO
Agora a aplicação estará bem melhor estilizada.

No próximo vídeo, vamos voltar a manipular componentes.


<br><br>

# Aula 02.10

Agora o layout do header está finalizado. Vamos olhar um pouco para nosso código.

Podemos deixá-lo mais enxuto. Ele está, atualmente, muito poluído. Vamos resolver isso com algo que aprendemos anteriormente: a componentização.

O primeiro componente que colocaremos em um ambiente separado é a lista de opções. Logo depois, faremos o mesmo com a lista de ícones.

Em Apps.js, vamos recortar todo o conteúdo desde a tag <ul className='opcoes'> até </ul>:

<ul className='opcoes'>
    { textoOpcoes.map ( (texto) => (
        <li className='opcao'><p>{texto}</p></li>
    ) ) }
</ul>COPIAR CÓDIGO
Em "src > componentes", criaremos uma pasta chamada "OpcoesHeader". Dentro dela, criaremos dois arquivos: "index.js" e "estilo.css".

Acessando "index.js", vamos criar a função "OpcoesHeader". O retorno dela será o componente que acabamos de recortar. O código ficará assim, com export default OpcoesHeader no final:

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            { textoOpcoes.map ( (texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ) ) }
        </ul>
    )
}

export default OpcoesHeaderCOPIAR CÓDIGO
Agora, estamos usando a constante textoOpcoes em index.js, então precisamos movê-la para esse arquivo. Em App.js, vamos recortar a linha em que declaramos textoOpcoes e colá-la no início de index.js:

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            { textoOpcoes.map ( (texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ) ) }
        </ul>
    )
}

export default OpcoesHeaderCOPIAR CÓDIGO
Se atualizarmos a página da aplicação no navegador, vamos reparar que a lista de opções sumiu, porque nós exportamos o componente, porém não o incluímos no arquivo App.js.

Portanto, vamos importar o novo componente no início do arquivo App.js e utilizá-lo após <Logo></Logo>, adicionando <OpcoesHeader></OpcoesHeader>. Após todas essas alterações, o arquivo App.js ficará assim:

import './App.css';
import Logo from './componentes/Logo'
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'
import OpcoesHeader from './componentes/OpcoesHeader'

const icones = [perfil, sacola]

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <ul className='icones'>
            { icones.map( (icone) => (
              <li className='icone'><img src={icone}></img></li>
            )) }
        </ul>
      </header>
    </div>
  );
}

export default AppCOPIAR CÓDIGO
Vamos salvar. De volta ao navegador, as opções do header voltaram a aparecer!

Repetiremos o processo para os ícones. Em "src > componentes", vamos criar a pasta "IconesHeader", com os arquivos "index.js" e "estilo.css" dentro dela.

Em index.js, criaremos a função IconesHeader() que retornará um componente. Abriremos o arquivo App.js e recortaremos desde a tag <ul className= 'icones'> até </ul>. Em seguida, colaremos esse bloco dentro da função IconesHeader():

function IconesHeader() {
    return (
        <ul className='icones'>
            { icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
            )) }
        </ul>
    )
}COPIAR CÓDIGO
Assim como fizemos com a constante textoOpcoes, vamos mover a constante icones do arquivo App.js para o início do arquivo index.js do componente IconesHeader:

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            { icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
            )) }
        </ul>
    )
}COPIAR CÓDIGO
Além disso, precisamos da importação das imagens no arquivo index.js. O caminho para importação será diferente do que usamos em App.js, porque precisaremos voltar algumas pastas.

Por fim, não podemos nos esquecer de exportar o componente.

Após todas essas modificações, o arquivo "IconesHeader > index.js" ficará com o seguinte código:

import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            { icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
            )) }
        </ul>
    )
}

export default IconesHeaderCOPIAR CÓDIGO
Agora, basta fazer a importação de IconesHeader no início do arquivo "App.js". Abaixo de <OpcoesHeader></OpcoesHeader>, vamos inserir <IconesHeader></IconesHeader>:

import './App.css';
import Logo from './componentes/Logo'
import OpcoesHeader from './componentes/OpcoesHeader'
import IconesHeader from './componentes/IconesHeader'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Logo></Logo>
                <OpcoesHeader></OpcoesHeader>
                <IconesHeader></IconesHeader>
            </header>
        </div>
  );
}

export default AppCOPIAR CÓDIGO
Agora estamos reaproveitando os componentes. O código está bem mais enxuto e a aplicação segue funcionando normalmente.

Agora vamos manipular os dois arquivos "estilo.css" que acabamos de criar. Vamos usá-los para diminuir o tamanho do código do arquivo "App.css".

Abrindo "App.css", vamos selecionar os códigos de .opcoes a .opcao e levá-los para "OpcoesHeader > estilo.css":

.opcoes {
    display: flex;
}

.opcao {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
}COPIAR CÓDIGO
Voltando a App.css, vamos recortar o código referente a .icones e .icone e levá-lo para "IconesHeader > estilo.css":

.icones {
    display: flex;
    align-items: center;
}

.icone {
margin-right: 40px;
width: 25px;
}COPIAR CÓDIGO
Com isso, separamos os arquivos CSS e otimizamos nossos códigos. O arquivo App.css ficou mais enxuto, apenas com a estilização geral da aplicação:

.App {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
}

.App-header {
  background-color: #FFF;
  display: flex;
  justify-content: center;
}

li {
  list-style: none;
}COPIAR CÓDIGO
Se atualizarmos o navegador, todos os elementos estarão fora do lugar, a estilização não está sendo aplicada corretamente. Precisamos importar os novos CSS nos arquivos.

Vamos acessar "OpcoesHeader > index.js" e, na primeira linha do código, importar o novo caminho:

import './estilo.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            { textoOpcoes.map ( (texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ) ) }
        </ul>
    )
}

export default OpcoesHeaderCOPIAR CÓDIGO
Repetiremos o processo em "IconesHeader > index.js":

import './estilo.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            { icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
            )) }
        </ul>
    )
}

export default IconesHeaderCOPIAR CÓDIGO
Agora, se atualizarmos o navegador, veremos que o header da aplicação continua funcionando normalmente.

Como os componentes <Logo>, <OpcoesHeader> e <IconesHeader>, do arquivo "App.js", não têm nada dentro deles, podemos remover as tags de fechamento e usar uma barra para representar seu fechamento, da seguinte forma:

// ...

<header className='App-header'>
    <Logo/>
    <OpcoesHeader/>
    <IconesHeader/>
</header>

//...COPIAR CÓDIGO
Fazendo isso, otimizamos o código e não alteramos nada na aplicação.

Todas as páginas da aplicação terão o mesmo header, então também podemos reaproveitá-lo, transformando-o em um componente. Assim, poderemos substituir todo o conteúdo de <header> até </header> por um componente <Header />.

Vamos repetir o mesmo que fizemos com todos os componentes. Em "src > componentes", criaremos a pasta "Header". Dentro dela, criaremos os arquivos "index.js" e "estilo.css".

Em "Header > index.js", criaremos a função Header() que retornará um componente. Em App.js, recortaremos de <header clasName='App-header'> até </header> e colaremos esse trecho na função Header(). Ao final do arquivo, vamos exportar o componente:

function Header() {
    return(
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default HeaderCOPIAR CÓDIGO
Vamos copiar, no arquivo "App.css", a parte do código referente a .App-header e levá-la para "Header > estilo.css". Eis o código:

.App-header {
        background-color: #FFF;
        display: flex;
        justify-content: center;
}COPIAR CÓDIGO
Em "Header > index.js", faremos a importação do estilo.css no início do arquivo:

import './estilo.css'

function Header() {
    return(
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default HeaderCOPIAR CÓDIGO
De volta a "App.js", vamos substituir as importações de Logo, OpcoesHeader e IconesHeader pela importação do componente Header. Além disso, incluiremos o componente <Header /> no nosso código:

import './App.css';
import Header from './componentes/Header'

function App() {
    return (
        <div className='App'>
      <Header />
    </div>
  );
}

export default AppCOPIAR CÓDIGO
Ao salvar e atualizar o navegador, teremos um erro. No arquivo "Header > index.js", precisamos importar Logo, OpcoesHeader e IconesHeader:

import './estilo.css'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'

// ...COPIAR CÓDIGO
Depois de salvar, tudo estará funcionando normalmente.

Na próxima aula, vamos instalar o pacote e conhecer melhor a ferramenta.


<br><br>

# Aula 03.02
Hoje, vamos aprender a usar o **Styled Components**, uma nova ferramenta que nos ajudará a criar componentes apenas com o JavaScript, sem utilizar arquivos CSS.

Vamos começar instalando a ferramenta. No Visual Studio Code, vamos clicar em "Terminal > Novo Terminal". Com o comando npm start, faremos nosso projeto rodar. Vamos apertar "Ctrl + C", para que a aplicação pare de rodar no navegador.

Vamos rodar, agora, o comando npm install styled-components ou npm install styled-components@5.3.10. Com isso, instalaremos o Styled Components.

De volta ao arquivo "App.js", vamos voltar a rodar nosso projeto com npm start. Acessando styled-components.com, você encontra a documentação completa da nova ferramenta.

No próximo vídeo, vamos começar a criar containers com a ajuda do Styled Components.

https://styled-components.com/

<br><br>

# Aula 03.03

Vamos aprender a usar o Styled Components. Com a ajuda dele, vamos criar containers.

Containers são responsáveis por encapsular conteúdos, guardando elementos dentro deles, como acontece nas tags <div> entre as linhas 6 e 8 do arquivo "App.js".

Agora vamos começar a criá-los usando Styled Components, e não mais CSS. Para dar início a esse processo, vamos acessar o arquivo "App.js" e importar a nova ferramenta, com import styled from 'styled-components':

import './App.css';
import Header from './componentes/Header'
import styled from 'styled-components'

// ...COPIAR CÓDIGO
Logo abaixo, vamos criar a constante AppContainer e igualá-la a styled.div. div representa o elemento que queremos criar. Ao lado, vamos inserir duas crases e, dentro delas, vamos inserir o CSS, que pode ser encontrado no arquivo "App.css":

import './App.css';
import Header from './componentes/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
  .App {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  }

  li {
    list-style: none;
  }
`

// ...COPIAR CÓDIGO
Agora, não precisamos mais criar classes. Podemos remover a linha .App:

import './App.css';
import Header from './componentes/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

    li {
        list-style: none;
    }
`COPIAR CÓDIGO
Obs: Por enquanto, o li permanecerá aí. No futuro, porém, vamos trocá-lo de lugar.

Abaixo, vamos substituir <div className='App'> por <AppContainer>. Agora poderemos usá-lo como um container:

import './App.css';
import Header from './componentes/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

    li {
        list-style: none;
    }
`

function App() {
    return (
        <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default AppCOPIAR CÓDIGO
Agora estamos usando o app estilizado com Styled Component. Ele é um container que guarda estilos.

Podemos apagar a primeira linha do código, import './App.css';. Também podemos nos livrar do arquivo "App.css". Vamos movê-lo para o lixo. Agora nosso projeto está ainda mais simplificado, usando apenas JavaScript.

Mudamos os caminhos, mas a estilização continua a mesma. Para confirmar, podemos conferir a aplicação no navegador.

O header também é um container. Para confirmar isso, podemos acessar "componentes > Header > index.js". Vamos recriá-lo, mas dessa vez usando Styled Component.

Em index.js, vamos fazer a importação do Styled Component e criar a constante HeaderContainer logo abaixo. Assim como fizemos em "App.js", vamos inserir duas crases e, dentro delas, trazer as informações de "estilo.css":

import './estilo.css'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

// ...COPIAR CÓDIGO
Assim, podemos excluir o arquivo "componentes > Header > estilo.css" e apagar a importação de estilo.css no componente. Também vamos substituir <header className='App-header'> por <HeaderContainer>:

import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default HeaderCOPIAR CÓDIGO
Agora não precisamos mais nos preocupar com arquivos CSS ou com classes. No próximo vídeo, continuaremos substituindo arquivos CSS por Styled Component.

<br><br>

# Aula 03.05
Vamos continuar usando Styled Component, agora para substituir os arquivos "estilo.css" remanescentes.

Daremos início a partir de "componentes > IconesHeader > index.js". Vamos começar importando o Styled Component com import styled from 'styled-components'. Depois, criaremos a constante Icone, igualando-a a styled.li. Entre as duas crases, vamos inserir o conteúdo que havia em "estilo.css":

import './estilo.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

// ...COPIAR CÓDIGO
Na função IconeHeader(), substituiremos <li className='icone'> por <Icone>:

// ... 

function IconesHeader() {
    return (
        <ul className='icones'>
            { icones.map( (icone) => (
            <Icone><img src={icone}></img></Icone>
            )) }
        </ul>
    )
}

export default IconesHeaderCOPIAR CÓDIGO
Agora, criaremos a constante Icones. Vamos igualá-la a styled.ul. Dentro das crases, vamos inserir o conteúdo de "componentes > IconesHeader > estilo.css". Na função IconesHeader(), substituiremos <ul className='icones'> por <Icones>:

import './estilo.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) => (
            <Icone><img src={icone}></img></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeaderCOPIAR CÓDIGO
Podemos remover a importação de "estilo.css" e deletar o arquivo "estilo.css" da pasta "IconesHeader". Vamos salvar o código. Podemos conferir a aplicação no navegador: mesmo com as alterações no código, que o deixaram mais resumido, tudo continua a funcionar normalmente.

Agora vamos manipular o arquivo "componentes > Logo > index.js".' Faremos a mesma coisa. Primeiramente, importaremos o styled-components.

Depois, criaremos a constante LogoContainer e vamos igualá-la a styled.div. Dentro das crases, passaremos as informações de "componentes > Logo > estilo.css" referente ao logo. Na função Logo(), vamos substituir <div className='logo-container'> por <LogoContainer>:

import './estilo.css'
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

function Logo () {
    return(
        <LogoContainer>
            <img
                src={logo}
                alt='logo'
                className='logo-img'
            ></img>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default LogoCOPIAR CÓDIGO
Faremos a mesma coisa com a imagem do logotipo. Criaremos a contante LogoImage, com styled.img, passando as estilizações referentes à imagem. Na função Logo(), vamos substituir img por LogoImage, mantendo o src e o alt:

import './estilo.css'
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo () {
    return(
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo'
            ></LogoImage>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default LogoCOPIAR CÓDIGO
Agora podemos remover a importação e deletar o arquivo "componentes > Logo > estilo.css". Além disso, como não há elementos filhos em <LogoImage>, podemos remover a tag de fechamento e usar a barra:

import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo () {
    return(
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo'
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default LogoCOPIAR CÓDIGO
A aplicação continuará funcionando normalmente. Agora resta "componentes > OpcoesHeader > index.js". Vamos repetir o processo:

import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map ( (texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeaderCOPIAR CÓDIGO
Agora podemos deletar o arquivo "componentes > OpcoesHeader > estilo.css".

No próximo vídeo, vamos aprender sobre Global Style.

<br><br>

# Aula 03.06

Vamos clicar no botão "Recolher Pastas no Explorador", que fica ao lado do nome da pasta "ALURA BOOKS", no menu lateral esquerdo. Isso minimiza as pastas, facilitando a visualização.

Vamos fechar, também, todas as abas abertas. Vamos falar sobre Global Style, que são estilos específicos padronizados para toda a aplicação, como fonte e reset de CSS, por exemplo.

Para começar, vamos acessar "src > index.js". Nesse arquivo, o React usa root para exibir e manipular os elementos da tela. É aí que vamos inserir o Global Style.

Agora vamos acessar "src > index.css". Esse arquivo funciona, basicamente, como um CSS padrão. De volta a "src > index.js", vamos importar o Global Style, com { createGlobalStyle } from 'styled-components':

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'

// ...COPIAR CÓDIGO
Logo abaixo, vamos criar a constante GlobalStyle, igualando-a a createGlobalStyle. Dentro das crases, passaremos o conteúdo do arquivo "src > index.css":

import React, { createFactory } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }
`COPIAR CÓDIGO
Obs: Dessa vez, não removemos body e code porque eles se referem a elementos, não a classes.

Vamos levar, também, o conteúdo de li {, no arquivo "App.js", para "src > index.js":

import React, { createFactory } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }

    li {
      list-style: none;
    }
`

// ...COPIAR CÓDIGO
Com isso, não teremos ícones de decoração nos itens de nenhuma lista. Vamos apagar a importação de "index.css".

Abaixo de <React.StrictMode>, vamos inserir <GlobalStyle />:

// ...

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// ...COPIAR CÓDIGO
De volta à aplicação, tudo está funcionando. Podemos deletar "src > index.css". Agora, nosso código não tem mais arquivos CSS.

No próximo vídeo, vamos criar componentes de search.


<br><br>

# Aula 04.02

Nessa aula vamos focar em conceitos clássicos do React. Vamos lidar com Estado.

Quando lidamos com React, a tela exibe dados mutáveis. Para lidar com isso, precisamos lidar com a ferramenta do React conhecida como Estado.

Vamos usá-lo para criar um componente de pesquisa funcional, para que os usuários consigam buscar livros na nossa aplicação. Vamos voltar ao código.

Para isso, precisaremos criar a seção Pesquisa no código do arquivo "App.js". Dentro da função App(), logo abaixo de <Header />, criaremos <Pesquisa />:

// ...

function App() {
    return (
        <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default AppCOPIAR CÓDIGO
Para que funcione, precisamos importar o componente, porém ele ainda não foi criado. Vamos criar uma pasta para ele chamada "Pesquisa", dentro de "src > componentes". Dentro dela, criaremos o arquivo "index.js". Vamos acessar esse arquivo e começar a codar o componente.

Vamos criar a função Pesquisa(), sem parâmetro algum por enquanto. Seu retorno será o componente. Dentro dos parênteses, vamos escrever "Já sabe por onde começar?" entre chaves <h2>:

function Pesquisa() {
    return (
        <h2>Já sabe por onde começar?</h2>
    )
}COPIAR CÓDIGO
Abaixo do <h2>, entre tags <h3>, vamos digitar "Encontre seu livro em nossa estante:

function Pesquisa() {
    return (
        <h2>Já sabe por onde começar?</h2>
        <h3>Encontre seu livro em nossa estante.</h3>
    )
}COPIAR CÓDIGO
Vamos englobar essas tags entre chaves <section>, que representam seções:

function Pesquisa() {
    return (
        <section>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
        </section>
    )
}COPIAR CÓDIGO
Acrescentaremos uma tag <input /> também, onde o usuários digitará o nome do livro. Dentro dela, vamos inserir o parâmetro placeholder, passando "Escreva sua próxima leitura":

function Pesquisa() {
    return (
        <section>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <input
                placeholder="Escreva sua próxima leitura"
            />
        </section>
    )
}COPIAR CÓDIGO
Ao finao do arquivo, vamos inserir o export default com o nome da função, para que possamos utilizar o componente em outros lugares do código:

function Pesquisa() {
    return (
        <section>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <input
                placeholder="Escreva sua próxima leitura"
            />
        </section>
    )
}

export default PesquisaCOPIAR CÓDIGO
De volta a "App.js", vamos importar Pesquisa, com import Pesquisa from './componentes/Pesquisa'. Vamos salvar:

import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import styled from 'styled-components'

// ...COPIAR CÓDIGO
Se voltarmos a aplicação, veremos o título, a mensagem e o input com o placeholder.

Vamos deixar o input de pesquisa mais bonito e torná-lo um componente independente e reutilizável, que possa ser usado em outros lugares do código.

Vamos criar uma nova pasta dentro de "componentes", chamada "Input". Dentro dela, criaremos o arquivo "index.js". Em componentes simples como esse, podemos criar diretamente um Styled Components.

Faremos isso importando o Styled Components, na primeira linha der "componentes > Input > index.js", com import styled from "styled-components".

Abaixo, criaremos a constante Input em que definiremos o estilo e, ao final do arquivo, vamos inserir o export default:

import styled from 'styled-components'

const Input = styled.input`

`

export default InputCOPIAR CÓDIGO
Como o foco do curso não é CSS, vamos inserir uma estilização pronta. O código de index.js do componente Input ficará assim:

import styled from "styled-components"

const Input = styled.input`
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

export default InputCOPIAR CÓDIGO
Vamos salvar. Depois, voltaremos para o arquivo "componentes > Pesquisa > index.js" e, lá, importaremos Input. Substituiremos, também, <input por <Input:

import Input from '../Input'

function Pesquisa() {
    return (
        <section>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <Input
                placeholder="Escreva sua próxima leitura"
            />
        </section>
    )
}

export default PesquisaCOPIAR CÓDIGO
Se voltarmos ao navegador, veremos a mudança no input de busca. Vamos modificar outros elementos, para que também fiquem agradáveis visualmente.

Dentro da função Pesquisa(), substituiremos <section> por <PesquisaContainer>. Substituiremos, também, <h2> por <Titulo> e <h3> por <Subtitulo>:

import Input from '../Input'

function Pesquisa() {
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura" />
        </PesquisaContainer>
    )
}

export default PesquisaCOPIAR CÓDIGO
Depois, importaremos o Styled Components e criaremos a constante PesquisaContainer, igualando-a a styled.section. Abaixo, criaremos a constante Titulo, igualando-a a styled.h2. Também criaremos a constante Subtitulo, igualada a styled.h3:

import Input from '../Input'
import styled from 'styled-components'

const PesquisaContainer = styled.section`

`

const Titulo = styled.h2`

`

const Subtitulo = styled.h3`

`

// ...COPIAR CÓDIGO
A seguir, vamos incluir a estilização nessas constantes:

import Input from '../Input'
import styled from 'styled-components'

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

// ...COPIAR CÓDIGO
Agora podemos salvar. A interface da aplicação está mais bonita.

No próximo vídeo, finalmente, vamos manipular os estados, para que as buscas sejam realmente processadas pela aplicação.


<br><br>

# Aula 04.06
Agora vamos colocar os livros, que já acessamos com a ajuda do filtro, na tela.

Vamos rever o conceito do .map, que aprendemos no início do curso. Antes de tudo, em "componentes > Pesquisa > index.js", vamos remover o console.log.

Imediatamente acima da tag de fechamento de PesquisaContainer, vamos inserir livrosPesquisados.map(), entre chaves. Como parâmetro, informaremos uma arrow function:

// ...

function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (

            )) }
        </PesquisaContainer>
    )
}

export default PesquisaCOPIAR CÓDIGO
Dentro dos parênteses, abriremos tags <p>. Dentro delas, passaremos o valor livro.nome. Também vamos abrir uma tag <img> cuja propriedade src será igual a livro.src, entre chaves. Assim retornaremos o nome do livro e sua imagem. Vamos colocar tudo isso entre tags <div>:

// ...

function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (
                <div>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
                </div>
            ) ) }
        </PesquisaContainer>
    )
}

export default PesquisaCOPIAR CÓDIGO
Vamos salvar. De volta à aplicação, se buscarmos por "Lid" novamente, como fizemos no último vídeo, teremos como resultado o nome do livro e sua imagem abaixo da barra de pesquisa. A mesma coisa acontecerá se buscarmos por qualquer um dos livros da nossa lista.

Agora, vamos estilizar a barra de pesquisa. Em lugar de <div>, colocaremos a tag <Resultado>. Criaremos a constante Resultado para definir as estilizações. Por fim, vamos inverter a ordem das tags <p> e <img>, só por uma questão estética. O arquivo completo ficará assim:

import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
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

function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (
                <Resultado>
                    <img src={livro.src}/>
                    <p>{livro.nome}</p>
                </Resultado>
            )) }
        </PesquisaContainer>
    )
}

export default PesquisaCOPIAR CÓDIGO
Na próxima aula, aprenderemos sobre props.


<br><br>

# Aula 05.02



<br><br>

# Aula 02.03