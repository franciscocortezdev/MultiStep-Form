import React from 'react'
import { useFormik } from 'formik';
import Select from 'react-select'
import Switch from '@mui/material/Switch';

export default function Form() {
 

  const options = [
    { value: 1, label: 'Chocolate' },
    { value: 2, label: 'Strawberry' },
    { value: 3, label: 'Vanilla' }
  ]

  const Formulario = useFormik({
    initialValues: { email: '', password: '', modulo: null, activo: false },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Requerido';
                  
      }
      if (values.modulo === null) {
       errors.modulo = 'Debe elegir un modulo';

     }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values)

    }
  })


  return (
    <div>
    
         <form onSubmit={Formulario.handleSubmit}>
          <div>
            
           <input
             type="email"
             name="email"
             onChange={Formulario.handleChange}
             onBlur={Formulario.handleBlur}
             value={Formulario.values.email}
             style={Formulario.errors.email && Formulario.touched.email ? {borderColor: 'red'} : {}}
             />
           
           {Formulario.errors.email && Formulario.touched.email && Formulario.errors.email}
          </div>

          <div>

           <input
             type="password"
             name="password"
             onChange={Formulario.handleChange}
             onBlur={Formulario.handleBlur}
             value={Formulario.values.password}
             />
           {Formulario.errors.password && Formulario.touched.password && Formulario.errors.password}
          </div>
        

          <Select 
          name='modulo'
          options={options} 
          value={options.filter(opt=> opt.value==Formulario.values.modulo)}
          onChange={m=>{
            Formulario.setFieldValue('modulo', m.value)
          }}
          onBlur={()=>{
            Formulario.setFieldTouched('modulo');
          }}
          styles={{
            control: (provided, state) => ( Formulario.errors.modulo && Formulario.touched.modulo ? { ...provided, borderColor: 'red'}
            : provided )
          }}
          />
          {Formulario.errors.modulo && Formulario.touched.modulo && Formulario.errors.modulo}
          

          <Switch 
          checked={Formulario.values.activo}
          onChange={act=>{
            Formulario.setFieldValue('activo', act.target.checked)
            
          }}
          />


           <button type="submit" >
             Submit
           </button>
         </form>
     
   </div>

  )
}
