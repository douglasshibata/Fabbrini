import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Modal';
import DataTable from './Table';
import Navbar from '../Navbar/index';
import api from '../../services/api'
import ChatBot from '../Chatbot';

function App(props) {
  const [items, setItems] = useState([]);
  const ehMedico = localStorage.getItem('ehMedico');
  const getItems = async () => {
    try {
      const response = await api.get('/user');
      setItems(response.data);
    } catch (error) {
      console.log(error.response);
      console.log(error);
    }
  }
  const addItemToState = (item) => {
    setItems([...items, item])
  }

  const updateState = (item) => {
    const itemIndex = items.findIndex(data => data.id === item.id)
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
    setItems(newArray)
  }

  useEffect(() => {
    getItems()
  }, []);
  return (
    <>
      <Navbar />

      <Container className="App">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0", color: "#768549" }}>Pacientes</h1>
          </Col>
        </Row>
    { ehMedico === 'true'?
        <Row>
          <Col>
            <ModalForm buttonLabel="Adicionar Paciente" addItemToState={addItemToState} />
          </Col>
        </Row>:<div></div>}
        <Row>
          <Col>
            <DataTable items={items} updateState={updateState} />
          </Col>
        </Row>
      </Container>
      <ChatBot/>
    </>
  )
}

export default App
