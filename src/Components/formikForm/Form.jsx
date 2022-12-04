import React, { useState } from "react";
import {
  Typography,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
} from "@mui/material";
import FormDPersonales from "./FormDPersonales";
import FormContacto from "./FormContacto";
import FormInfoLaboral from "./FormInfoLaboral";
import { useFormik } from "formik";

export default function Form() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Datos personales",
    "Informacion de contacto",
    "Informacion laboral",
  ];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step, Formulario) {
    const steps = [FormDPersonales, FormContacto, FormInfoLaboral];
    const FormActual = steps[step];

    return <FormActual Formulario={Formulario} />;
  }

  const Formulario = useFormik({
    initialValues: {
      Nombre: "",
      Apellido: "",
      Direccion: "",
      Edad: "",
      Telefono: "",
      Correo: "",
      Profesion: "",
      TelefonoTrabajo: "",
      DireccionTrabajo: "",
      estadoCivil: null,
      tieneWhatsapp: false,
    },
    validate: (values) => {
      const errors = {};
      if (!values.Nombre) {
        errors.Nombre = "El nombre es requerido";
      }
      if (!values.Edad) {
        errors.Edad = "Fecha de nacimiento requerida";
      }
      if (values.estadoCivil === null) {
        errors.estadoCivil = "Estado civil requerido";
      }

      if (activeStep === 1) {
        if (!values.Telefono) {
          errors.Telefono = "Telefono requerido";
        }
      }

      if (activeStep === 2) {
        if (!values.Profesion) {
          errors.Profesion = "Profesion requerida";
        }
      }

      return errors;
    },
    onSubmit: (values) => {
      if (activeStep === 2) {
        //Enviar datos
      } else {
        handleNext();
      }
    },
  });

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Registro de usuario
          </Typography>
          <Typography component="h6" variant="h6" align="center">
            Formik
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={Formulario.handleSubmit}>
            {getStepContent(activeStep, Formulario)}

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Regresar
                </Button>
              )}

              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={Formulario.handleSubmit}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Registrar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={Formulario.handleSubmit}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Siguiente
                </Button>
              )}
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
}
