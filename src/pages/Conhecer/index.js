import './conhecer.css';
import Logo from '../../components/Logo';
import InputField from '../../components/InputField';
import InputText from '../../components/InputText';
import ContainerRegister from '../../components/ContainerRegister';
import HeaderRegister from '../../components/HeaderRegister';
import FormRegister from '../../components/FormRegister';
import Dropdown from '../../components/Dropdown';

import {postForm, registerUser} from '../../services/crud';
import { useEffect, useState } from 'react';
import { getLocalStorage, removeLocalStorage } from '../../utility/localStorage';

import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';

function Conhecer() {

    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const generos = ['Masculino', 'Feminino']
    const [genero, setGenero] = useState('');
    const handleSelectChangeGenero = (newValue) => {
        setGenero(newValue);
    };

    const [paises, setPaises] = useState([]);
    const [pais, setPais] = useState('');
    const handleSelectChangePais = (newValue) => {
        setPais(newValue);
    };

    const [estados, setEstados] = useState([]);
    const [estado, setEstado] = useState('');
    const handleSelectChangeEstado = (newValue) => {
        setEstado(newValue);
    };

    const [cidades, setCidades] = useState([]);
    const [cidade, setCidade] = useState('');
    const handleSelectChangeCidade = (newValue) => {
        setCidade(newValue);
    };

    const [bairro, setBairro] = useState('');

    const [CEP, setCEP] = useState('');

    async function submeter(e) {
        e.preventDefault();

        const cadastro = getLocalStorage('@register-step-1');
        
        if(email === '' && telefone === '' && nome === ''){
            toast.warn('Campos com * são obrigatórios')
            return;
        }
        
        const makeRegister = await registerUser(cadastro.email, cadastro.senha);
        
        if(makeRegister){
            await postForm('conhecer', {
                email,
                telefone,
                nome,
                genero,
                dataNascimento,
                pais,
                estado,
                cidade,
                bairro,
                CEP
            });
            removeLocalStorage('@register-step-1');
        }
    }

    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises')
          .then(response => response.json())
          .then(data => {
            const countryNames = data.map(country => country.nome);
            setPaises(countryNames);
          })
          .catch(error => console.error('Erro ao carregar países:', error));
      }, []);

      useEffect(() => {
        if (pais === 'Brasil') {
          fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => {
                const states = data.map((state) => ({ id: state.id, nome: state.nome }));
                setEstados(states);
            })
            .catch(error => console.error('Erro ao carregar estados:', error));
        }
      }, [pais]);

      useEffect(() => {
        if (pais === 'Brasil' && estado) {
          const stateId = estados.find(e => e.nome === estado)?.id;
          if (stateId) {
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`)
              .then(response => response.json())
              .then(data => {
                const cityNames = data.map(city => ({id: city.id, nome: city.nome}));
                setCidades(cityNames);
              })
              .catch(error => console.error('Erro ao carregar municípios:', error));
          }
        }
      }, [estado, estados, pais]);

    return ( 
        <ContainerRegister>
            <HeaderRegister to='/cadastro'/>
            <Logo/>
            <FormRegister btnName='Enviar' btnAction={e => submeter(e)}>
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
                    <Dropdown 
                        placeholder='Selecione seu gênero'
                        options={generos}
                        value={genero}
                        onChange={handleSelectChangeGenero}
                    />
                </InputField>

                <InputField label='Data de nascimento'>
                    <InputText
                        required={false}
                        type='date'
                        value={dataNascimento}
                        action={e => setDataNascimento(e.target.value)}
                    />
                </InputField>

                <InputField label='País'>
                    <Dropdown 
                        placeholder='Selecione seu país'
                        options={paises}
                        value={pais}
                        onChange={handleSelectChangePais}
                    />
                </InputField>

                {pais === 'Brasil' && (
                    <InputField label='Estado'>
                        <Dropdown 
                            placeholder='Selecione seu estado'
                            options={estados.map(e => e.nome)}
                            value={estado}
                            onChange={handleSelectChangeEstado}
                        />
                    </InputField>
                )}

                {pais === 'Brasil' && estado && (
                    <InputField label='Cidade'>
                        <Dropdown 
                            placeholder='Selecione sua cidade'
                            options={cidades.map(c => c.nome)}
                            value={cidade}
                            onChange={handleSelectChangeCidade}
                        />
                    </InputField>
                )}

                {pais === 'Brasil' && estado && cidade && (
                    <InputField label='Bairro'>
                        <InputText 
                            placeholder='Digite o nome de seu bairro'
                            value={bairro}
                            action={e => setBairro(e.target.value)}
                        />
                    </InputField>
                )}

                {pais === 'Brasil' && (
                    <InputField label='CEP'>
                        <InputMask
                            required={false}
                            placeholder='Digite seu CEP'
                            mask='99999-999'
                            value={CEP}
                            onChange={e => setCEP(e.target.value)}
                            className='input-text'
                        />
                    </InputField>
                )}

            </FormRegister>
        </ContainerRegister>
     );
}

export default Conhecer;