import ContainerRegister from "../../components/ContainerRegister";
import HeaderRegister from "../../components/HeaderRegister";
import FormRegister from "../../components/FormRegister";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import InputText from "../../components/InputText";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {setLocalStorage} from '../../utility/localStorage';
import { toast } from "react-toastify";

function Cadastro() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirm, setSenhaConfirm] = useState('');

    async function register(e){
        e.preventDefault();

        if(email === '' || emailConfirm === '' || senha === '' || senhaConfirm === ''){
            toast.warn('É preciso preencher todos os campos!');
            return;
        }

        if(email !== emailConfirm){
            toast.warn('Os emails não são iguais!');
            return;
        }

        if(senha !== senhaConfirm){
            toast.warn('As senhas não são iguais!');
            return;
        }

        if(senha.length < 6){
            toast.warn('A senha de ter pelo menos 6 digitos');
            return;
        }

        setLocalStorage('@register-step-1', {email, senha});
        
        navigate('/conhecer');
    }

    return ( 
        <ContainerRegister>
            <HeaderRegister to='/inicio'/>
            <Logo/>
            <FormRegister btnName='Próximo' btnAction={(e) => register(e)}>
                <InputField label='E-mail*' withoutMargin={true}>
                    <InputText 
                        type="email" 
                        placeholder="Digite seu e-mail"
                        value={email}
                        action={e => setEmail(e.target.value)}
                        required={true}
                    />
                </InputField>
                <InputField label='Confirme seu e-mail*'>
                    <InputText 
                        type="email" 
                        placeholder="Digite novamente seu e-mail"
                        value={emailConfirm}
                        action={e => setEmailConfirm(e.target.value)}
                        required={true}
                    />
                </InputField>
                <InputField label='Senha*'>
                    <InputText 
                        type="password" 
                        placeholder="Digite sua senha"
                        value={senha}
                        action={e => setSenha(e.target.value)}
                        required={true}
                    />
                </InputField>
                <InputField label='Confirme sua senha*'>
                    <InputText 
                        type="password" 
                        placeholder="Digite novamente sua senha"
                        value={senhaConfirm}
                        action={e => setSenhaConfirm(e.target.value)}
                        required={true}
                    />
                </InputField>
            </FormRegister>
        </ContainerRegister>
     );
}

export default Cadastro;