export class MeuSocket {
    constructor () {
        this.socket = require('socket.io-client')('http://localhost:3000');

        this.state = {
            username : '',
            message : ''
        }

        
    }

    
}