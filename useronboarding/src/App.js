import React,  { useState, useEffect, } from 'react';
import './App.css';
import userForm from './Form';




const userApi = 'https://reqres.in/api/users';

function App() {

  const [user, setUser] = useState();
  const [error, setError] = useState('');

  const fetchUser = () => {
    axios.get(userApi)
      .then(res =>{

      })
      .catch(err => {
        
      })

  }

  const addUser = (userValue, actions) => {  
    
    axios.post(userApi, value)
      .then(res => {
        
      })
      .catch(err => {
      });
  };
  return (
    <div className="App">
      <userForm onSubmit/>
    </div>
  );
}

export default App;
