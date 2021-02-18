import React from 'react'
import { red } from '@material-ui/core/colors';
import { Card, Avatar, CardHeader, CardContent, Typography, Container } from '@material-ui/core';
import ModalProfessional from './UModalProf'
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
function DataProfessional(props) {
  const classes = useStyles();
  const pacientes = props.items.map((value,index)=>(
    <Card className={classes.root} key={value._id}>
    <CardHeader
        avatar={<Avatar aria-label={value.nome} className={classes.avatar} />}
        title={value.nome}
        subheader={value.email}
        action={

            <ModalProfessional buttonLabel="Editar" item={value} updateState={props.updateState} />
        }
    />
    <CardContent>
        <Typography variant="h6" component="h3">
            <p>CPF: {value.cpfNumber}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>{value.conselho} - {value.ufConselho}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>Especialidade: {value.especialidade}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>TELEFONE: {value.telefone}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>Registro: {value.registro}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>STATUS: {value.ativo ? `ATIVO` : `INATIVO`}</p>
        </Typography>
    </CardContent>
</Card>
  )); 

  return (
    <Container>
        {pacientes}
    </Container>
  )
}

export default DataProfessional
