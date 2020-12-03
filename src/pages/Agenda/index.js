import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import ModalForm from './Modal';
import DataTable from './Table';
import Navbar from '../Navbar';
import { CSVLink } from "react-csv";
import GetAppIcon from '@material-ui/icons/GetApp';
import api from '../../services/api'
import ChatBot from '../Chatbot';

function App(props) {
    const [items, setItems] = useState([])
    const ehMedico = localStorage.getItem('ehMedico');
    useEffect(() => {
        const cpf = localStorage.getItem('cpfUser')
        const getItems = async () => {
            try {
                const response = await api.get('/agendaCompleta', { headers: { cpfUser: cpf } });
                setItems(response.data.rows)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getItems()
    }, []);
    const addItemToState = (item) => {
        setItems([...items, item])
    }

    const updateState = (item) => {
        const itemIndex = items.findIndex(data => data.id === item.id)
        const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
        setItems(newArray)
    }

    return (
        <>
            <Navbar />
            <Container>
                <h1 style={{ margin: 20 }}>Agenda</h1>
                {ehMedico === 'true'?
                <>
                <ModalForm addItemToState={addItemToState} />
                <DataTable items={items} updateState={updateState} /> 
                <CSVLink
                    filename={`agenda_${items.profissionalCpf}.csv`}
                    data={items}>
                    <GetAppIcon color='primary'/>Download Agenda
                </CSVLink>
                </>:  <DataTable items={items}/>  }
            </Container>
            <ChatBot/>
        </>
    )
}

export default App;