import React, { Component } from 'react';
import { 
} from 'react-bootstrap';
import Home from './Home/Home';
import ProjectManager from './ProjectManage.js/ProjectManage';
import ProblemBank from './ProblemsBack/ProblemsBank';
import Header from '../../components/Header/Header';
import Class from './_Class/Class';
class Main extends Component {
  constructor(props)
  {
    super(props);
  }
  LayoutHomeBottom = () =>{
    var path = this.props.match.params.slug;
    var block = this.props.location.search;
    // path = path.substring(7, path.length);
    switch (path) {
        case "home":
            return <Home
            block = {block}
            />
        case "project":
            return <ProjectManager 
            block = {block}
            />  
        case "listproblem":
            return <ProblemBank 
            block = {block}
            />
        case "class":
            return <Class
            block = {block}
            />
        default:
            return <Home 
            block = {block}
            />
    }
  }
  render(){ 
    return(
    <>
        <Header/>
        <div className = "content">
            {this.LayoutHomeBottom()}
        </div>
    </>
    )
  };
}
export default Main;
