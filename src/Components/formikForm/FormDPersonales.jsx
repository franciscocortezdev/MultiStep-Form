import React from 'react'
import { Grid, TextField, InputLabel, FormHelperText} from '@mui/material'
import Select from 'react-select'




export default function FormDPersonales({values, handleChange, errors, touched, handleBlur, setFieldValue,setFieldTouched}) {

  const estadosCiviles = [
    {
      id: 1,
      label: 'Soltero'
    },
    {
      id: 2,
      label: 'Casado'
    },
    {
      id: 3,
      label: 'Divorciado'
    }
  ]
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
            error={touched.Nombre && Boolean(errors.Nombre)}
            helperText={touched.Nombre && errors.Nombre}
            onBlur={handleBlur}
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
            error={touched.Apellido && Boolean(errors.Apellido)}
            helperText={touched.Apellido && errors.Apellido}
            onBlur={handleBlur}
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
            error={touched.Direccion && Boolean(errors.Direccion)}
            helperText={touched.Direccion && errors.Direccion}
            onBlur={handleBlur}
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
            error={touched.Edad && Boolean(errors.Edad)}
            helperText={touched.Edad && errors.Edad}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel >Estado civil</InputLabel>
          <Select
          placeholder={'Seleccione su estado civil'}
          options={estadosCiviles}
          getOptionValue={option => option.id}
          getOptionLabel={option => option.label}
          value = {
            estadosCiviles.filter(opt => opt.id === values.estadoCivil)
          }
          onChange={m=>{
            setFieldValue('estadoCivil', m.id)
          }}
          onBlur={()=>{
            setFieldTouched('estadoCivil');
          }}
          styles={{
            control: (provided, state) => ( errors.estadoCivil && touched.estadoCivil ? { ...provided, borderColor: 'red'}
            : provided )
          }}
        />
        {errors.estadoCivil && touched.estadoCivil && <FormHelperText error={true}>{errors.estadoCivil}</FormHelperText>}
        </Grid>
       
        
      </Grid>

    </>

  )
}
