import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom'

import Logo from '../../olx-logo.png';
import './Login.css';
import { firebaseContext } from '../../store/Context';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(firebaseContext);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      history.push('/');
    }).catch((err)=>{
      alert(err.message);
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" alt='olxLogo' height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        {/* <a>Signup</a> */}
      </div>
    </div>
  );
}

export default Login;
