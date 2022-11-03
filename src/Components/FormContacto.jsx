import React from 'react'
import { Grid, TextField} from '@mui/material';



export default function FormContacto() {
  return (
    <>

      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>
          <TextField
            name='Telefono'
            label="Telefono"
            fullWidth
            variant="standard"
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Correo"
            name='Correo'
            fullWidth
            variant="standard"
          />
        </Grid>
        
        
      </Grid>
    </>
  )
}
