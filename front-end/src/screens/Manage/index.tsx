import './styles.css'
import { Header } from '../../components/header'
import { SideBar } from '../../routes/sideBar'

export function Manage(){
    return(
        <>
        <Header />
        <div className="containerManage">
            <SideBar />
            <h1 className='title'>Gerenciar</h1>
        </div>
        </>
    )
}