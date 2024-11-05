import ContainerRegister from "../../components/ContainerRegister";
import HeaderRegister from "../../components/HeaderRegister";
import FormRegister from "../../components/FormRegister";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import InputText from "../../components/InputText";
import { useState } from "react";

import {loginUser} from "../../services/crud";
import { toast } from "react-toastify";

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function login(e) {
        e.preventDefault();

        if(email === '' || senha === ''){
            toast.warn('Preencha todos os campos!');
            return;
        }
        
        await loginUser(email, senha);
    }

    return ( 
        <ContainerRegister>
            <HeaderRegister to='/inicio'/>
            <Logo/>
            <FormRegister btnName='Entrar' heightAuto={true} btnAction={(e) => login(e)}>
                <InputField label='E-mail' withoutMargin={true}>
                    <InputText 
                        type="email" 
                        placeholder="Digite seu e-mail" 
                        value={email}
                        action={e => setEmail(e.target.value)} 
                    />
                </InputField>
                <InputField label='Senha'>
                    <InputText 
                        type="password" 
                        placeholder="Digite sua senha" 
                        value={senha}
                        action={e => setSenha(e.target.value)} 
                    />
                </InputField>
            </FormRegister>
        </ContainerRegister>
     );
}

export default Login;