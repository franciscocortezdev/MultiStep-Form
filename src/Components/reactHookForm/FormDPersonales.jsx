import React from "react";
import { Grid, TextField, InputLabel, FormHelperText } from "@mui/material";
import Select from "react-select";

export default function FormDPersonales({
  Formulario: {
    register,
    setValue,
    getValues,
    formState: { errors },
    trigger,
  },
}) {
  const estadosCiviles = [
    {
      id: 1,
      label: "Soltero",
    },
    {
      id: 2,
      label: "Casado",
    },
    {
      id: 3,
      label: "Divorciado",
    },
  ];

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="Nombre"
            label="Nombre"
            fullWidth
            variant="standard"
            {...register("Nombre", { required: true })}
            error={Boolean(errors.Nombre)}
            helperText={Boolean(errors.Nombre) && "El nombre es requerido"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="Apellido"
            label="Apellido"
            fullWidth
            variant="standard"
            {...register("Apellido")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="Direccion"
            label="Direccion"
            fullWidth
            variant="standard"
            {...register("Direccion")}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Fecha de Nacimiento</InputLabel>
          <TextField
            name="Edad"
            fullWidth
            variant="standard"
            type="date"
            {...register("Edad", { required: true })}
            error={Boolean(errors.Edad)}
            helperText={
              Boolean(errors.Edad) && "La fecha de nacimiento es requerida"
            }
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Estado civil</InputLabel>
          <Select
            placeholder={"Seleccione su estado civil"}
            options={estadosCiviles}
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.label}
            {...register("estadoCivil", { required: true })}
            value={estadosCiviles.filter(
              (opt) => opt.id === getValues("estadoCivil")
            )}
            onChange={(m) => {
              setValue("estadoCivil", m.id, { shouldValidate: true });
            }}
            onBlur={() => {
              trigger("estadoCivil");
            }}
            styles={{
              control: (provided, state) =>
                Boolean(errors.estadoCivil)
                  ? {
                      ...provided,
                      borderColor: "red",
                      boxShadow: "0 0 0 1px red",
                      "&:hover": { borderColor: "red" },
                    }
                  : provided,
            }}
          />
          {Boolean(errors.estadoCivil) && (
            <FormHelperText error={true}>
              El estado civil es requerido
            </FormHelperText>
          )}
        </Grid>
      </Grid>
    </>
  );
}
