import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Register from './components/register'
import Home from "./components/home"

function App() {
  return (
    <React.Fragment>
    <Route path="/register" exact component={Register} />
    <Route path="/home" exact component={Home} />
    
  </React.Fragment>
  );
}

export default App;
