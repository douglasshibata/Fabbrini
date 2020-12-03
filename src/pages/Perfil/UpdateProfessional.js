import React, { useState,useEffect } from 'react';
import { Button, Select, MenuItem, TextField } from '@material-ui/core';
import { Row, Col } from 'reactstrap';
import api from "../../services/api";
import Autocomplete from '@material-ui/lab/Autocomplete';
import conselhos from '../../assets/conselho.json';
import especialidades from '../../assets/especialidade.json';
import uf from '../../assets/ufConselho.json';

const EditProfissional = (props) => {

  const [nomeProf, setNomeProf] = useState('');
  const [emailProf, setEmailProf] = useState('');
  const [telefoneProf, setTelefoneProf] = useState('');
  //const [senha, setSenha] = useState('');
  const [registro, setRegistro] = useState('');
  const [conselho, setConselho] = useState(null);
  const [ufConselho, setUfconselho] = useState(null);
  const [especialidade, setEspecialidade] = useState(null);
  const [ativo, setAtivo] = useState('');

  const cpfUser = localStorage.getItem('cpfUser');

  const submitFormEdit = async e => {
    e.preventDefault()
    try {
      const response = await api.put(`/user`, {
        nome: nomeProf,
        email: emailProf,
        telefone: telefoneProf,
       // password: senha,
        ativo: ativo,
        conselho: conselho,
        ufConselho: ufConselho,
        registro: registro,
        especialidade: especialidade,
        ehMedico: true,
      }, { headers: { cpfUser: cpfUser, } });
      if (response) setTimeout(function () { alert('Atualizado Com sucesso'); window.location.reload() }, 200)
    } catch (error) {
      console.log(error.response.data.error.message);
      let mensagemErro = error.response.data.error.message;
      if (mensagemErro === 'update "users" set "email" = $1, "nome" = $2, "password" = $3, "telefone" = $4, "conselho" = $5, "ufConselho" = $6, "registro" = $7, "especialidade" = $8, "ativo" = $9, "ehMedico" = $10, "ehPaciente" = $11, "created_at" = $12, "updated_at" = $13 where "id" = $14 - null value in column "email" violates not-null constraint') {
        alert('Email não pode estar em branco')
      } else if (mensagemErro === 'update "users" set "nome" = $1, "password" = $2, "telefone" = $3, "conselho" = $4, "ufConselho" = $5, "registro" = $6, "especialidade" = $7, "ativo" = $8, "ehMedico" = $9, "ehPaciente" = $10, "created_at" = $11, "updated_at" = $12 where "id" = $13 - null value in column "nome" violates not-null constraint') {
        alert('Nome não pode estar em Branco')
      } else if (mensagemErro === 'update "users" set "email" = $1, "nome" = $2, "password" = $3, "telefone" = $4, "conselho" = $5, "ufConselho" = $6, "registro" = $7, "especialidade" = $8, "ativo" = $9, "ehMedico" = $10, "ehPaciente" = $11, "created_at" = $12, "updated_at" = $13 where "id" = $14 - null value in column "password" violates not-null constraint') {
        alert('Senha não pode estar em Branco')
      }
    }
  }

  useEffect(() => {
    if (props.item) {
      const { nome, email, telefone,  ativo, conselho, ufConselho, registro, especialidade, } = props.item
      setNomeProf(nome);
      setEmailProf(email);
      setTelefoneProf(telefone);
   //   setSenha(password);
      setAtivo(ativo);
      setConselho(conselho);
      setUfconselho(ufConselho);
      setRegistro(registro);
      setEspecialidade(especialidade)
    }
  }, [props.item])
  return (
    <form onSubmit={submitFormEdit}>
      <label htmlFor='nomeProf'>Nome</label>
      <input type='text' name="nomeProf" id="nomeProf" onChange={e => setNomeProf(e.target.value)} value={nomeProf || ""} required />
      <label htmlFor="emailProf">Email</label>
      <input type="email" name="emailProf" id="emailProf" onChange={e => setEmailProf(e.target.value)} value={emailProf === null ? '' : emailProf} required />
      <label htmlFor="telefoneProf">Telefone</label>
      <input type="text" name="telefoneProf" id="telefoneProf" onChange={e => setTelefoneProf(e.target.value)} value={telefoneProf === null ? '' : telefoneProf} placeholder="(11) 12345-1234" required />
      {/* <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" onChange={e => setSenha(e.target.value)} value={senha === null ? '' : senha} required /> */}
      <label htmlFor="registro">registro</label>
      <input type="text" name="registro" id="registro" onChange={e => setRegistro(e.target.value)} value={registro === null ? '' : registro} required />
      <Row form >
        <Col md={6}>
          <label htmlFor="conselho">Conselho</label>
          <Autocomplete
            id="conselho"
            options={conselhos.conselho}
            getOptionLabel={(option) => option}
            value={conselho}
            onChange={(event, newValue) => {
              setConselho(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Conselho" variant="outlined" />}
          />
        </Col>
        <Col md={6}>
          <label htmlFor="ufConselho">UF Conselho</label>
          <Autocomplete
            id='ufConselho'
            options={uf.uf}
            getOptionLabel={(option) => option}
            value={ufConselho}
            onChange={(event, newValue) => {
              setUfconselho(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="UF Conselho" variant="outlined" />}
          />
        </Col>
      </Row>
      <label htmlFor="especialidade">Especialidade</label>
      <Autocomplete
        id='especialidade'
        options={especialidades.especialidade}
        getOptionLabel={(option) => option}
        value={especialidade}
        onChange={(event, newValue) => {
          setEspecialidade(newValue);
        }}
        renderInput={(params) => <TextField {...params} label="Especialidade" variant="outlined" />}
      />
      <label htmlFor="ativo">Status</label>
      <Select type="select" name='ativo' id='ativo' fullWidth value={ativo} onChange={e => setAtivo(e.target.value)}>
        <MenuItem value={true}>Ativo</MenuItem>
        <MenuItem value={false} >Inativar</MenuItem>
      </Select>
      <Button type='submit' color='primary' fullWidth variant="contained" style={{ marginTop: 10 }}>Salvar</Button>
    </form>
  )
}

export default EditProfissional
