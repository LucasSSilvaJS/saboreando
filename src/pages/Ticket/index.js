import { useState } from "react";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import InputText from "../../components/InputText";
import TextArea from "../../components/TextArea";

import {postForm} from '../../services/crud';
import { toast } from "react-toastify";

function Ticket() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function submeter(e) {
        e.preventDefault();
        if(nome === '' && email === '' && mensagem === ''){
            toast.warn('Preencha todos os campos');
            return;
        }
        await postForm('ticket', {nome,mensagem,email});
        toast.success('Ticket enviado com sucesso!!');
    }

    return ( 
        <div className="default-container container-bg">
            <Header ableCap={false} navigation={true} text='Ticket' to='/suporte'/>
            <main className="container">
                <p className="text-tip">Está com alguma dúvida ou quer dar um feedback? nos envie um ticket!</p>
                <InputField label='Nome'>
                    <InputText placeholder='Digite seu nome' value={nome} action={(e) => setNome(e.target.value)}/>
                </InputField>

                <InputField label='E-mail'>
                    <InputText placeholder='Digite seu e-mail' value={email} action={(e) => setEmail(e.target.value)}/>
                </InputField>

                <InputField label='Mensagem'>
                    <TextArea placeholder='Digite sua mensagem' value={mensagem} action={(e) => setMensagem(e.target.value)}/>
                </InputField>

                <div style={{'padding' : '40px 0'}}>
                    <button className="button" onClick={(e) => submeter(e)}>Enviar</button>
                </div>

            </main>
        </div>
     );
}

export default Ticket;