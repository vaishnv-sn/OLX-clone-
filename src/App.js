import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import signup from './Pages/Signup'

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/signup' component={signup}/>
      </Router>
    </div>
  );
}

export default App;
