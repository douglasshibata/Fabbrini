import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core/';
import api from '../../../../services/api';
import { Alert } from '@material-ui/lab';
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom';

export default function ConfirmarDados({ dados }) {
  console.log(dados);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true)
      await api.post('/user', dados);
      setLoading(false)
      alert('Cadastro Realizado com sucesso')
      history.push('/')
    } catch (error) {
      setLoading(false)
      console.log(error.response.data);
      console.log(error.response.data.message);
      if (error.response.data.message) {
        let mensagemErro = error.response.data.message.error;
        setError(mensagemErro)
        alert(mensagemErro)
      }
    }

  }
  
  
  // rgExpeditor
  // rgExpeditorUf
  // rgImages
  // endZIP
  // endState
  // endCity
  // endDistrict
  // endDirection
  // endComplement
  // telefoneNumero
  // telefoneTipo
  return (
    <>
      {error &&
        <Alert severity="error">
          {error}
        </Alert>}
      {loading ? <ReactLoading type={'spin'} color={'#123'} height={'20%'} width={'20%'} /> : <></>}
      <List>
        <ListItem>
          <ListItemText primary="Nome" secondary={dados.firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Sobrenome" secondary={dados.familyName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Nome Social" secondary={dados.socialName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Titulo" secondary={dados.title} />
        </ListItem>
        <ListItem>
          <ListItemText primary="CPF" secondary={dados.cpfNumber} />
          <ListItemText primary="CPF" secondary={dados.cpfImages} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={dados.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Telefone" secondary={dados.telefone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="RG" secondary={dados.rgNumber} />
          <ListItemText primary="rgExpedition" secondary={dados.rgExpedition} />
        </ListItem>
      </List>
      <form onSubmit={handleSubmit}>
        <Button color='secondary' variant='contained' fullWidth type='submit'>Confirmar Dados</Button>
      </form>
    </>
  );


}

