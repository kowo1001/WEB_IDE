import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

// import ClassRegister from '../components/Pages/Home/CreateClass';
// import ProblemsBank from '../components/Pages/ProblemsBank';
// import Template from '../components/Pages/Template';
// import ProjectManager from '../components/Pages/ProjectManager';
// import Class from '../components/Pages/Class/Class';
// import ClassEvaluation from '../components/Pages/Class/Evaluation';
// import CreateClass from '../components/Pages/Home/CreateClass';
// import ListClass from '../components/Pages/Home/ListClass';
// import HomeworkList from '../components/Pages/Class/HomeworkList';
class RouterURL extends React.Component {
    render() {
      return (
        <>        
            {/* <Route exact path = "/" component = {Home} />
            <Route exact path = "/home/" component = {Home} />
            <Route exact path = "/home/:page" component = {ListClass} />
            <Route component = {Error} /> */}
            
            {/* <Route exact path ="/" component = {Home} />
            <Route exact path ="/home" component = {Home} />
            <Route exact path = "/register" component = {ClassRegister} />
            <Route exact path = "/problems" component = {ProblemsBank}/>
            <Route exact path = "/project" component = {ProjectManager}/>
            <Route exact path = "/templates" component = {Template}/> */}

            {/* Home page*/}
            {/* <Route exact  path = "/home/register" component = {CreateClass} />
            <Route exact  path = "/home/listclass" component = {ListClass} />
            <Route exact  path = "/home" component = {ListClass} /> */}


            {/* <Route exact  path = "/class" component = {Class}/> */} 
            {/* ClassPage */}
            {/* <Route exact  path = "/class" component = {Class} />
            <Route exact  path = "/class/evaluation" component = {ClassEvaluation} />
          <Route exact  path = "/class/student" component = {ClassEvaluation} />*/}
          

        </>
      )
    }
  }
export default RouterURL;
