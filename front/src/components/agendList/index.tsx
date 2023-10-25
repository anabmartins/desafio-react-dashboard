import './styles.css'
import { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

export function AgendList() {

    // modal
    const [isModalVisible, setModalVisible] = useState(false);
    function closeModal() {
        setModalVisible(false)
    }
    function openModal() {
        setModalVisible(true)
    }

    const [consultas, setConsultas] = useState([]);
    const [nome_consultaInput, setNome_consultaInput] = useState('');
    const [dataInput, setDataInput] = useState('');
    const [horarioInput, setHorarioInput] = useState('');

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

    // Metodo POST 
    const handleSubmit = async () => {

        // event.preventDefault();
        try {
            let novaConsulta = {
                nome_consulta: nome_consultaInput,
                data: dataInput,
                horario: horarioInput,
            }
            await axios.post(`http://localhost:8090/consultas`, novaConsulta)
            fetchConsultas();
            setNome_consultaInput("");
            closeModal();
        } catch (error) {
            console.log('Erro ao criar Consulta: ', error);

        }
    }


    return (
        <>
            <div className="agendContainer">
                <button className='btn'
                    onClick={openModal}
                >Nova consulta</button>
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
                                <button
                                    // onClick={}
                                    className='modalBtn'
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