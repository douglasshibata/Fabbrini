import React from 'react'
import { red } from '@material-ui/core/colors';
import { Card, Avatar, CardHeader, CardContent, Typography } from '@material-ui/core';
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
  const pacientes = props.items; 

  return (
    <Card className={classes.root}>
    <CardHeader
        avatar={<Avatar aria-label={pacientes.nome} className={classes.avatar} />}
        title={pacientes.nome}
        subheader={pacientes.email}
    />
    <CardContent>
        <Typography variant="h6" component="h3">
            <p>CPF: {pacientes.cpfUser}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>{pacientes.conselho} - {pacientes.ufConselho}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>Especialidade: {pacientes.especialidade}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>TELEFONE: {pacientes.telefone}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>Registro: {pacientes.registro}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>STATUS: {pacientes.ativo ? `ATIVO` : `INATIVO`}</p>
        </Typography>
        <ModalProfessional buttonLabel="Editar" item={pacientes} updateState={props.updateState} />
    </CardContent>
</Card>
  )
}

export default DataProfessional
