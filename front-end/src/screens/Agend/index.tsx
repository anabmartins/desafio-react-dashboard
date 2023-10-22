import './styles.css';
import { Header } from '../../components/header'
import { SideBar } from '../../routes/sideBar';
import { DoctortList } from '../../components/userList';
import { AgendDate } from '../../components/agendDate';
import { AgendList } from '../../components/agendList';

export function Agend(){
    return (
        <>
        <Header />
        <div className="containerAgend">
        <SideBar />
        <div className="listDoctors">
        <h1 className='title'>Médicos</h1>
        <DoctortList />
        <AgendDate />
        </div>
        <div className="agendList">
        <h1 className='title'>20/Fev 2022</h1>
        <AgendList />
        </div>
        </div>
    </>
)
}