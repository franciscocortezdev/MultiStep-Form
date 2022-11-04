import React from 'react'
import { Grid, TextField} from '@mui/material';



export default function FormContacto({values, handleChange, handleSubmit, errors, touched, handleBlur}) {
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
            value={values.Telefono}
            onChange={handleChange}
            error={touched.Telefono && Boolean(errors.Telefono)}
            helperText={touched.Telefono && errors.Telefono}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Correo"
            name='Correo'
            fullWidth
            variant="standard"
            value={values.Correo}
            onChange={handleChange}
            error={touched.Correo && Boolean(errors.Correo)}
            helperText={touched.Correo && errors.Correo}
            onBlur={handleBlur}

          />
        </Grid>
        
        
      </Grid>
    </>
  )
}
