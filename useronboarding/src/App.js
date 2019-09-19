import React, { useState, useEffect } from "react";
import "./App.css";
import Userform from "./Form";
import axios from "axios";

const userApi = "https://reqres.in/api/users";

function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  // const fetchUser = () => {
  //   axios
  //     .get(userApi)
  //     .then(res => {
  //       setUser(res.data.data);
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //     });
  // };

  const addUser = (userValues, actions) => {
    const newUser = {
      name: userValues.name,
      email: userValues.email,
      role: userValues.role,
      password: userValues.password,
      atc: userValues.atc
    };
    axios
      .post(userApi, newUser)
      .then(res => {
        const newlyOnboardedUser = res.data;
        setUser(user.concat(newlyOnboardedUser));
        actions.resetForm();
      })
      .catch(err => {});
  };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <div className="App">
      <div>
        <Userform onSubmit={addUser} />
      </div>
      {user.length
        ? user.map(el => (
            <div key={el.id}>
              <h3>You're welcome on board as our new {el.role}, {el.name}</h3>
              <div>{el.email} </div>
            </div>
            
          ))
        : <h3> We're happy to see you, type in your details and join our Team ! </h3>}
    </div>
  );
}

export default App;
