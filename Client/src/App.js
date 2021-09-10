import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Register from './components/register'
import Home from "./components/home"
import Budget from './components/budget';
import Login from './components/login';
import Landing from './components/landing'

function App() {
  return (
    <React.Fragment>
    <Route path="/" exact component={Landing} />
    <Route path="/register" exact component={Register} />
    <Route path="/home" component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/budget" exact component={Budget} />
    {/* <Login />
    <Budget/>
    <Register/> */}
  </React.Fragment>
  );
}

export default App;
