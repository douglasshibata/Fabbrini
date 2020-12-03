import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import DataTable from './Table';
import Navbar from '../Navbar';
import api from '../../services/api'
import ChatBot from '../Chatbot';

function Prontuario(props) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const cpf = localStorage.getItem('cpfUser')
        const getItems = async () => {
            try {
                const response = await api.get('/prontuario', { headers: { cpfUser: cpf } });
                setItems(response.data.rows)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getItems()
    }, []);
    return (
        <>
            <Navbar />
            <Container>
                <h1 style={{ margin: 20 }}>Prontuario</h1>
                <DataTable items={items}/>
            </Container>
            <ChatBot/>
        </>
    )
}

export default Prontuario;