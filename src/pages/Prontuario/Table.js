import React from 'react'
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns'
import { ptBR } from "date-fns/locale";
import { Document, Page, Text, View, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
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
});
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
    const formattedDate = format(
      date,
      "'Dia' dd 'de' MMMM', às ' HH:mm'h'", { locale: ptBR }
    );
    localStorage.setItem('idAgenda', item.id)
    return (
      <TableRow key={item.id}>
        <TableCell>{item.profissionalNome}</TableCell>
        <TableCell>{item.pacienteNome}</TableCell>
       {ehMedico === 'true' ? <>
        <TableCell>
         <PDFDownloadLink document={
                <Document>
                  <Page size="A4">
                    <Header />
                    <View>
                      <Text style={styles.data}>Dados do Paciente </Text>
                      <Text style={styles.text}>Paciente : {item.profissionalNome} </Text>
                    </View>
                    <View style={styles.body}>
                      <Text style={styles.data}>Dados do Médico </Text>
                      <Text style={styles.text}>Médico : {item.pacienteNome}</Text>
                      <Text style={styles.text}>Especialidade:{item.especialidade} </Text>
                      <Text style={styles.text}>{item.conselho} - {item.ufConselho}</Text>
                      <Text style={styles.text}>Registro: {item.registro} </Text>
                      <Text style={styles.text}>Telefone: {item.profissionalTelefone} </Text>
                      <Text style={styles.text}>Email: {item.profissionalEmail} </Text>
                      <Text style={styles.data}>Observações </Text>
                      <Text style={styles.text}>{item.prontuario === null ? '' : item.prontuario}</Text>
                      <Text style={styles.data}>Data e Hora da Consulta</Text>
                      <Text style={styles.text}>{formattedDate}</Text>
                    </View>
                    <Footer />
                  </Page>
            </Document>} fileName={`${date.toUTCString()}.pdf`}>
            {item.prontuario === null ?
              '' : ({ blob, url, loading, error }) => (loading ? 'Carregando os dados...' : 'Baixar Prontuário!')}
          </PDFDownloadLink> 
        </TableCell></>: <TableCell></TableCell>}
  
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
             {ehMedico === 'true' ?
              <TableCell>Prontuário</TableCell> : <TableCell></TableCell>}
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
