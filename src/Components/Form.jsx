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

  

  function getStepContent(step, values, handleChange, handleSubmit) {
    console.log('values', values)
    switch (step) {
      case 0:
        return <FormDPersonales values={values} handleChange={handleChange} handleSubmit={handleSubmit}/>;
      case 1:
        return <FormContacto values={values} handleChange={handleChange} handleSubmit={handleSubmit}/>;
      case 2:
        return <FormInfoLaboral values={values} handleChange={handleChange} handleSubmit={handleSubmit}/>;
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
    //   if (!values.email) {
    //     errors.email = 'Requerido';
                  
    //   }
    //   if (values.modulo === null) {
    //    errors.modulo = 'Debe elegir un modulo';

    //  }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values)

    }
  })

  const handleFinish = () =>{
    console.log('finish', Formulario.values)
  }

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
          
          
              {getStepContent(activeStep, Formulario.values, Formulario.handleChange, Formulario.handleSubmit)}



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
                      onClick={handleFinish}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Registrar usuario
                    </Button>
                  )
                  : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Siguiente
                    </Button>
                  )
                }

              </Box>
           
        
        </Paper>
  
      </Container>

    
    
    </>

  )
}
