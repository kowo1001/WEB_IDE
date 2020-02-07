import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Index from '../pages/Index'
import Main from '../pages/_Admin/Main';
class Routes extends React.Component {
    render() {
      return (    
        <>
            <Route exact path = "/" component = {Index} />
            <Route path = "/index" component = {Index} />

            <Route exact path = "/admin" component = {Main} />
            <Route exact path = "/admin/:slug" component = {Main} />
      </>  
      )
    }
  }
export default Routes;
