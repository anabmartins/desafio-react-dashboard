import './styles.css'
import User from '../../assets/user-dark.svg'
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Paciente {
  nome_completo: string;
  data_nascimento: string;
  sexo: string;
  telefone: string;
  email: string;
}

export function PatientList() {

  useEffect(() => {
    fetchPacientes();
  }, []);

  
    // Metodo GET 
    const fetchPacientes = async () => {
      try {
          const response = await axios.get('http://localhost:8090/pacientes');
          setPacientes(response.data);
      } catch (error) {
          console.log('Erro ao buscar pacientes: ', error);
      }
  }

  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  return (
    <>
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

  return (
    <>
    </>
    )
}
