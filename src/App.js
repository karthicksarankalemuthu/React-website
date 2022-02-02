import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Contect from './component/Contect';
import Navbar from './component/Navbar';
import Register from './component/register';
import Login from './component/login';




function App() {
  return (
    
    
    <>
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/About" component={About}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/Contect"component={Contect}/>
        <Route  path="/Register"component={Register}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
