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
import { useForm } from "react-hook-form";

export default function FormRHF() {
  const [activeStep, setActiveStep] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Nombre: "",
      Apellido: "",
      Direccion: "",
      Edad: "",
      estadoCivil: null,
      Telefono: "",
      Correo: "",
      Profesion: "",
      TelefonoTrabajo: "",
      DireccionTrabajo: "",
      tieneWhatsapp: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(getValues("estadoCivil"));

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

  function getStepContent(step, register, setValue, getValues, errors) {
    switch (step) {
      case 0:
        return (
          <FormDPersonales
            register={register}
            setValue={setValue}
            getValues={getValues}
            errors={errors}
          />
        );
      case 1:
        return <FormContacto register={register} />;
      case 2:
        return <FormInfoLaboral register={register} />;
      default:
        throw new Error("Unknown step");
    }
  }

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
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form>
            {getStepContent(activeStep, register, setValue, getValues, errors)}

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Regresar
                </Button>
              )}

              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  onClick={handleBack}
                >
                  Registrar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  onClick={handleSubmit(onSubmit)}
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