import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import uf from '../../../../assets/ufConselho.json';


export default function PersonalID({ dados, handleChange }) {
  const [rgExpeditorUf,setRgExpeditorUf] = useState('')
  dados.rgExpeditorUf = rgExpeditorUf;
  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
      <TextField
        placeholder="CPF"
        label="CPF"
        name="cpfNumber"
        variant="outlined"
        onChange={handleChange}
        defaultValue={dados.cpfNumber}
        margin="normal"
        fullWidth
        required
      />
         </Grid>
      <Grid item sm={6}>
      <TextField
        variant="outlined"
        label="Imagem do cpf"
        type='file'
        onChange={handleChange}
        defaultValue={dados.cpfImages}
        name='cpfImages'
        margin="normal"
      />
         </Grid>
      <Grid item sm={6}>
      <TextField
        placeholder="Número do RG"
        label="RG"
        name="rgNumber"
        variant="outlined"
        onChange={handleChange}
        defaultValue={dados.rgNumber}
        margin="normal"
        fullWidth
        />
      </Grid>
      <Grid item sm={6}>
      <TextField
        placeholder="Órgão expeditor do RG"
        label="Órgão expeditor do RG"
        name="rgNumber"
        variant="outlined"
        onChange={handleChange}
        defaultValue={dados.rgExpeditor}
        margin="normal"
        fullWidth
        />
      </Grid>   
         <Grid item sm={6}>
          <Autocomplete
            id='rgExpeditorUf'
            name='rgExpeditorUf'
            options={uf.uf}
            getOptionLabel={(option) => option}
            value={rgExpeditorUf}
            onChange={(event, newValue) => {
              setRgExpeditorUf(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="UF Expeditor" variant="outlined" />}
          />
        </Grid>
        <Grid item sm={6}>
      <TextField
        variant="outlined"
        label="Imagem do RG"
        type='file'
        onChange={handleChange}
        defaultValue={dados.rgImages}
        name='rgImages'
        margin="normal"
      />
         </Grid>
        <Grid item>
        <TextField
        variant="outlined"
        label="Data de Expedição"
        type='date'
        onChange={handleChange} 
        defaultValue={dados.rgExpedition}
        name='rgExpedition'
        margin="normal"
      />
        </Grid>
    </Grid>
  )
}
