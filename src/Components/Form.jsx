import React from 'react'
import { Formik } from 'formik';
import Select from 'react-select'

export default function Form() {


  const options = [
    { value: 1, label: 'Chocolate' },
    { value: 2, label: 'Strawberry' },
    { value: 3, label: 'Vanilla' }
  ]



  return (
    <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '', modulo: null }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Requerido';
         }
         if (values.modulo === null) {
          errors.modulo = 'Debe elegir un modulo';
        }
         return errors;
       }}
       onSubmit={(values) => {
         console.log(values)

       }}
     >

       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         setFieldValue,
         setFieldTouched
       }) => (
         <form onSubmit={handleSubmit}>
          <div>
            
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             />
           {errors.email && touched.email && errors.email}
          </div>
          <div>

           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             />
           {errors.password && touched.password && errors.password}
          </div>
          {values.modulo}

          <Select 
          name='modulo'
          options={options} 
          value={options.filter(opt=> opt.value==values.modulo)}
          onChange={m=>{
            setFieldValue('modulo', m.value)
          }}
          onBlur={()=>{
            setFieldTouched('modulo');
          }}
          />
          {errors.modulo && touched.modulo && errors.modulo}
          
           <button type="submit" >
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>

  )
}
