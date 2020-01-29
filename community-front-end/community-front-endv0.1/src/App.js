import React, { Component } from 'react';
import RouterURL from './router/routes';
import {
} from 'react-bootstrap';
import './resources/css/main.css';
import {
  Route,
  Switch 
} from "react-router-dom";
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Routes from './router/routes';
import Home from '../src/pages/_Admin/Home/Home';
import {
  BrowserRouter as Router,
} from "react-router-dom";
class App extends Component {
  render(){         
    return( 
      <>
          <Header/>
            <Switch>
              <Routes />
            </Switch>     
          <Footer /> 
      </>
    )
  };
}
export default App;
