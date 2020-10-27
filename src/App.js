 import React from 'react';
import './App.css';
import  Navbar from './components/Navbar'
import QuizOne from './components/QuizOne'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './components/Home';
function App() {
  return (
     
    <Router>
      <Navbar/>
      <Switch>
        {/* <Route path="/" exact component={Home}/> */}
        {/* <Route path="/quiz1"component={QuizOne}/> */}
      </Switch>
    </Router>
     
  );
}

export default App;
