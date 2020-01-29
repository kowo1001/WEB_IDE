import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
// Main page
import ProblemBank from '../pages/ProblemsBank';
import ProjectManager from '../pages/ProjectManager';
import Template from '../pages/Template';
// Admin page
import Home from '../pages/_Admin/Home/Home';
import CreateClass from '../pages/_Admin/Home/CreateClass';
import Class from '../pages/_Admin/_Class/Class';
//Student page
import HomeStudent from '../pages/_Student/Home/Home'
import ClassRegister from '../pages/_Student/Home/ClassRegister';
import ClassStudent from '../pages/_Student/_Class/Class';

class Routes extends React.Component {
    render() {
      return (    
        <>
            <Route exact path = "/listproblem" component = {ProblemBank} />
            <Route exact path = "/projectmanager" component = {ProjectManager} />
            <Route exact path = "/template" component = {Template} />


            {/* Admin page */}
            <Route exact path = "/admin" component = {Home} />
            <Route exact path = "/admin/home" component = {Home} />
            <Route exact path = "/admin/home/createclass" component = {CreateClass} />

            <Route exact path = "/admin/class" component = {Class} />
            <Route exact path = "/admin/class/:slug" component = {Class} />
            <Route exact path = "/admin/class/:slug/:page" component = {Class} />
          

            {/* Student(User) */}
            <Route exact path = "/student" component = {HomeStudent} />
            <Route exact path = "/student/home" component = {HomeStudent} />
            <Route exact path = "/student/home/register" component = {ClassRegister} /> 

            <Route exact path = "/student/class" component = {ClassStudent} /> 
            <Route exact path = "/student/class/:slug" component = {ClassStudent} /> 
            <Route exact path = "/student/class/:slug/:page" component = {ClassStudent} />

           
      </>  
      )
    }
  }
export default Routes;
