import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import DataProfile from './DataProfile';
import Navbar from '../Navbar';
import api from '../../services/api'
import DataProfessional from './UCardProf';
import ChatBot from '../Chatbot';

function Profile(props) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const cpf = localStorage.getItem('cpfUser')
        const getItems = async () => {
            try {
                const response = await api.get('/perfil', { headers: { cpfUser: cpf } });
                setItems(response.data)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getItems()
    }, []);
    const updateState = (item) => {
        const itemIndex = items.findIndex(data => data.id === item.id)
        const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
        setItems(newArray)
    }
    function setFunc(event) {
        if (event.target.value === 'paciente') {
            document.getElementById('usuarioPaciente').style.display = 'block';
            document.getElementById('usuarioProfissional').style.display = 'none';
        } else if (event.target.value === 'profissional') {
            document.getElementById('usuarioPaciente').style.display = 'none';
            document.getElementById('usuarioProfissional').style.display = 'block';
        }
    }
    localStorage.setItem('nome', items.nome);
    localStorage.setItem('ehMedico', items.ehMedico);
    function alertData(){
        let answer = window.confirm("Para Se cadastrar como profissional, é necessário completar os seus dados. \n E Editar o Perfil para habilitar as permissões de profissionais da saúde\n Deseja Continuar?")
        if(answer){ 
            document.getElementById('paciente').checked = false
            document.getElementById('profissional').checked = true
        }else{
           // document.getElementById('paciente').checked = true
            //document.getElementById('profissional').checked = false
        }
    }
    return (
        <>
            <Navbar />
            <Container>
            <ChatBot/>
                <h2 style={{ margin: 20, color: '#00BCD4' }}>Olá, {items.nome}</h2>
                {items.ehMedico ?
                    <>
                        <div id="usuarioPaciente" style={{ display: 'none' }}>
                            <DataProfile items={items} updateState={updateState} />
                        </div>
                        <div id='usuarioProfissional' >
                            <DataProfessional items={items} updateState={updateState} />
                        </div></> : <>
                        <div id="usuarioPaciente">
                            <DataProfile items={items} updateState={updateState} />
                        </div>
                        <div id='usuarioProfissional' style={{ display: 'none' }}>
                            <DataProfessional items={items} updateState={updateState} />
                        </div></>}
                        {items.ehMedico ?
                    <>
                        <div onChange={setFunc}>
                            <input type='radio' value='paciente' name="func" /> Paciente
                      <input type="radio" value='profissional' name="func" defaultChecked /> Sou Profissional de Saúde
                  </div>
                    </> : <>
                        <div onChange={setFunc}>
                            <input type='radio' value='paciente' id='paciente' name="func" defaultChecked /> Paciente
                     <input type="radio" value='profissional' id='profissional' name="func" onClick={alertData} /> Sou Profissional de Saúde
                 </div>
                    </>}
            </Container>
        </>
    )
}

export default Profile;