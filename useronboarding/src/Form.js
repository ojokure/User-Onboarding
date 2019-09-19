import App from "./App";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const initialUserForm = {
  name: "",
  email: "",
  password: "",
  atc: false
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

function Userform({ onSubmit }) {
  return (
    <Formik
      initialValues={initialUserForm}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      render={props => {
        return (
          <Form>
            <div>
              <label>Name</label>
              <Field name="name" type="text" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>Password</label>
              <Field name="password" type="text" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <Field name="atc" type="checkbox" />
              <label> Accept Terms & Conditions </label>

              <ErrorMessage name="atc" component="div" />
            </div>
            <div>
              <button type="submit"> Submit </button>
            </div>
          </Form>
        );
      }}
    />
  );
}

export default Userform;
