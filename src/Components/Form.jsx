import React, {useState} from 'react'
import ShoppingForm from './ShoppingForm';
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
import PaymentForm from './PaymentForm';
import ReviewForm from './ReviewForm';
import { useFormik } from 'formik';


export default function Form() {
  const [activeStep, setActiveStep] = useState(0);
 
  const steps = ['Shipping address', 'Payment details', 'Review your order'];
  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleFinish = () =>{
    console.log('finish')
  }


  


  function getStepContent(step, values, handleChange, handleSubmit) {
    console.log('values', values)
    switch (step) {
      case 0:
        return <ShoppingForm values={values} handleChange={handleChange} handleSubmit={handleSubmit}/>;
      case 1:
        return <PaymentForm values={values} handleChange={handleChange} handleSubmit={handleSubmit}/>;
      case 2:
        return <ReviewForm values={values} handleChange={handleChange} handleSubmit={handleSubmit}/>;
      default:
        throw new Error('Unknown step');
    }
  }


  const Formulario = useFormik({
    initialValues: { 
      firstName: '',
      lastName: '',
      address1: '',
      address2: '', 
      city: '',
      state:'',
      zip: '',
      country:''
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

  return (
    <>


      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

          <Typography component="h1" variant="h4" align="center">
            Checkout
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
                    Back
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
                      Place order
                    </Button>
                  )
                  : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Next
                    </Button>
                  )
                }

              </Box>
           
        
        </Paper>
  
      </Container>

    
    
    </>

  )
}
