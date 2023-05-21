
# projeto-react-alura
https://cursos.alura.com.br/formacao-full-stack-react-node-js

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

# Aula 01.07