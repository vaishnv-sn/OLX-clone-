import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext, firebaseContext } from './store/Context';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import signup from './Pages/Signup';
import login from './Pages/Login';

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(firebaseContext);
  useEffect(() => {
    console.log(setUser);
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })
  })
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={signup} />
        <Route path='/login' component={login} />
      </Router>
    </div>
  );
}

export default App;
