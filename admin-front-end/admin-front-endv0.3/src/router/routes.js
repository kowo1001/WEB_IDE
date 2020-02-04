import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
// Main page
// import Login from '../pages/Login';
// import RegisterForm from '../containers/author/RegisterForm';
import Index from '../pages/Index'
import ProblemBank from '../pages/_Admin/ProblemsBack/ProblemsBank';
import ProjectManager from '../pages/ProjectManager';
import Template from '../pages/Template';
// Admin page
import Home from '../pages/_Admin/Home/Home';
import Class from '../pages/_Admin/_Class/Class';

import ProblemDetails from '../pages/_Admin/ProblemsBack/ProblemDetails';
import Header from '../components/Header/Header';
class Routes extends React.Component {
    render() {
      return (    
        <>
            <Route exact path = "/" component = {Index} />
            <Route exact path = "/:slug.html" component = {Index} />
           

            {/* Service page */}
            <Route exact path = "/listproblem" component = {ProblemBank} />
            <Route exact path = "/listproblem/:num" component = {ProblemDetails} />
            
            <Route exact path = "/projectmanager" component = {ProjectManager} />
            <Route exact path = "/template" component = {Template} />


            {/* Admin page */}
            <Route exact path = "/admin" component = {Home} />
            <Route exact path = "/admin/class" component = {Class} />
            <Route exact path = "/admin/class/:slug" component = {Class} />
            <Route exact path = "/admin/class/:slug/:page" component = {Class} />
         
      </>  
      )
    }
  }
export default Routes;
