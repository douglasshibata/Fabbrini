import React, { useState } from 'react';
import api from '../../services/api';
import { Button } from '@material-ui/core';
//import './App.css'
function Prontuario() {
    const [textoProntuario, setTextoProntuario] = useState('');
    const idAgenda = localStorage.getItem('idAgenda');
    async function prontuarioSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post(`/agenda/${idAgenda}/prontuario`, { prontuario: textoProntuario });
            console.log(response.status);
            return alert("Enviado com sucesso");
        } catch (error) {
            console.log(error.response);
            alert('Houve um erro ao Salvar')
        }
    }
    return (
            <form onSubmit={prontuarioSubmit}>
                <textarea
                    cols='100%'
                    rows='5'
                    value={textoProntuario}
                    placeholder="Prontuario: Escreva aqui o feedback para o paciente"
                    onChange={e => setTextoProntuario(e.target.value)}
                />
                <Button variant="contained" color='primary'  type='submit'>Salvar</Button>
            </form>
    )
}

export default Prontuario;