import { Header } from '../../components/header';
import { Search } from '../../components/search';
import { AgendDate } from '../../components/agendDate';

import './styles.css';

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
      </div>
    </div>
    </>
  );
}