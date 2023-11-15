import { NavLink } from 'react-router-dom'
import './styles.css'

export function Login() {
    return (
        <div className="container">
            <div className="containerLogin">
            <img src="./logoWhite.svg" />
            <p className='title'>Entrar</p>
                <p className='text'><abbr title="seu email">Email</abbr></p>
                <input
                    type="mail"
                    placeholder='Email'
                    className='input'
                />
                <p className='text'><abbr title="sua senha">Senha</abbr></p>
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
            </div>
            <span>Hospital@2023</span>
        </div>
    )
}