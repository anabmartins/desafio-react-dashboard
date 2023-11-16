import './styles.css'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function Login() {

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
    const [, setMedicos] = useState([]);

    useEffect(() => {
        fetchMedicos();
    }, [])

    const fetchMedicos = async () => {
        try {
            const response = await axios.get('http://localhost:8090/medicos');
            setMedicos(response.data);
        } catch (error) {
            console.log('Erro ao buscar medicos: ', error);
        }
    }

    const handleSubmit = async () => {
        try {
            let novoMedico = {
                nome_completo: inputRegister.nomeInput,
                email: inputRegister.emailInput,
                senha: inputRegister.senhaInput,
            }
            await axios.post('http://localhost:8090/medicos', novoMedico);
            fetchMedicos();
            setInputRegister({
                nomeInput: '',
                emailInput: '',
                senhaInput: ''
            })
            alert(`Médico ${inputRegister.nomeInput} cadastrado com sucesso`)
        } catch (error) {
            console.log("erro ao cadastrar: ", error);

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
                        />
                        <p className='text'>Senha</p>
                        <input
                            type="password"
                            placeholder='Senha'
                            className='input'
                        />
                        <NavLink to="/home">
                            <button className='btnLogin'>
                                Entrar
                            </button>
                        </NavLink>
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