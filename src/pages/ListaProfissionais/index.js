import React, { useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import DataProfissional from './card';
import Navbar from '../Navbar/index';
import api from '../../services/api';
import ChatBot from '../Chatbot';

function FullListProfissional(props) {

  const [items, setItems] = useState([])

  const getItems = async () => {
    try {
      const response = await api.get('/user');
      setItems(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItems()
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 style={{ margin: "20px 0", color: "#589303" }}>Profissionais</h1>
            <h6 style={{ margin: "20px 0", color: "#000" }}>Encontre o profissional certo para você</h6>
          </Grid>
            <DataProfissional items={items} />
        </Grid>
      </Container>
      <ChatBot/>
    </>
  )
}

export default FullListProfissional
