import React, { Component } from 'react';
import RouterURL from './router/routes';
import {
} from 'react-bootstrap';
import './resources/scss/main.scss';
import './resources/css/grid.css';
import {
  Route,
  Switch 
} from "react-router-dom";
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Routes from './router/routes';
class App extends Component {
  render(){         
    return( 
      <>
            <Switch>
              <Routes />
            </Switch>     
          <Footer /> 
      </>
    )
  };
}
export default App;
