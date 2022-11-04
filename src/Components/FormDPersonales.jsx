import React from 'react'
import { Grid, TextField, InputLabel} from '@mui/material'




export default function FormDPersonales({values, handleChange, handleSubmit}) {



  return (
    <>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="Nombre"
            label="Nombre"
            fullWidth
            variant="standard"
            value={values.Nombre}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            name="Apellido"
            label="Apellido"
            fullWidth
            variant="standard"
            value={values.Apellido}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            name="Direccion"
            label="Direccion"
            fullWidth
            variant="standard"
            value={values.Direccion}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel >Fecha de Nacimiento</InputLabel>
          <TextField
            name="Edad"
            fullWidth
            variant="standard"
            value={values.Edad}
            onChange={handleChange}
            type='date'
          />
        </Grid>
       
                
      </Grid>
    </>

  )
}
