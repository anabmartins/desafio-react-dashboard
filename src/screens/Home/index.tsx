import './styles.css';
// components
import { Header } from '../../components/header';
import { Search } from '../../components/search';
import { AgendDate } from '../../components/agendDate';  
import { PatientList } from '../../components/patientList';

export function Home() {
  return (
    <>
    <Header />
    <div className='containerHome'>
      <div className="dashboard">
      <Search />
      <h1>Dashboard</h1>
      </div>
      <div className="agend">
        <AgendDate />
        <PatientList />
      </div>
    </div>
    </>
  );
}