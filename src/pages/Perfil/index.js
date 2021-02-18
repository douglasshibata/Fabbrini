import React, { useState, useEffect } from 'react';
import { Container, FormControlLabel } from '@material-ui/core'
import DataProfile from './DataProfile';
import Navbar from '../Navbar';
import api from '../../services/api'
import DataProfessional from './UCardProf';
import ChatBot from '../Chatbot';
import Checkbox from '@material-ui/core/Checkbox';
import { Alert } from '@material-ui/lab';

function Profile(props) {
    const [items, setItems] = useState([])
    const [ehMedico, setEhMedico] = useState(false);
    const [paciente, setPaciente] = useState(true);
    useEffect(() => {
        const idUsuario = localStorage.getItem('_idUsuario')
        const getItems = async () => {
            try {
                const response = await api.get('/perfil', { headers: { _id: idUsuario } });
                console.log(response.data);
                setItems(response.data.user)
                setEhMedico(response.data.user.ehMedico)
            } catch (error) {
                console.log(error.response);
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

    localStorage.setItem('nome', items.firstName);
    localStorage.setItem('ehMedico', ehMedico);
    return (
        <>
            <Navbar />
            <Container>
                {/* <ChatBot /> */}


                <FormControlLabel
                    control={
                        <Checkbox
                            checked={paciente}
                            onChange={event => setPaciente(event.target.checked)}
                            name="paciente"
                            color="primary"
                        />
                    }
                    label="Paciente"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={ehMedico}
                            onChange={event => setEhMedico(event.target.checked)}
                            name="ehMedico"
                            color="primary"
                        />
                    }
                    label="Sou profissional da Saúde"
                />
                {ehMedico ?
                    <>
                     <Alert severity='warning' >Para Ativar o perfil como médico, por favor complete os seus dados e salve</Alert>
                        <DataProfessional items={items} updateState={updateState} />
                    </> : <>
                        <DataProfile items={items} updateState={updateState} />
                    </>}
            </Container>
        </>
    )
}

export default Profile;