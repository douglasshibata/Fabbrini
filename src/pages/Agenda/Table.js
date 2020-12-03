import React from 'react'
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import ModalForm from './Modal'
import { makeStyles } from '@material-ui/core/styles';
import DuoIcon from '@material-ui/icons/Duo';
import { format, isBefore } from 'date-fns'
import { ptBR } from "date-fns/locale";
/*import { Document, Page, Text, View, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import Header from './components/Header';
import Footer from './components/Footer';
 const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    marginLeft: 10,
  },
  text: {
    width: '60%',
    margin: 10,
    textAlign: 'justify',
  },
  data: {
   color:'red'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
},
}); */
const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});
function DataTable(props) {
  const classes = useStyles();
  const ehMedico = localStorage.getItem('ehMedico');
  const items = props.items.map(item => {
    const date = new Date(item.horario)
    const dataAtual = new Date();
    const horario = date.getTime();
    const formattedDate = format(
      date,
      "'Dia' dd 'de' MMMM', às ' HH:mm'h'", { locale: ptBR }
    );
    const horarioAgendado = isBefore(horario, dataAtual);
    localStorage.setItem('idAgenda', item.id)
    return (
      <TableRow key={item.id}>
        <TableCell>{item.profissionalNome}</TableCell>
        <TableCell>{item.pacienteNome}</TableCell>
        <TableCell>{formattedDate}</TableCell>
        <TableCell align='justify'>
          {horarioAgendado ? <Button href='/chat' color='primary'><DuoIcon /></Button> :
            <Button disabled color='inherit'><DuoIcon /></Button>}
        </TableCell>
        {ehMedico === 'true' ?
          <TableCell>
            <div style={{ width: "10%" }}>
              <ModalForm buttonLabel="Editar" item={item} updateState={props.updateState} />
            </div>
          </TableCell> :
          <TableCell></TableCell>}
      </TableRow>
    )
  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Profissional</TableCell>
            <TableCell>Paciente</TableCell>
            <TableCell>Horario</TableCell>
            <TableCell>Vídeo</TableCell>
            {ehMedico === 'true' ?
              <TableCell>Editar</TableCell> : <TableCell></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {items}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
