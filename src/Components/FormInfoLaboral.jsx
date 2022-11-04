import React from 'react'
import {Typography, Grid, TextField} from '@mui/material';


export default function FormInfoLaboral() {




  return (
    <>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name='Profesion'
            label="Profesion"
            fullWidth
            variant="standard"
          />
          
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            name='TelefonoTrabajo'
            label="Telefono del trabajo"
            fullWidth
            variant="standard"
            type='number'
          />
          
        </Grid>

        <Grid item xs={12}>
          <TextField
            name='DireccionTrabajo'
            label="Direccion del trabajo"
            fullWidth
            variant="standard"
  
          />
          
        </Grid>
        
      </Grid>
    </>
  )
}
