import React, { useState, useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { firebaseContext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom'

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const { firebase } = useContext(firebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((results) => {
      results.user.updateProfile({ displayName: username }).then(() => {
        firebase.firestore().collection('users').add({
          id: results.user.uid,
          phone,
          username
        }).catch((err) => {
          console.log(err);
        }).then(() => {
          history.push('/login')
        })
      })
    }).catch((err) => {
      console.log(err.message);
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" alt='olxLogo' height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            id="fname"
            name="fname"
          />
          <br />
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
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            id="phone"
            name="phone"
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
          <button>Signup</button>
        </form>
        {/* <a>Login</a> */}
      </div>
    </div>
  );
}
