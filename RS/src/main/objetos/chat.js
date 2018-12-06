import React from 'react'
import { Input } from './input';
import { Botao } from './botao';

class Chat extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username : props.username,
            message : '',
            messages : []
        };

        this.enviarMensagem = event => {
            this.socket.emit('SEND_MESSAGE', {
                author : this.state.username,
                message : this.state.message
            });
            this.setState({ message : '' });
        }
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>
                                <div className="footer">
                                    <Input placeholder="Insira sua mensagem aqui!" tipo="text" value="" onChange={ev => this.setState({username: ev.target.value})} />
                                    <Botao divBotaoId="botaoEnviarMensagem" idBotao="enviarMensagem" textoBotao="Enviar" onClick={ this.enviarMensagem } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
