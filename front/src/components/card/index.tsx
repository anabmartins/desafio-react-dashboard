import './styles.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import PersonIcon from '@mui/icons-material/Person';

export function Card() {

    const [qtdConsultas, setQtdConsultas] = useState(0)
    const [qtdPacientes, setQtdPacientes] = useState(0);
    const [qtdMedicos, setQtdMedicos] = useState(0);

    useEffect(() => {
        fetchDados();
    }, []);

    const fetchDados = async () => {
        try {
            const responseConsultas = await axios.get('http://localhost:8090/consultas');
            setQtdConsultas(responseConsultas.data.length);
            const responsePacientes = await axios.get('http://localhost:8090/pacientes');
            setQtdPacientes(responsePacientes.data.length);
            const responseMedicos = await axios.get('http://localhost:8090/medicos');
            setQtdMedicos(responseMedicos.data.length);
        } catch (error) {
            console.log('Erro ao buscar consultas: ', error);
        }
    }

    // var qtdConsultas = consultas.length

    return (
        <>
            <div className="containerCard">
                <div className="numbers">
                    <p><InsertInvitationOutlinedIcon /> Número de consultas: {qtdConsultas}</p>
                    <p><PersonIcon /> Número de pacientes: {qtdPacientes}</p>
                    <p><HealthAndSafetyOutlinedIcon /> Número de médicos: {qtdMedicos}</p>
                </div>
               
            </div>

        </>
    )
}