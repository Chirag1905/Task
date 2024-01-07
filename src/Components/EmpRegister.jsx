import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const empdata = {
      "name":username,
      "email":email,
      "password":password
}

    fetch("http://restapi.adequateshop.com/api/authaccount/registration", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(empdata),
    })
        .then((res) => {
            alert("Register Successfully.");
            navigate("/home");
        })
        .catch((err) => {
            console.log(err.message);
        });
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"5px",color:"white",width:"50%",margin:"auto",marginTop:"5%"}}>
      <label style={{display:"flex",flexDirection:"column",gap:"5px",color:"white",marginTop:"10px"}}>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label style={{display:"flex",flexDirection:"column",gap:"5px",color:"white",marginTop:"10px"}}>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label style={{display:"flex",flexDirection:"column",gap:"5px",color:"white",marginTop:"10px"}}>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <Link className='btn btn-danger' to='/Login'>Register</Link>
    </form>
  );
};

export default Register;

