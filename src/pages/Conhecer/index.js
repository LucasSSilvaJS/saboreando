import { Link } from 'react-router-dom';
import './conhecer.css';
import { FaCaretLeft } from 'react-icons/fa';
import logo from '../../assets/img/logo.svg';
import InputField from '../../components/InputField'
import InputText from '../../components/InputText'
import { useState } from 'react';

import {postForm} from '../../services/crud'

function Conhecer() {

    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [CEP, setCEP] = useState('');

    async function submeter(e) {
        e.preventDefault();
        if(email === '' && telefone === '' && nome === ''){
            alert('Esses campos são obrigatórios')
            return;
        }
        await postForm('conhecer', {email,telefone,nome,genero,pais,estado,cidade,bairro,CEP});
        alert('Formulário enviado com sucesso!!')
    }

    return ( 
        <div className="default-container container-invite">
            <div className="overlay">
                <header className='invite-header'>
                    <Link to='/home'>
                        <FaCaretLeft size={20} color='#fff'/>
                    </Link>
                </header>

                <img className='invite-logo' src={logo} alt="logo Sabor&ando" />

                <main className='container' style={{'padding': '0px 4%'}}>
                    <form>
                        <div  className='invite-form-wrapper'>

                            <h2>Adorariamos saber mais sobre você!</h2>
                            <InputField label='E-mail*'>
                                <InputText placeholder="Digite seu e-mail" value={email} action={e => setEmail(e.target.value)}/>
                            </InputField>
                            <InputField label='Telefone*'>
                                <InputText placeholder="Digite seu telefone" value={telefone} action={e => setTelefone(e.target.value)}/>
                            </InputField>
                            <InputField label='Nome*'>
                                <InputText placeholder="Digite seu nome" value={nome} action={e => setNome(e.target.value)}/>
                            </InputField>
                            <InputField label='Gênero'>
                                <InputText required={false} placeholder="Digite seu gênero" value={genero} action={e => setGenero(e.target.value)}/>
                            </InputField>
                            <InputField label='País'>
                                <InputText required={false} placeholder="Digite seu País" value={pais} action={e => setPais(e.target.value)}/>
                            </InputField>
                            <InputField label='Estado'>
                                <InputText required={false} placeholder="Digite seu Estado" value={estado} action={e => setEstado(e.target.value)}/>
                            </InputField>
                            <InputField label='Cidade'>
                                <InputText required={false} placeholder="Digite sua cidade" value={cidade} action={e => setCidade(e.target.value)}/>
                            </InputField>
                            <InputField label='Bairro'>
                                <InputText required={false} placeholder="Digite seu bairro" value={bairro} action={e => setBairro(e.target.value)}/>
                            </InputField>
                            <InputField label='CEP'>
                                <InputText required={false} placeholder="Digite seu CEP" value={CEP} action={e => setCEP(e.target.value)}/>
                            </InputField>
                        </div>
                        <div style={{'padding': '20px 0px'}}>
                            <button type='button' className='button' onClick={e => submeter(e)}>Enviar</button>
                        </div>
                    </form>
                    
                </main>
            </div>
        </div>
     );
}

export default Conhecer;