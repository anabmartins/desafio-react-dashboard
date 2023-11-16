import './styles.css'
import User from '../../assets/user-dark.svg'
import axios from 'axios';
import { useEffect, useState } from 'react';

export function PatientList() {
  
  interface Paciente {
    nome_completo: string;
    data_nascimento: string;
    sexo: string;
    telefone: string;
    email: string;
  }

  useEffect(() => {
    fetchPacientes();
  }, []);


  // Metodo GET 
  const fetchPacientes = async () => {
    try {
      const response = await axios.get('http://localhost:8090/pacientes');
      setPacientes(response.data);
      setQtdPacientes(response.data.length);
    } catch (error) {
      console.log('Erro ao buscar pacientes: ', error);
    }
  }

  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [qtdPacientes, setQtdPacientes] = useState(0);

  return (
    <>
      <h1>Pacientes
        <small> ({qtdPacientes})</small>
      </h1>
      <div className="patientList">
        {pacientes.map((paciente, index) => (
          <div key={index} className='itemList'>
            <img src={User} className='userImageList' />
            <p className='hour'>{paciente.nome_completo}</p>
            <div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export function DoctortList() {

  interface Medico {
    nome_completo: string;
    email: string;
    senha: string;
  }

  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [qtdMedicos, setQtdMedicos] = useState(0);

  useEffect(() => {
    fetchMedicos();
  }, [])

  const fetchMedicos = async () => {
    try {
      const response = await axios.get('http://localhost:8090/medicos');
      setMedicos(response.data);
      setQtdMedicos(response.data.length);
    } catch (error) {
      console.log('Erro ao buscar medicos: ', error);
    }
  }

  return (
    <>
      <h1 className='title'>Médicos
        <small> ({qtdMedicos})</small>
      </h1>
      <div className="doctorList">
        {medicos.map((medico, index) => (
          <div key={index} className='itemList'>
            <img src={User} className='userImageList' />
            <p className='hour'>{medico.nome_completo}</p>
            <div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
