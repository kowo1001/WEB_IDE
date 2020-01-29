import React from 'react';
import Profile from '../components/Profile/Profile';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from '../components/Pages/Home/Home';
import ClassRegister from '../components/Pages/Home/CreateClass';
import ProblemsBank from '../components/Pages/ProblemsBank';
import Template from '../components/Pages/Template';
import ProjectManager from '../components/Pages/ProjectManager';
import Class from '../components/Pages/Class/Class';
import Student from '../components/Pages/Class/Student';
import CreateClass from '../components/Pages/Home/CreateClass';

class RouterURL extends React.Component {
    render() {
      return (
        <div>        
          <Route exact  path = "/home/register" component = {CreateClass} />
            <Route exact path ="/class" component = {Class} />
            <Route exact path ="/student" component = {Student} />
            <Route exact path ="/home" component = {Home} />
            <Route exact path = "/register" component = {ClassRegister} />
            <Route exact path = "/problems" component = {ProblemsBank}/>
            <Route exact path = "/project" component = {ProjectManager}/>
            <Route exact path = "/templates" component = {Template}/>
        </div>
      )
    }
  }
export default RouterURL;
