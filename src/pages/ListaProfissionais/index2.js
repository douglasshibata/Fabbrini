import React, { useState, useEffect } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import Navbar from '../Navbar/index';
import api from '../../services/api';
import ChatBot from '../Chatbot';
import MUIDataTable from "mui-datatables";


function FullListProfissional() {

  const [data, setData] = useState([])
  const medico = [];

  const getItems = async () => {
    try {
      const response = await api.get('/user');
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItems()
  }, []);
  data.forEach((value,index)=>{
    if(value.ehMedico){
      medico.push(value)
    }
  })
  const columns = [
    {
     name: "nome",
     label: "Nome",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "email",
     label: "Email",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "especialidade",
     label: "Especialidade",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "conselho",
     label: "Conselho",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "ufConselho",
     label: "UF",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "registro",
     label: "Registro",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "telefone",
     label: "Telefone",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];
   const options={
    download:false,
    downloadOptions:false,
    print:false,
    responsive:'vertical',
    selectableRows: 'multiple',
    textLabels: {
      body: {
        noMatch: "Nenhum Profissional Encontrado",
        toolTip: "Sort",
        columnHeaderTooltip: column => `Sort for ${column.label}`
      },
      pagination: {
        next: "Próxima Página",
        previous: "Página Anterior",
        rowsPerPage: "Linhas por Página:",
        displayRows: "of",
      },
      toolbar: {
        search: "Pesquisar",
        downloadCsv: "Download CSV",
        print: "Imprimir",
        viewColumns: "Ver Colunas",
        filterTable: "Filtrar Tabela",
      },
      filter: {
        all: "Todos",
        title: "Filtro",
        reset: "LIMPAR",
      },
      viewColumns: {
        title: "Mostrar Colunas",
        titleAria: "Mostrar/Esconder Colunas da Tabela",
      },
      selectedRows: {
        text: "Linhas Selecionadas",
        delete: "Apagar",
        deleteAria: "Apagar Linhas Selecionados",
      },
    }
   }
     return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 style={{ margin: "20px 0", color: "#589303" }}>Profissionais</h1>
            <h6 style={{ margin: "20px 0", color: "#000" }}>Encontre o profissional certo para você</h6>
          </Grid>
          
          <Grid item xs={12}>
          {data.length > 0 ? 
          <MUIDataTable
            title={"Lista de Profissionais"}
            data={medico}
            columns={columns}
            options={options}
          />
          :
          <Typography>
            Não Há Profissionais Cadastrados
          </Typography>
          }
        </Grid>
        </Grid>
      </Container>
      <ChatBot />
    </>
  )
}

export default FullListProfissional
