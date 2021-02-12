import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function PersonalInfo({dados,handleChange}){
  return(
    <>
        <TextField
              placeholder="Nome"
              label="Nome"
              name="firstName"
              variant="outlined"
              onChange={handleChange}
              defaultValue={dados.firstName}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              placeholder="Sobrenome"
              label="Sobrenome"
              variant="outlined"
              onChange={handleChange}
              defaultValue={dados.familyName}
              name='familyName'
              margin="normal"
              fullWidth
              required
            />
        <TextField
              placeholder="Nome Social"
              label="Nome Social"
              name="socialName"
              variant="outlined"
              onChange={handleChange}
              defaultValue={dados.socialName}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Título de tratamento a ser utilizado antes do nome do paciente."
              label="Título"
              name='title'
              variant="outlined"
              onChange={handleChange}
              defaultValue={dados.title}
              margin="normal"
              fullWidth
            />
            {/* <TextField
              placeholder="Senha"
              label="Senha"
              name='senha'
              variant="outlined"
              onChange={handleChange}
              defaultValue={dados.senha}
              margin="normal"
              fullWidth
            /> */}
    </>
  )
}
