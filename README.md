# Movie Flix

## Aplicação front-Web desenvolvida em React js utilizando a ferramenta Vite e o template TypeScript.

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

## Índice
<!--ts-->
* [Sobre o projeto](#Sobre)
* [Funcionalidades](#Funcionalidades)
* [Layout das telas](#Layout)
* [Tecnologias utilizadas](#Tecnologias)
* [Acesso ao projeto](#Acesso_ao_projeto)
* [Pré-requisitos](#Pre-requisitos)
* [Instruções para download e execução do projeto](#Instruções)
* [Autor](#Autor)
<!--te-->
<br>

## Sobre o projeto
Este projeto foi desenvolvido como desafio de código no Bootcamp React da DevSuperior.<br>
A aplicação frontend em questão é uma UI para busca de filmes e avaliação dos mesmos. A API consumida neste projeto foi disponibilizada pela DevSuperior no Heroku, mas também tive a oportunidade de desenvolve-la como desafio de código durante o Bootcamp Spring. <br> 
<br>

<a id="Funcionalidades"></a>
## 🔨 Funcionalidades
- Tela de Login com autenticação via Oauth2 e Autorização utilizando JWT;
- Tela de catalogo de filmes com filtro por gênero e paginação;
- Tela de detalhes do fime com campo de avaliação do filme com renderização e autorização condicioanais por perfil;
- Responsividade para dispositivos mobile e desktops.
- Toasts de notificação
<br>
<a id="Layout"></a>
## 💻 Layout da aplicação

### ✅ Tela Inicial
![](https://raw.githubusercontent.com/Melquisedeque-Marins/Bootcamp-react-devsuperior-task03/main/gh-assets/Login.png)

### ✅ Tela de listagem de filmes
![](https://raw.githubusercontent.com/Melquisedeque-Marins/Bootcamp-react-devsuperior-task03/main/gh-assets/Catalog.png)

### ✅ Tela de detalhes e avaliação
![](https://raw.githubusercontent.com/Melquisedeque-Marins/Bootcamp-react-devsuperior-task03/main/gh-assets/Reviews.png)
<br>
<br>

<a id="Tecnologias"></a>
## 🛠️️ Tecnologias e linguagens utilizadas

- React JS 18.8.0
- Vite (template Typesript)
- TypeScript
- HTML 5
- CSS 3
- React hooks (useEstate, useEffect, useForm, useCallback)
- Axios
- Bibliotecas (Bootstrap, qs, JWTDecode, React-paginate )
- VS Code IDE
- Docker
- Git
<br>
<br>
<a id="Acesso_ao_projeto"></a>
## 📁 Acesso ao projeto

Você pode acessar o código fonte do projeto clicando [aqui](https://github.com/Melquisedeque-Marins/Bootcamp-react-devsuperior-task03/tree/main/src).

<a id="Pre-requisitos"></a>
## ✔ Pré-requisitos para utilização

✔️ Node V^14.20.1

✔️ Acesso à internet

✔️ Docker *

*Só é necessário caso queira gerar um container da aplicação por meio da imagem.
<br>
<br>


<a id="Instruções"></a>
## 🎲️ Instruções para download e execução do projeto

- Abra o terminal e navegue até o diretório onde deseja salvar o projeto
  ``$ cd /"caminho do diretório"``.
- Faça o clone o repósitório
  ``$ git clone https://github.com/Melquisedeque-Marins/Bootcamp-react-devsuperior-task03.git``
- Acesse a pasta do projeto terminal/cmd
  ``$ cd /Bootcamp-react-devsuperior-task03``. 
- Execute os seguintes comandos caso use o npm
- Para instalar as dependencias
  ``$ npm install``.
- Para iniciar a aplicação
  ``$ npm run dev``.

- Execute os seguintes comandos caso use o yarn
- Para instalar as dependencias
  ``$ yarn`` ou ``$ yarn install``.
- Para iniciar a aplicação
  ``$ yarn dev``.

- Para ambas as situações a aplicação será iniciado na porta:
  ``3000``
  do seu computador.
<br>
<br>
## 🐳 Execução do projeto com docker-compose 

- Abra o terminal e navegue até o diretório onde deseja salvar o projeto
  ``$ cd /"caminho do diretório"``.
- Faça o clone o repósitório
  ``$ git clone https://github.com/Melquisedeque-Marins/Bootcamp-react-devsuperior-task03.git``
- Acesse a pasta do projeto terminal/cmd
  ``$ cd /Bootcamp-react-devsuperior-task03``. 
- Utilize o seguinte comando do docker
  ``$ docker compose up``. 
- A aplicação será iniciado na porta:
  ``3000``
  do seu computador.
<br>
<br>
## 🐳 Execução do projeto com imagem docker

- Acesse o terminal/cmd e digite
  ``$ docker run -p 3000:3000 --name nome-do-container melquisedequejr/movie ``. 
- A aplicação será iniciado na porta:
  ``3000``
  do seu computador.
- Detalhes do comando utilizado
  ``-p (3000:3000)`` a flag -p refere-se a porta disponibilizada pelo container, o numero antes do ":" é a porta da máquina local e o depois refere-se a porta da máquina do container. 
  ``--name (nome do container)`` a flag --name refere-se ao nome do container criado a partir da imagem. Este é opicional. 

- ``melquisedequejr/movie`` É o nome da imagem criada a partir do projeto e está hospedada no meu <a href="https://hub.docker.com/u/melquisedequejr">DockerHub</a>.
 
<a id="Autor"></a>
## Autor
<a href="https://github.com/Melquisedeque-Marins">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/93653645?v=4" width="120px;" alt=""/>
<br />
 <sub><b>Melquisedeque Marins Junior</b></sub></a> <a href="https://www.linkedin.com/in/melquisedeque-marins-junior-324291230"></a>
 <br>
 <br>

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/melquisedeque-marins-junior-324291230)
