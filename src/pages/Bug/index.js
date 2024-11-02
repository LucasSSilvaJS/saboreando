import { useState } from "react";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import InputText from "../../components/InputText";
import TextArea from "../../components/TextArea";
import './bug.css'
import { postForm } from "../../services/crud";
import { toast } from "react-toastify";

function Bug() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [bug, setBug] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function submeter(e) {
        e.preventDefault();
        if(nome === '' && email === '' && mensagem === '' && bug === ''){
            toast.warn('Preencha todos os campos');
            return;
        }
        await postForm('bug', {nome,mensagem,email,bug});
        toast.success('Bug enviado com sucesso!!')
    }

    return ( 
        <div className="default-container container-bg">
            <Header ableCap={false} navigation={true} text='Reportar Bug' to='/suporte'/>
            <main className="container">
                <p className="text-tip">Encontrou algum erro ou bug? ajude a gente melhorar sua experiência no nosso aplicativo!</p>
                <InputField label='Nome'>
                    <InputText placeholder='Digite seu nome' value={nome} action={e => setNome(e.target.value)}/>
                </InputField>

                <InputField label='E-mail'>
                    <InputText placeholder='Digite seu e-mail' value={email} action={e => setEmail(e.target.value)}/>
                </InputField>

                <InputField label='Qual o problema?'>
                    <InputText placeholder='Digite o problema' value={bug} action={e => setBug(e.target.value)}/>
                </InputField>

                <InputField label='Mensagem'>
                    <TextArea placeholder='Digite sua mensagem' value={mensagem} action={e => setMensagem(e.target.value)}/>
                </InputField>

                <div style={{'padding' : '40px 0'}}>
                    <button className="button" onClick={(e) => submeter(e)}>Enviar</button>
                </div>
            </main>
        </div>
     );
}

export default Bug;