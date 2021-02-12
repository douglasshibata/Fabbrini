import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import uf from '../../../../assets/ufConselho.json';


export default function Address({ dados, handleChange }) {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
      <TextField
        placeholder="CEP"
        label="CEP"
        name=" endZIP"
        variant="outlined"
        onChange={handleChange}
        defaultValue={dados.endZIP}
        margin="normal"
        fullWidth
        required
      />
         </Grid>
         <Grid item sm={6}>
          <Autocomplete
            id='endState'
            name='endState'
            fullWidth
            options={uf.uf}
            getOptionLabel={(option) => option}
            value={dados.endState}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
          />
        </Grid>
      <Grid item sm={6}>
      <TextField
        variant="outlined"
        label="Cidade"
        type='text'
        onChange={handleChange}
        defaultValue={dados.endCity}
        name='endCity'
        margin="normal"
        fullWidth
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
      <TextField
        variant="outlined"
        label="Imagem do RG"
        type='file'
        onChange={handleChange}
        defaultValue={dados.rgImages}
        name='rgImages'
        margin="normal"
        fullWidth
      />
         </Grid>
      
    </Grid>
  )
}
