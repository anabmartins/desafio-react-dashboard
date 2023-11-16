import './styles.css';
import { Header } from '../../components/header'
import { SideBar } from '../../routes/sideBar';
import { DoctortList } from '../../components/userList';
import { AgendDate } from '../../components/agendDate';
import { AgendModal, AgendList } from '../../components/agendList';

export function Agend(){
    return (
        <>
        <Header />
        <div className="containerAgend">
        <SideBar />
        <div className="listDoctors">
        <DoctortList />
        <AgendDate />
        </div>
        <div className="agendListContainer">
        <h1 className='title'>Consultas</h1>
        <strong>20/Fev 2022</strong>
        <AgendModal />
        <AgendList />
        </div>
        </div>
    </>
)
}