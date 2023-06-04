import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext, firebaseContext } from './store/Context';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(firebaseContext);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })
  })

  return (
    <div>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/create' component={Create} />
      </Router>
    </div>
  );
}

export default App;
