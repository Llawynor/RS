export class MeuSocket {
    constructor () {
        this.socket = require('socket.io-client')('http://localhost:3000');
    }

    enviarMensagem(autor, mensagem) {
        this.socket.emit('SEND_MESSAGE', {
            author : autor,
            message : mensagem
        });
        return true;
    }
}