import React from 'react'
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});
function DataProfissional(props) {
  const classes = useStyles();
  //const ehMedico = localStorage.getItem('ehMedico');
  const items = props.items.map(item => {
    return (
      <TableRow key={item.id}>
        {item.ehMedico ? <>
          <TableCell>{item.nome}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell> {item.telefone}</TableCell>
          <TableCell>{item.conselho} - {item.ufConselho}</TableCell>
          <TableCell> {item.especialidade}</TableCell>
          <TableCell>{item.registro}</TableCell>
          <TableCell> {item.created_at}</TableCell>
        </>
          : <></>}
      </TableRow>
    )
  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Telefone </TableCell>
            <TableCell>Conselho </TableCell>
            <TableCell>Especialidade</TableCell>
            <TableCell>Registro</TableCell>
            <TableCell>Membro desde</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataProfissional
