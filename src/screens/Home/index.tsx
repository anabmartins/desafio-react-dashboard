import { Header } from '../../components/header';
import { Search } from '../../components/search';
import { AgendDate } from '../../components/agendDate';
import Button from '@mui/material/Button';

import './styles.css';

export function Home() {
  return (
    <>
    <Header />
    <div className='containerHome'>
      <div className="dashboard">
      <Search />
      <h1>Dashboard</h1>
      <Button variant="contained">Hello world</Button>;
      </div>
      <div className="agend">
        <AgendDate />
      </div>
    </div>
    </>
  );
}