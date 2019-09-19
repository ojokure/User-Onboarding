import React, { useState, useEffect } from "react";
import "./App.css";
import userForm from "./Form";
import axios from "axios";

const userApi = "https://reqres.in/api/users";

function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  const fetchUser = () => {
    axios
      .get(userApi)
      .then(res => {
        setUser(res.data.data);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  const addUser = (userValue, actions) => {
    axios
      .post(userApi, userValue)
      .then(res => {})
      .catch(err => {});
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <userForm onSubmit={addUser} />
      {user.length ? (
        user.map(el => <div key={el.id}> {el.first_name}</div>)
      ) : (
        <h3>No User on board!!</h3>
      )}
    </div>
  );
}

export default App;
