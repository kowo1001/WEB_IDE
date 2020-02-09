import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Index from '../pages/Index'
import Main from '../pages/Student/Main';
class Routes extends React.Component {
    render() {
      return (    
        <>
            <Route exact path = "/" component = {Index} />
            <Route exact path = "/index" component = {Index} />

            <Route exact path = "/student" component = {Main} />
            <Route exact path = "/student/:slug" component = {Main} />
      </>  
      )
    }
  }
export default Routes;
 