import { useState } from "react";
import axios from "axios";
import "./App.css";
import Users from "./Component/AllUsers/Users";
import { Routers } from "./Routers";

function App() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  console.log(userId, userName, email);
  const getRegisterData = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/v1/users/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        userName: userName,
        userEmail: email,
      }),
    });
    const data = res.json();
    if (data.status === 409) {
      alert("oops!!");
    }
    if (data.status === 200) {
      alert("successful");
    }
  };
  return (
    <div className='App'>
      {/* <div className='form-control'>
        <input
          type='text'
          placeholder='Enter your user Id'
          className='input'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter your username'
          className='input'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter your email'
          className='input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className='flex-align-center'>
          <button className='btn btn-primary mt-1' onClick={getRegisterData}>
            Register
          </button>
        </div>
      </div> */}
      <Routers />
    </div>
  );
}

export default App;
