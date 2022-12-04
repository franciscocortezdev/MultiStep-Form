import React from "react";
import { Grid, TextField } from "@mui/material";

export default function FormInfoLaboral({
  Formulario: {
    register,
    setValue,
    getValues,
    formState: { errors },
    trigger,
  },
}) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="Profesion"
            label="Profesion"
            fullWidth
            variant="standard"
            {...register("Profesion", { required: true })}
            error={Boolean(errors.Profesion)}
            helperText={
              Boolean(errors.Profesion) && "La profesion es requerida"
            }
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            name="TelefonoTrabajo"
            label="Telefono del trabajo"
            fullWidth
            variant="standard"
            type="number"
            {...register("TelefonoTrabajo")}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="DireccionTrabajo"
            label="Direccion del trabajo"
            fullWidth
            variant="standard"
            {...register("DireccionTrabajo")}
          />
        </Grid>
      </Grid>
    </>
  );
}
