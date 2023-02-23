import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';


ReactDOM.render(
  <div>
    <Router>
      <Navbar></Navbar>
          <Switch>
            <Route path="/" element={<Main />} />
          </Switch>
          <Switch>
            <Route path="/login" element={<Login />} />
          </Switch>
          <Switch>
            <Route path="/signup" element={<SignUp></SignUp>} />
          </Switch>
      </Router> 
  </div>
  ,
  document.getElementById('root')
);


