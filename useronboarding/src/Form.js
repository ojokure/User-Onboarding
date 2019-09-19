import App from "./App";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";

const initialUserForm = {
  name: "",
  email: "",
  password: "",
  role: [],
  atc: false
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),
    role: yup
        .string()
        .oneOf(["ux designer", "data scientist", "front-end architect"])
        .required('Please select a role'),
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
              <label> Name </label>
              <Field name="name" type="text" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label> Email </label>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label> Role </label>
               {/* <Field
                type="dropdownlist"
                name="role"
                data={["ux engineer", "data scientist", "fornt-end architect"]}
                placeholder="select a role"
                touched={props.values.role} */}
                <select name="role" type="selectlist" >
                <option> select a role </option>
                <option value="UX DESIGNER">UX DESIGNER</option>
                <option value="FRONT-END ARCHITECT">FRONT-END ARCHITECT</option>
                <option value="BACK-END ARCHITECT">BACK-END ARCHITECT</option>
                <option value="DATA SCIENTIST">DATA SCIENTIST</option>
              </select>
              <ErrorMessage name="role" component="div" />
            </div>
            <div>
              <label> Password </label>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <Field name="atc" type="checkbox" checked={props.values.atc} />
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
