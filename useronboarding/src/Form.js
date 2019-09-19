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



function userForm() {

return(
       <div>

        <Formik
        
        />
   </div>

)};

export default userForm;