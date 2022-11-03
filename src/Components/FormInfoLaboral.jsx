import React from 'react'
import {Typography, Grid, TextField} from '@mui/material';


export default function FormInfoLaboral() {




  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
     
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />


        </Grid>
      </Grid>
    </>
  )
}
