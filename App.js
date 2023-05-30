import React from "react";
import { Formik } from 'formik';

const App = () => (
  <div>
  <h1>Sign In!</h1>
  <Formik
    initialValues={{ email: '', 
    password: '' }}
    validate={values => {
      const errors = {};
      if (!values.email, !values.password) {
        errors.email = 'Field Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email, values.password)
      ) {
        errors.email = 'Invalid email address';
        errors.password = 'Invalid Password';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      
    }) => (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && errors.email}
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && errors.password}
        <button type="Submit Successfull" enable={isSubmitting}>
          Submit
        </button>
        
      </form>
    )}
  </Formik>
</div>
);
export default App;

