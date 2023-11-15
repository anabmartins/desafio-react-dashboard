import './styles.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Consulta {
    nome_consulta: string;
    data: string;
    horario: string;
}

export function Card() {
    
    const [qtdConsultas, setQtdConsultas] = useState(0)
    const [qtdPacientes, setQtdPacientes] = useState(0);
    const [, setConsultas] = useState<Consulta[]>([]);
    const [, setPacientes] = useState([]);

    useEffect(() => {
        fetchConsultas();
        fetchPacientes();
    }, []);

    const fetchConsultas = async () => {
        try {
            const response = await axios.get('http://localhost:8090/consultas');
            setConsultas(response.data);
            setQtdConsultas(response.data.length);
        } catch (error) {
            console.log('Erro ao buscar consultas: ', error);
        }
    }
    const fetchPacientes = async () => {
        try {
            const response = await axios.get('http://localhost:8090/pacientes');
            setPacientes(response.data);
            setQtdPacientes(response.data.length);
        } catch (error) {
            console.log('Erro ao buscar pacientes: ', error);
        }
    }
    // var qtdConsultas = consultas.length

    return (
        <>
            <div className="containerCard">
                <div className="numbers">
                <p><strong>Dados</strong></p>
                <p>Número de consultas: {qtdConsultas}</p>
                <p>Número de pacientes: {qtdPacientes}</p>
                </div>
                {/* <span className="divider"></span> */}
                
            </div>

        </>
    )
}