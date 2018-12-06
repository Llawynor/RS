import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBOJz0OMRSF8IQJziXQQLgjMUyAuYd1Lfg",
    authDomain: "minhars-f2278.firebaseapp.com",
    databaseURL: "https://minhars-f2278.firebaseio.com",
    projectId: "minhars-f2278",
    storageBucket: "",
    messagingSenderId: "746216725713"
};
firebase.initializeApp(config);

export class MeuFirebase {

    constructor () {

        this.user = null;

        this.implementacaoFB = firebase;
        this.database = this.implementacaoFB.database();
        this.autenticacao = this.implementacaoFB.auth();
    }

    criarUsuario ( nome, email, senha, senha2 ) {
        if( senha !== senha2 ) {
            alert( "As senhas digitas não coincidem!" )
        }
        else {
            this.autenticacao.createUserWithEmailAndPassword(email, senha).then(function(error) {
                console.log("Erro ao criar conta: " + error + "\nUsername: " + error.user.displayName);
                return false;
            });
            if(this.entrar(email, senha)) {
                let user = this.autenticacao.currentUser;
                if(user) {
                    user.updateProfile({
                        displayName : nome
                    });
                }
            }
            this.sair();
            alert("Conta criada com sucesso!");
            return true;
        }
        
    }

    entrar ( email, senha ) {
        this.autenticacao.signInWithEmailAndPassword(email, senha).then(function(error) {
            return false;
        });
        return true;
    }

    sair () {
        firebase.auth().signOut().then(function() {
            return true;
        }).catch(function(error) {
            return false;
        });
    }

}