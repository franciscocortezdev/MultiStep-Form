import React from "react";
import { Grid, TextField, Switch, InputLabel } from "@mui/material";

export default function FormContacto({
  register,
  setValue,
  getValues,
  errors,
  trigger,
  watch,
}) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            name="Telefono"
            label="Telefono"
            fullWidth
            variant="standard"
            type="number"
            {...register("Telefono", { required: true })}
            error={Boolean(errors.Telefono)}
            helperText={Boolean(errors.Telefono) && "El telefono es requerido"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel>¿Tiene Whatsapp?</InputLabel>
          <Switch
            {...register("tieneWhatsapp")}
            checked={watch("tieneWhatsapp")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Correo"
            name="Correo"
            fullWidth
            variant="standard"
            {...register("Correo")}
          />
        </Grid>
      </Grid>
    </>
  );
}
