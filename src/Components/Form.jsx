import React, {useState} from 'react'
import {
  Typography, 
  Container, 
  Paper, 
  Stepper, 
  Step,
  StepLabel,
  Box,
  Button
  
} from '@mui/material';
import FormDPersonales from './FormDPersonales';
import FormContacto from './FormContacto';
import FormInfoLaboral from './FormInfoLaboral';
import { useFormik } from 'formik';


export default function Form() {
  const [activeStep, setActiveStep] = useState(0);
 
  const steps = ['Datos personales', 'Informacion de contacto', 'Informacion laboral'];
  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  

  function getStepContent(step, values, handleChange, handleSubmit, errors, touched, handleBlur) {
   
    switch (step) {
      case 0:
        return <FormDPersonales values={values} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} touched={touched} handleBlur={handleBlur}/>;
      case 1:
        return <FormContacto values={values} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} touched={touched}/>;
      case 2:
        return <FormInfoLaboral values={values} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} touched={touched}/>;
      default:
        throw new Error('Unknown step');
    }
  }


  const Formulario = useFormik({
    initialValues: { 
      Nombre: '',
      Apellido: '',
      Direccion: '',
      Edad: '', 
      Telefono: '',
      Correo:'',
      Profesion: '',
      TelefonoTrabajo: '',
      DireccionTrabajo: ''
    },
    validate: (values) => {
      const errors = {};
      if (!values.Nombre) {
        errors.Nombre = 'El nombre es requerido';
                  
      }
      if (!values.Edad){
        errors.Edad = 'Fecha de nacimiento requerida'
      }

      if(!values.Telefono){
        errors.Telefono = 'Telefono requerido'
      }

      if(!values.Profesion){
        errors.Profesion = 'Profesion requerida'
      }
     
      return errors;
    },
    onSubmit: (values) => {
      if (activeStep === 2){
        console.log('enviado')
      }else{
        handleNext()
      }
    }
  })

  

  return (
    <>


      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

          <Typography component="h1" variant="h4" align="center">
            Registro de usuario
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
              <form onSubmit={Formulario.handleSubmit}>

              {getStepContent(activeStep, Formulario.values, Formulario.handleChange, Formulario.handleSubmit, Formulario.errors, Formulario.touched, Formulario.handleBlur)}



              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Regresar
                  </Button>
                )}

                {
                  activeStep === steps.length - 1 
                  ? (
                    <Button
                      variant="contained"
                      onClick={Formulario.handleSubmit}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Registrar
                    </Button>
                  )
                  : (
                    <Button
                      variant="contained"
                      onClick={Formulario.handleSubmit}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Siguiente
                    </Button>
                  )
                }

              </Box>
           
              </form>
        </Paper>
  
      </Container>

    
    
    </>

  )
}
