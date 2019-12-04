import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router,Route} from "react-router-dom";
import Dashboard from './components/dashboard';

class App extends Component{
  render(){
    return(

    <Router>
      <Route path='/' component={Dashboard}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Router>
    )
  }
}

export default App;
