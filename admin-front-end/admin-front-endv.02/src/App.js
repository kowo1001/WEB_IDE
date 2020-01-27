import React, { Component } from 'react';
import RouterURL from './router/RouterURL';
import {
} from 'react-bootstrap';
import './resources/css/main.css';
import {
  Route,
  Switch 
} from "react-router-dom";
import Header from '../src/components/Header/Header'
import Profile from '../src/components/Profile/Profile'
import Footer from '../src/components/Footer/Footer'

import Home from '../src/pages/_Admin/Home/Home'
import CreateClass from './pages/_Admin/_Class/CreateClass';
import Class from './pages/_Admin/_Class/Class';
import ClassRegister from './pages/ClassRegister';
class App extends Component {
  render(){         
    return( 
      <>
        <Header/>
        <Profile />
          <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/home/" component = {Home} />
              <Route exact path = "/home/createclass" component = {CreateClass} />

              <Route exact path = "/class" component = {Class} />
              <Route exact path = "/class/createhomwework" component = {Class} />
              <Route exact path = "/class/evalution" component = {Class} />


              <Route exact path = "/classregister" component = {ClassRegister} />
              <Route component = {Error} />
          </Switch>     
        <Footer /> 
      </>
    )
  };
}
export default App;
