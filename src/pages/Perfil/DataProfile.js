import React from 'react'
import { red } from '@material-ui/core/colors';
import { Card, Avatar, CardHeader, CardContent, Typography, Container } from '@material-ui/core';
import ModalProfile from './ModalProfile'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
      maxWidth: '100%',
      paddingTop: '56',
      marginTop: 50,
  },
  bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
  },
  title: {
      fontSize: 15,
  },
  avatar: {
      backgroundColor: red[500],
  },
}));
function DataProfile(props) {
  const classes = useStyles();
  const pacientes = props.items


  return (
    <Container>
       <Card className={classes.root} key={pacientes._id}>
    <CardHeader
        avatar={<Avatar aria-label={pacientes.nome} className={classes.avatar} />}
        title={pacientes.nome}
        subheader={pacientes.email}
        action={
            <ModalProfile buttonLabel="Editar" item={pacientes} updateState={props.updateState} />
        }
    />
    <CardContent>
        <Typography variant="h6" component="h3">
            <p>CPF: {pacientes.cpfNumber}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>Nome: {pacientes.firstName}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>TELEFONE: {pacientes.telefone}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>STATUS: {pacientes.ativo ? `ATIVO` : `INATIVO`}</p>
        </Typography>
    </CardContent>
</Card>
    </Container>
  )
}

export default DataProfile
