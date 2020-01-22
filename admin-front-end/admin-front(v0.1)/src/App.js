import React, { Component } from 'react';
import RouterURL from './router/RouterURL';
import {
} from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import RouterURL_Home from './router/RouterURL_Home';

class App extends Component {
  render(){ 
    return( 
      <Router>
        <div>
          <Header />
          
    
              <RouterURL />
          <Footer />
        </div>
      </Router>
    )
  };
}
export default App;
