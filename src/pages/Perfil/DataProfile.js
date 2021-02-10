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
  const pacientes = props.items.map((value,index)=>(
<Card className={classes.root} key={value._id}>
    <CardHeader
        avatar={<Avatar aria-label={value.nome} className={classes.avatar} />}
        title={value.nome}
        subheader={value.email}
    />
    <CardContent>
        <Typography variant="h6" component="h3">
            <p>CPF: {value.cpfUser}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>Nome: {value.nome}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>TELEFONE: {value.telefone}</p>
        </Typography>
        <Typography variant="h6" component="h3">
            <p>STATUS: {value.ativo ? `ATIVO` : `INATIVO`}</p>
        </Typography>
        <ModalProfile buttonLabel="Editar" item={value} updateState={props.updateState} />
    </CardContent>
</Card>
  )); 

  return (
    <Container>
        {pacientes}
    </Container>
  )
}

export default DataProfile
