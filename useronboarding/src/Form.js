import App from "./App";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const initialUserForm = {
  name: "",
  email: "",
  password: "",
  tos: false
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(8)
});

function userForm({ onSubmit }) {
  debugger;
  return (
    <div>
      <Formik
        initialValues={initialUserForm}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={props => {
          return (
            <Form>
              <div>
                <label>Name</label>
                <Field name='name' type='text' placeholder='Name'/>
                <ErrorMessage />
              </div>
              <div>
                <label>Email</label>
                <Field name='email' type='email' placeholder='Email'/>
                <ErrorMessage />
              </div>
              <div>
                <label>Password</label>
                <Field name='password' type='text' placeholder='Password'/>
                <ErrorMessage />
              </div>
              <div>
                <label> Accept Terms & Conditions </label>
                <Field name='atc' type='checkbox' />
                <ErrorMessage />
              </div>
              <div>
                <button type='submit'> Submit </button>
              </div>
            </Form>
          );
        }}
      />
    </div>
  );
}

export default userForm;
