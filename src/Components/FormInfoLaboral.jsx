import React from 'react'
import { Grid, TextField} from '@mui/material';


export default function FormInfoLaboral({values, handleChange, handleSubmit}) {




  return (
    <>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name='Profesion'
            label="Profesion"
            fullWidth
            variant="standard"
            value={values.Profesion}
            onChange={handleChange}
          />
          
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            name='TelefonoTrabajo'
            label="Telefono del trabajo"
            fullWidth
            variant="standard"
            type='number'
            value={values.TelefonoTrabajo}
            onChange={handleChange}
          />
          
        </Grid>

        <Grid item xs={12}>
          <TextField
            name='DireccionTrabajo'
            label="Direccion del trabajo"
            fullWidth
            variant="standard"
            value={values.DireccionTrabajo}
            onChange={handleChange}
          />
          
        </Grid>
        
      </Grid>
    </>
  )
}
