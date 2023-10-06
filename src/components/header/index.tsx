import './styles.css';  
import User from '../../assets/user.svg'

export function Header(){
    return(
        <>
       <header className='containerHeader'>
        <h1>Clínica</h1>
        <img src={User} className='userImage'/>
       </header>
        </>
    )
}