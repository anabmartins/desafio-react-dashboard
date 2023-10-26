import { NavLink } from 'react-router-dom'
import './styles.css'

export function Login() {
    return (
        <div className="container">
            <img src="./logo.svg" />
            <p className='title'>Entrar</p>
            <div className="containerLogin">
                <p className='text'>Email</p>
                <input
                    type="mail"
                    placeholder='email'
                    className='input'
                />
                <p className='text'>Senha</p>
                <input
                    type="password"
                    placeholder='senha'
                    className='input'
                />
                <NavLink to="/home">
                    <button className='modalBtn'>
                        Entrar
                    </button>
                </NavLink>
            </div>
        </div>
    )
}