import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import api from "../../services/api";
import DateFnsUtils from '@date-io/date-fns'; 
import brLocale from 'date-fns/locale/pt-BR';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
function AddEditForm(props) {
  const [dadosPaciente, setDadosPaciente] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await api.get('/dadosPaciente');
        setDadosPaciente(response.data)
      } catch (error) {
        console.log(error);
        alert("Erro em carregar os dados")
      }
    }
    getItems()
  }, []);
  const [cpfPaciente, setCpfPaciente] = useState('');
  const [cpfProfissional, setcpfProfissional] = useState('');
  const [horario, setHorario] = useState(new Date());

  const [form, setValues] = useState({
    id: 0,
    doctor_cpf: '',
    paciente_cpf: '',
  })
  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const submitFormAdd = async e => {
    e.preventDefault()
    try {
      const response = await api.post('/agenda', {
        doctor_cpf: cpfProfissional,
        paciente_cpf: cpfPaciente,
        horario: horario,
      })
      if (response) setTimeout(function () { alert('Agendado Com sucesso'); window.location.reload() }, 100)

    } catch (error) {
      let mensagemErro = error.response.data.error.message;
      console.log(error.response.data);
      console.log(error.response.data.error.message);
      if (mensagemErro === 'insert into "agenda" ("created_at", "doctor_cpf", "horario", "paciente_cpf", "updated_at") values ($1, $2, $3, $4, $5) returning "id" - insert or update on table "agenda" violates foreign key constraint "agenda_doctor_cpf_foreign"') {
        alert('CPF do médico não encontrado')
      } else if (mensagemErro === 'insert into "agenda" ("created_at", "doctor_cpf", "horario", "paciente_cpf", "updated_at") values ($1, $2, $3, $4, $5) returning "id" - insert or update on table "agenda" violates foreign key constraint "agenda_paciente_cpf_foreign"') {
        alert('CPF do Paciente não encontrado')
      } else if (mensagemErro === 'insert into "agenda" ("created_at", "doctor_cpf", "horario", "paciente_cpf", "updated_at") values ($1, $2, $3, $4, $5) returning "id" - duplicate key value violates unique constraint "agenda_horario_unique"') {
        alert("Horário indisponível")
      }
    }


  }
  const submitFormEdit = async e => {
    e.preventDefault()
    try {
      await api.put(`/agenda/${form.id}`, {
        doctor_cpf: form.doctor_cpf,
        paciente_cpf: form.paciente_cpf,
        horario: horario,
      })
      setTimeout(function () { alert('Atualizado Com sucesso'); window.location.reload() }, 2000)
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  useEffect(() => {
    if (props.item) {
      const { id, doctor_cpf, paciente_cpf, horario } = props.item
      setValues({ id, doctor_cpf, paciente_cpf })
      setHorario(horario)
    }
  }, [props.item])
  return (
    <form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      {props.item ? <>
        <label htmlFor="doctor_cpf">CPF Profissional</label>
        <input type="text" name="doctor_cpf" id="doctor_cpf" onChange={onChange} value={form.doctor_cpf === null ? '' : form.doctor_cpf} required minLength='11' maxLength='11' />
        <label htmlFor="paciente_cpf">CPF Paciente</label>
        <input type="text" name="paciente_cpf" id="paciente_cpf" onChange={onChange} value={form.paciente_cpf === null ? '' : form.paciente_cpf} required minLength='11' maxLength='11' />
        <p style={{ marginTop: 15, marginBottom: 20 }}>
          <label htmlFor='horario'>Data e Hora: </label></p>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
            <DateTimePicker onChange={setHorario} value={horario} />
          </MuiPickersUtilsProvider>
        <div style={{ marginTop: 15, marginBottom: 20 }}>
          <Button type='submit' fullWidth color='primary' variant='contained' >Salvar</Button>
        </div></> :
        <>
          <label htmlFor="doctor_cpf">Profisisonal</label>
          <Autocomplete
            id="lista_profissionais"
            options={dadosPaciente}
            getOptionLabel={(option) => option.nome}
            renderOption={(option) => (
              <React.Fragment>
                {option.ehMedico ?
                  <>{option.cpfUser} - {option.nome} <br /> {option.especialidade} </> : ""}
              </React.Fragment>
            )}
            onChange={(event, value) => setcpfProfissional(value.cpfUser)}

            renderInput={(params) => <TextField {...params} label="Profissionais" variant="outlined" />}
          />
          <label htmlFor="paciente_cpf">Paciente</label>
          <Autocomplete
            id="lista_pacientes"
            options={dadosPaciente}
            getOptionLabel={(option) => option.nome}
            renderOption={(option) => (
              <React.Fragment>
                {option.cpfUser} - {option.nome}
              </React.Fragment>
            )}
            onChange={(event, value) => setCpfPaciente(value.cpfUser)}
            renderInput={(params) => <TextField {...params} label="Pacientes" variant="outlined" />}
          />
          <p style={{ marginTop: 15, marginBottom: 20 }}>
            <label htmlFor='horario'>Data e Hora: </label></p>
          {/*  <input
            type='datetime-local'
            name="horario" id="horario" onChange={onChange} value={form.horario} required /> */}
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
            <DateTimePicker onChange={setHorario} value={horario} />
          </MuiPickersUtilsProvider>
          <div style={{ marginTop: 15, marginBottom: 20 }}>
            <Button type='submit' fullWidth color='primary' variant='contained' >Salvar</Button>
          </div>
        </>}
    </form>
  )
}

export default AddEditForm
