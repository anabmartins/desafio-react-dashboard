import './styles.css'
import { useState, useEffect } from 'react'
import { List } from './List'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


interface Consulta {
    nome_consulta: string;
    data: string;
    horario: string;
    nome_paciente: string;
    nome_medico: string;
}

export function AgendModal() {

    // modal
    const [isModalVisible, setModalVisible] = useState(false);
    function closeModal() {
        setModalVisible(false)
    }
    function openModal() {
        setModalVisible(true)
    }

    const [nome_consultaInput, setNome_consultaInput] = useState('');
    const [dataInput, setDataInput] = useState('');
    const [horarioInput, setHorarioInput] = useState('');
    // const [nome_paciente, set_nomePaciente] = useState('')
    // const [nome_medico, set_nomeMedico] = useState('')
    // mensagem de erro
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchConsultas();
    }, []);

    // Metodo GET 
    const fetchConsultas = async () => {
        try {
            const response = await axios.get('http://localhost:8090/consultas');
            setConsultas(response.data);
        } catch (error) {
            setErrorMessage('Erro ao buscar consultas');
        }
    }

    // const getPacientePorId = async () => {
    //     // buscar pacientes pelo id
    //     try {
    //         const response = await axios.get('http://localhost:8090/pacientes/' + nome_paciente);
    //         set_nomePaciente(response.data.nome);
    //         console.log(response);
    //     } catch (error) {
    //         console.log('Erro ao buscar paciente', error);
    //     }
    // }

    // Metodo POST 
    const handleSubmit = async () => {

        // event.preventDefault();
        try {
            // verificar os campos
            if (!nome_consultaInput || !dataInput || !horarioInput) {
                setErrorMessage('Preencha todos os campos');
            } else {
                let novaConsulta = {
                    nome_consulta: nome_consultaInput,
                    data: dataInput,
                    horario: horarioInput,
                }
                await axios.post(`http://localhost:8090/consultas`, novaConsulta)
                fetchConsultas();
                setNome_consultaInput("");
                setDataInput("");
                setHorarioInput("");
                handleViewConsultas();
                closeModal();
            }
        } catch (error) {
            setErrorMessage('Erro ao criar Consulta');
        }
    }

    const [consulta, setConsultas] = useState<Consulta[]>([]);

    console.log(consulta);

    const handleViewConsultas = () => {
        fetchConsultas();
    };

    return (
        <>
            <div className="agendContainer">
                <button className='btnAgend'
                    onClick={openModal}>
                    <AddCircleIcon />
                    <p>Nova consulta</p>
                </button>
                <div className="agendItem">

                </div>
                {isModalVisible && (
                    <>
                        <div className="modal">
                            <button onClick={closeModal} className='closeBtn'>
                                <CloseIcon />
                            </button>
                            <p className='subtitle'>Adicionar consulta</p>
                            <form onSubmit={handleSubmit} className='formModal'>
                                <input
                                    className='input'
                                    type="text"
                                    placeholder='Título da consulta'
                                    name='nome_consultaInput'
                                    id='nome_consultaInput'
                                    value={nome_consultaInput}
                                    required
                                    onChange={(event) => setNome_consultaInput(event.target.value)}
                                />
                                <input
                                    className='input'
                                    type="date"
                                    name='dataInput'
                                    id='dataInput'
                                    value={dataInput}
                                    required
                                    onChange={(event) => setDataInput(event.target.value)}
                                />
                                <input
                                    className='input'
                                    type="time"
                                    name=''
                                    id='horarioInput'
                                    value={horarioInput}
                                    required
                                    onChange={(event) => setHorarioInput(event.target.value)}
                                />
                                <select name="" id="" className='input'>
                                    <option value="">paciente 1</option>
                                </select>
                                {errorMessage}
                                <button
                                    className='btnLogin'
                                    type="submit"
                                >
                                    salvar
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export function AgendList() {
    return (
        <List />
    )
}