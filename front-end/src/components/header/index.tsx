import './styles.css';
import User from '../../assets/user.svg'
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <>
            <header className='containerHeader'>
                <NavLink to="/" className='link'>
                    <h1>
                        <img src="./logoWhite.svg" />
                        Clínica Médica</h1>
                </NavLink>
                <img src={User} className='userImage' />
            </header>
        </>
    )
}