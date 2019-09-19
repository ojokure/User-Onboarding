import App from "./App";
import React,  { useState, useEffect, } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


const initialUserForm = {
  name:"",
  email:"",
  password:"",
  tos: false,
}

const validationSchema = yup.object().shape({
        name:yup.string().required(),
        email:yup.string().required().email(),
        password:yup.string().required().min(8)

})



function userForm({onSubmit}) {
debugger
return(
       <div>

        <Formik
        initialValues={initialUserForm}
        validationSchema={}
         onSubmit={onSubmit}
         render
        />
   </div>

)};

export default userForm;