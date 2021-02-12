import { Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import api from '../../services/api';
import Navbar from '../Navbar'

function DetalheProfissional(props) {

    const [detalheProfissional, setDetalheProfissional] = useState([])

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await api.get(`/user/${props.match.params.id}`);
                setDetalheProfissional(response.data)
            } catch (error) {
                console.log(error);
            }
        };
        getItems()
    }, [props.match.params.id]);
    console.log(detalheProfissional)
    return (
        <>
            <Navbar />
            <Container>
                <Grid container spacing={3}>
                    {detalheProfissional.map((value, index) => {
                        return (
                            <Grid item xs={6} key={value._id}>
                                <h2>Perfil</h2>
                                <Grid item xs={6}>
                                    {value.nome}
                                </Grid>
                                <Grid item xs={6}>
                                    {value.conselho}
                                </Grid>
                            </Grid>

                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default DetalheProfissional
