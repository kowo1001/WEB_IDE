import React from 'react';
import Profile from '../components/Profile/Profile';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import CreateClass from '../components/Pages/Home/CreateClass';
import ListClass from '../components/Pages/Home/ListClass';
import Home from '../components/Pages/Home/Home';
class RouterURL_Home extends React.Component {
    render() {
      return (
        <div>        
            <Route exact  path = "/home/register" component = {CreateClass} />
            <Route exact  path = "/home/listclass" component = {ListClass} />
            <Route exact  path = "/home" component = {ListClass} />
        </div>
      )
    }
  }
export default RouterURL_Home;
