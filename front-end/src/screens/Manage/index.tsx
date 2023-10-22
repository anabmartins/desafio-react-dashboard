import React, { useState, useEffect } from 'react';
import './styles.css'
import { Header } from '../../components/header'
import { SideBar } from '../../routes/sideBar'
import axios from 'axios';

export function Manage() {

    const [pacientes, setPacientes] = useState([]);
    const [nomeInput, setNomeInput] = useState('');
    const [dataInput, setDataInput] = useState();
    const [sexoInput, setSexoInput] = useState("");
    const [telefoneInput, setTelefoneInput] = useState();

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

    // Metodo POST 
    const handleSubmit = async () => {
        // event.preventDefault();
        try {
            let novoPaciente = {
                nome_completo: nomeInput,
                data_nascimento: dataInput,
                sexo: sexoInput,
                telefone: telefoneInput,
            }
            await axios.post(`http://localhost:8090/pacientes`, novoPaciente)
            fetchPacientes();
            setNomeInput("");
        } catch (error) {
            console.log('Erro ao criar Paciente: ', error);

        }
    }


    // Metodo SET 
    // const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    //     const { name, value } = event.target;
    //     setNovoPaciente((prevPaciente) => ({
    //         ...prevPaciente,
    //         [name]: value,
    //     }));
    // };


    // Metodo DELETE  
    // const handleDelete = async (id: any) => {
    //     try {
    //         await axios.delete(`http://localhost:8090/pacientes/${id}`);
    //         fetchPacientes();
    //     } catch (error) {
    //         console.log("Erro ao excluir paciente: ", error);

    //     }
    // }

    // Metodo PUT  
    // const handleUpdate = async (id: any, pacienteAtualizado: any) => {
    //     try {
    //         await axios.put(`http://localhost:8090/pacientes/${id}`, pacienteAtualizado);
    //         fetchPacientes();
    //     } catch (error) {
    //         console.error('Erro ao atualizar paciente: ', error);
    //     }
    // };



    return (
        <>
            <Header />
            <div className="containerManage">
                <SideBar />
                <div className="sectionManage">
                    <h1 className='title'>Gerenciar Pacientes</h1>
                    <p>Adicionar paciente</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Nome completo do paciente'
                            name='nomeInput'
                            value={nomeInput}
                            onChange={(event) => setNomeInput(event.target.value)}
                        />
                        <button 
                        // type="submit"
                       onClick={handleSubmit}
                        >
                            Adicionar Paciente
                            </button>
                    </form>
                </div>
            </div>
        </>
    )
}