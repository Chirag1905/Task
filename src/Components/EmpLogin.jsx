import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const empdata = {

      "email":username,
      "password":password
}

    fetch("http://restapi.adequateshop.com/api/authaccount/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json",
      },
        body: JSON.stringify(empdata),
    })
        .then((res) => {
            alert("Login Successfully.");
            navigate("/home");
        })
        .catch((err) => {
            console.log(err.message);
        });
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"5px",color:"white",width:"50%",margin:"auto",marginTop:"5%"}}>
      <label  style={{display:"flex",flexDirection:"column",gap:"5px",color:"white",marginTop:"10px"}}>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label  style={{display:"flex",flexDirection:"column",gap:"5px",color:"white",marginTop:"10px"}}>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Link className='btn mt-4 btn-danger' to='/home'>Login</Link>
    </form>
  );
};

export default Login;
