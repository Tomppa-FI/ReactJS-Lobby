import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/login">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
