import './styles.css'
import { useState } from 'react'
import axios from 'axios'

const logar = async (email: string, senha: string) => {
    try {
        const response = await axios.post('http://localhost:8090/api/login', {
            email: email,
            senha: senha,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errosLogin, setErrosLogin] = useState('');

    const handleLoginSubmit = async () => {
        try {
            const response = await logar(email, senha);
            console.log(response);
            if (!email || !senha) {
                setTimeout(() => {
                    setErrosLogin('Preencha todos os campos');
                }, 300);
            } else if (response == true) {
                // localStorage.setItem('token', response.data.token);
                window.location.href = '/home';
                setErrosLogin('');
            } else {
                setTimeout(() => {
                    setErrosLogin('Usuário ou senha inválidos');
                }, 300);
            }
        } catch (error) {
            setTimeout(() => {
                setErrosLogin("erro ao se logar");
            }, 300);
        }
    }

    const [visibleLogin, setVisibleLogin] = useState(true)
    const [visibleRegister, setVisibleRegister] = useState(false)

    function setRegister() {
        setVisibleLogin(!visibleLogin)
        setVisibleRegister(!visibleRegister)
    }

    const [inputRegister, setInputRegister] = useState({
        nomeInput: '',
        emailInput: '',
        senhaInput: ''
    })
    const [errosRegister, setErrosRegister] = useState('');


    const handleSubmit = async () => {
        try {
            if (!inputRegister.nomeInput || !inputRegister.emailInput || !inputRegister.senhaInput) {
                setTimeout(() => {
                setErrosRegister("campos não podem ser nulos!")
            }, 300);
        } else {
                let novoMedico = {
                    nome_completo: inputRegister.nomeInput,
                    email: inputRegister.emailInput,
                    senha: inputRegister.senhaInput,
                }
                await axios.post('http://localhost:8090/medicos', novoMedico);
                // fetchData();
                setInputRegister({
                    nomeInput: '',
                    emailInput: '',
                    senhaInput: ''
                })
                setTimeout(() => {
                    setErrosRegister(`Médico ${inputRegister.nomeInput} cadastrado com sucesso`)
                }, 300);
            }
        } catch (error) {
            setTimeout(() => {
                setErrosRegister("erro ao cadastrar");
            }, 300);
        }
    }
    const handleInputChange = (event: any) => {
        const { name, value } = event.currentTarget;
        setInputRegister((prevInputRegister) => ({
            ...prevInputRegister,
            [name]: value,
        }));
    };

    return (
        <div className="container">
            {visibleLogin && (
                <>
                    <div className="containerLogin">
                        <img src="./logoWhite.svg" />
                        <p className='title'>Entrar</p>
                        <p className='text'>Email</p>
                        <input
                            type="mail"
                            placeholder='Email'
                            className='input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className='text'>Senha</p>
                        <input
                            type="password"
                            placeholder='Senha'
                            className='input'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <p>
                            {errosLogin}
                        </p>
                        <button className='btnLogin' onClick={handleLoginSubmit}>
                            Entrar
                        </button>
                        <a onClick={setRegister}>
                            Não possui conta?
                            <strong> Cadastre-se</strong>
                        </a>
                    </div>
                </>)}
            {visibleRegister && (
                <>
                    <div className="containerLogin">
                        <img src="./logoWhite.svg" />
                        <p className='title'>Registrar</p>
                        <p className='text'>Nome completo</p>
                        <input
                            type="text"
                            placeholder='Nome completo'
                            className='input'
                            name='nomeInput'
                            value={inputRegister.nomeInput}
                            onChange={handleInputChange}
                        />
                        <p className='text'>Email</p>
                        <input
                            type="mail"
                            placeholder='Email'
                            className='input'
                            name='emailInput'
                            value={inputRegister.emailInput}
                            onChange={handleInputChange}
                        />
                        <p className='text'>Senha</p>
                        <input
                            type="password"
                            placeholder='Senha'
                            className='input'
                            name='senhaInput'
                            value={inputRegister.senhaInput}
                            onChange={handleInputChange}
                        />
                        <p>
                            {errosRegister}
                        </p>
                        <button
                            className='btnLogin'
                            onClick={handleSubmit}
                            type="submit"
                        >
                            Registrar
                        </button>
                        <a onClick={setRegister}>
                            Faça Login
                        </a>
                    </div>
                </>)}
            <span>Hospital@2023</span>
        </div>
    )
}