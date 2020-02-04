import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
// Main page
// import Login from '../pages/Login';
// import RegisterForm from '../containers/author/RegisterForm';
import Index from '../pages/Index';
import ProblemBank from '../pages/_Student/ProblemsBack/ProblemsBank';
import ProjectManager from '../pages/ProjectManager';
import Template from '../pages/Template';

//Student page
import HomeStudent from '../pages/_Student/Home/HomeStudent'
import ClassRegister from '../pages/_Student/Home/ClassRegister';
import ClassStudent from '../pages/_Student/_Class/Class';
import ProblemDetails from '../pages/_Student/ProblemsBack/ProblemDetails';

class Routes extends React.Component {
    render() {
      return (    
        <>
            {/* <Header/> */}
            <Route exact path = "/" component = {Index} />
            <Route exact path = "/:slug" component = {Index} />
             {/* <Route exact path = "/login" component = {Login} /> */}
             {/* <Route exact path = "/register" component = {RegisterForm} /> */}

            <Route exact path = "/listproblem/list" component = {ProblemBank} />
            <Route exact path = "/listproblem/list/:num" component = {ProblemDetails} />
            
            <Route exact path = "/projectmanager/myproject" component = {ProjectManager} />
            <Route exact path = "/template" component = {Template} />

          
            {/* Student(User) */}
            <Route exact path = "/student/mypage" component = {HomeStudent} />
            <Route exact path = "/student/home" component = {HomeStudent} />
            <Route exact path = "/student/home/register" component = {ClassRegister} /> 

            <Route exact path = "/student/class" component = {ClassStudent} /> 
            <Route exact path = "/student/class/:slug" component = {ClassStudent} /> 
         
      </>  
      )
    }
  }
export default Routes;
