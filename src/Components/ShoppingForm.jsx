import React from 'react'
import {Typography, Grid, TextField} from '@mui/material'
import { useFormik } from 'formik';
export default function ShoppingForm() {



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


    <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        
      </Grid>
    </>

  )
}
