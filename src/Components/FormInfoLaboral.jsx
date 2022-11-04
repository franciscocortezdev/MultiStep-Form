import React from 'react'
import { Grid, TextField} from '@mui/material';


export default function FormInfoLaboral({values, handleChange, errors, touched, handleBlur, setFieldValue,setFieldTouched}) {




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
            error={touched.Profesion && Boolean(errors.Profesion)}
            helperText={touched.Profesion && errors.Profesion}
            onBlur={handleBlur}
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
            error={touched.TelefonoTrabajo && Boolean(errors.TelefonoTrabajo)}
            helperText={touched.TelefonoTrabajo && errors.TelefonoTrabajo}
            onBlur={handleBlur}
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
            error={touched.DireccionTrabajo && Boolean(errors.DireccionTrabajo)}
            helperText={touched.DireccionTrabajo && errors.DireccionTrabajo}
            onBlur={handleBlur}
          />
          
        </Grid>
        
      </Grid>
    </>
  )
}
