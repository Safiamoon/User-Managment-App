import React from 'react';
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from './components/layouts/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router> 
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
