import './styles.css'

export function Login(){
    return(
        <div className="container">
        <div className="containerLogin">
            <img src="./logo.svg"/>
            <p className='title'>Login</p>
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
        </div>
        </div>
    )
}