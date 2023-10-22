import './styles.css';
// components
import { Header } from '../../components/header';
import { Search } from '../../components/search';
import { AgendDate } from '../../components/agendDate';
import { PatientList } from '../../components/userList';
import { Dashboard } from '../../components/dashboard';
import { DataTable } from '../../components/dataTable';
// sidebar
import { SideBar } from '../../routes/sideBar';

export function Home() {
  return (
    <>
      <Header />
      <div className='containerHome'>
        <SideBar />
          <div className="dashboard">
            <Search />
            <h1>Dashboard</h1>
            <Dashboard />
            <h1>Avisos e lembretes</h1>
            <DataTable />
          </div>
          <div className="agend">
            <AgendDate />
            <PatientList />
          </div>
      </div>
    </>
  );
}