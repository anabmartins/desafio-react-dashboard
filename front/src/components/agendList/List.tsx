import './styles.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import User from '../../assets/user.svg'


interface Consulta {
    nome_consulta: string;
    data: string;
    horario: string;
}

export function List() {



    useEffect(() => {
        fetchConsultas();
    }, []);

    // Metodo GET 
    const fetchConsultas = async () => {
        try {
            const response = await axios.get('http://localhost:8090/consultas');
            setConsultas(response.data);
        } catch (error) {
            console.log('Erro ao buscar consultas: ', error);
        }
    }

    const [consultas, setConsultas] = useState<Consulta[]>([]);

    return (
        <>
            <div className="agendList">
                {consultas.map((consulta, index) => (
                    <div key={index} className='consultaItem'>
                        <p className='hour'>{consulta.horario}</p>
                        <img src={User} className='userImageList' />
                        <div>
                            <p className='consTitle'>{consulta.nome_consulta}</p>
                            <p className='date'>Data: {consulta.data}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
