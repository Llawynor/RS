import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MeuSocket } from './../js/meuSocket';
import './../css/App.css';
import { MeuFirebase } from './../js/meuFirebase';
import { FragmentoEntrar } from './../fragmentos/frag_login';
import { FragmentoCadastrar } from './../fragmentos/frag_cad';
import { FragmentoTL } from './../fragmentos/frag_timeline';

class App extends Component {

  constructor () {
    super();

    this.meuFirebase = new MeuFirebase();
    this.meuSocket = new MeuSocket();

    this.state = {
      username : ''
    };

    this.setState({ username : this.meuFirebase.autenticacao.onAuthStateChanged(function(user){
      if(user) {
        console.log(user.displayName);
        return user.displayName;
      }
      else {
        return '';
      }
    })});

    this.rsTitle = "RedeSocial";
    this.abasNavAut = [
      "Entrar",
      "Cadastrar"
    ];

    this.abasNavTL = [
      "Home",
      "Amigos",
      "Conversas",
      "Configurações",
      "Sair"
    ]
  }

  iniciar () {
    setTimeout(() => {
      this.sair();
      this.gerarFragmento(0);
      this.carregarNavAuth();
    }, 1000);
  }

  carregarNavAuth () {
    this.ulMenuAut = document.getElementById('ulMenuAut')

    for(let i = 0; i < this.abasNavAut.length; i++) {
      let navAutItem = document.createElement('li');
      navAutItem.className = "navAutItem";
      navAutItem.innerText = this.abasNavAut[i];
      if(this.abasNavAut[i] === "Entrar") {
        navAutItem.addEventListener('click', this.eventoEntrar);
      }
      else if(this.abasNavAut[i] === "Cadastrar") {
        navAutItem.addEventListener('click', this.eventoCadastrar);
      }
      
      this.ulMenuAut.appendChild(navAutItem);
    }
  }

  carregarNavTL () {
    this.ulMenuTL = document.getElementById('ulMenuTL');

    for(let i = 0; i < this.abasNavTL.length; i++) {
      let navTLItem = document.createElement('li');
      navTLItem.className = 'navTLItem';
      navTLItem.innerText = this.abasNavTL[i];
      if(this.abasNavTL[i] === "Home") {
        navTLItem.addEventListener('click', this.eventoHome);
      }
      else if(this.abasNavTL[i] === "Amigos") {
        navTLItem.addEventListener('click', this.eventoAmigos);
      }
      else if(this.abasNavTL[i] === "Conversas") {
        navTLItem.addEventListener('click', this.eventoConversas);
      }
      else if(this.abasNavTL[i] === "Configurações") {
        navTLItem.addEventListener('click', this.eventoConfiguracoes);
      }
      else if(this.abasNavTL[i] === "Sair") {
        navTLItem.addEventListener('click', this.eventoSair);
      }

      this.ulMenuTL.appendChild(navTLItem);
    }
  }

  eventoEntrar = event => {
    this.gerarFragmento(0);
  }

  eventoCadastrar = event => {
    this.gerarFragmento(1);
  }

  eventoHome = event => {
    this.gerarFragmento(2);
  }

  eventoAmigos = event => {
    this.gerarFragmento(3);
  }

  eventoConversas = event => {
    this.gerarFragmento(4);
  }

  eventoConfiguracoes = event => {
    this.gerarFragmento(5);
  }

  eventoSair = event => {
    this.sair();
  }

  entrar (email, senha) {
    if(this.meuFirebase.entrar(email.value, senha.value)) {
      alert("Entrou!");
      document.getElementById('navMenuAut').className = 'hidden';
      this.carregarNavTL();
      document.getElementById('navMenuTL').className = '';
      this.gerarFragmento(2);
    }
    else {
      alert("Ocorreu um erro ao entrar, tente novamente!");
    }
  }

  sair () {
    this.meuFirebase.sair();
    document.getElementById('navMenuAut').className = '';
    document.getElementById('navMenuTL').className = 'hidden';
    this.gerarFragmento(0);
  }

  cadastrar (nome, email, senha, senha2) {
    if(this.meuFirebase.criarUsuario(nome.value, email.value, senha.value, senha2.value)) {
      nome.value = '';
      email.value = '';
      senha.value = '';
      senha2.value = '';
    }

    
  }

  gerarFragmento(tipo) {
    if(tipo === 0) {
      ReactDOM.render(<FragmentoEntrar onClick={ () => { this.entrar(document.getElementById('emailEntrar'), document.getElementById('senhaEntrar')); } } />, document.getElementById('controladorDeFragmentos'));
    }
    else if(tipo === 1) {
      ReactDOM.render(<FragmentoCadastrar onClick={ () => { this.cadastrar(document.getElementById('nomeCad'), document.getElementById('emailCad'), document.getElementById('senhaCad'), document.getElementById('senhaCad2')); } } />, document.getElementById('controladorDeFragmentos'));
    }
    else if(tipo === 2) {
      ReactDOM.render(<FragmentoTL username={ this.state.username } />, document.getElementById('controladorDeFragmentos'));
    }
    else if(tipo === 3) {
      ReactDOM.render();
    }
    else if(tipo === 4) {
      ReactDOM.render();
    }
    else if(tipo === 5) {
      ReactDOM.render();
    }
  }

  render() {
    return (
      <div className="App">
        <header id="header">
          <h1 id="rsTitle">{ this.rsTitle }</h1>
          <nav id="navMenuAut">
            <ul id="ulMenuAut"></ul>
          </nav>
          <nav id="navMenuTL" className="hidden">
            <ul id="ulMenuTL"></ul>
          </nav>
        </header>
        <div id="meio">
          <div id="controladorDeFragmentos"></div>
        </div>
        <footer id="rodape">
          <p>&copy;</p>
        </footer>
        { this.iniciar() }
      </div>
    );
  }
}

export default App;
